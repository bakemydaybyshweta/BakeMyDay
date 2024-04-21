<script>
import axios from 'axios';

export default {
  data() {
    return {
      isMobile: false,
      showSidebar: false,
      showDropdown: false,
      userid: null, // Initialize userid property
      userData: {}, // Initialize userData object to store user information
    };
  },
  mounted() {
    // Check screen width on component mount
    this.checkScreenWidth();
    // Listen to window resize event to update isMobile
    window.addEventListener('resize', this.checkScreenWidth);

    this.fetchUserId(); // Call fetchUserId method when the component is mounted
  },
  beforeDestroy() {
    // Remove event listener to avoid memory leaks
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth <= 900;
    },
    toggleMobileMenu() {
      this.showSidebar = !this.showSidebar;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    fetchUserId() {
      const userid = sessionStorage.getItem('user_id');
      if (userid) {
        console.log('Id:', userid);
        this.userid = userid;
        this.fetchUserData(); // Call fetchUserData method to fetch user data
      } else {
        // Handle case where userid is not found in session storage
        console.error('Userid not found in session storage.');
      }
    },
    async fetchUserData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/users/?user_id=${this.userid}`);
        this.userData = response.data.data[0]; // Assuming user data is returned as an array with one object

        // Format date_joined
        const dateJoined = new Date(this.userData.date_joined);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        this.userData.date_joined = dateJoined.toLocaleDateString('en-GB', options);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error
      }
    },
    async handleLogOut() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/logout/');
        sessionStorage.removeItem('session_id');
        // Redirect to home or handle success action
        this.$router.push('/');
        console.log(router.push());
      } catch (error) {
        console.log(error);
        this.error = 'Logout failed'; // Handle logout error
      }
    },
    getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  }
};
</script>

<template>
  <header>
    <nav class="header__nav">
      <div class="header__logo">
        <img src="../assets/full-logo-dark.png" style="width: 350px; height: 66.74px;" data-aos="fade-down" />
        <div class="header__logo-overlay"></div>
      </div>
      <!-- Render hamburger menu if screen width is less than 900px -->
      <ul class="header__menu" v-if="!isMobile" data-aos="fade-down">
        <li>
          <router-link to="/auth-home" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/order" exact>Order</router-link>
        </li>
        <li>
          <router-link to="/gallery" exact>Gallery</router-link>
        </li>
        <li>
          <router-link to="/cart" exact><i class="fa-solid fa-cart-shopping"></i></router-link>
        </li>
        <li>
          <div class="test">
            <i class="fa-solid fa-circle-user" style="font-size: 25px; margin-right: 3vh;" @click="toggleDropdown"></i>
          </div>
        </li>
      </ul>
      <!-- Render hamburger menu button if screen width is less than 900px -->
      <div v-if="isMobile" class="hamburger-menu" @click="toggleMobileMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
     <!-- Sidebar for mobile view -->
     <aside class="sidebar" v-show="showSidebar">
      <ul class="sidebar__menu">
        <li>
          <router-link to="/auth-home" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/order" exact>Order</router-link>
        </li>
        <li>
          <router-link to="/gallery" exact>Gallery</router-link>
        </li>
        <li>
          <router-link to="/cart" exact>Cart</router-link>
        </li>
        <li>
          <div class="test" @click="toggleDropdown">
            <i class="fa-solid fa-circle-user"></i>
            <span class="sidebar-user"> User</span>
          </div>
        </li>
      </ul>
    </aside>
    <!-- Dropdown menu for user -->
    <div class="dropdown-overlay" v-show="showDropdown" @click="toggleDropdown"></div>
    <div class="dropdown" v-show="showDropdown">
      <p><span class="bold_info">Username:</span> {{ userData.username }}</p>
      <p><span class="bold_info">Email-id:</span> {{ userData.email_id }}</p>
      <p><span class="bold_info">Date Joined:</span> {{ userData.date_joined }}</p>
      <button class="log-btn" @click="handleLogOut">Log out</button>
    </div>
  </header>
</template>

<style>
.header__nav {
  background-color: #fff;
  display: flex;
  overflow: hidden;
}

.header__logo {
  flex: 1;
  display: flex;
  position: relative;
  padding: 10px 15px;
}

/* .header__logo-overlay {
     position: absolute;
     inset: 0;
     width: 100%;
     background-color: var(--primary-color);
     z-index: -1;
   } */

.header__menu,
.header__menu-mobile {
  padding: 20px;
  flex: 1.236;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 64px;
  list-style: none;
}

.header__menu li {
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  font-size: 16px;
  text-transform: uppercase;
  line-height: 20px;
  cursor: pointer;
}

.header__menu li:hover {
  text-decoration: underline;
}

.header__menu li i {
  font-size: 20px;
}

.header__menu-mobile {
  display: none;
  gap: 20px;

  position: relative;
}

.router-link-active {
  color: var(--primary-color);
  text-decoration: underline;
}

.log-btn {
  margin-top: 5vh;
  font-family: var(--plus-jakarta-sans);
  font-size: 20px;
  background-color: var(--secondary-color);
  padding: 5px 30px;
  border-radius: 36px;
  color: #fff;
  cursor: pointer;
}

.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  /* Ensure the overlay appears below the dropdown */
}

.dropdown {
  font-family: var(--plus-jakarta-sans);
  text-align: center;
  font-size: 20px;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  /* Ensure the dropdown appears above other content */
}

.dropdown .bold_info {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
}

.dropdown p {
  font-size: 16px;
}
.hamburger-menu{
  margin: 30px;
}

.hamburger-menu i{
  font-size: 28px;
}

@media (min-width: 901px) {
  /* Hide sidebar on larger screens */
  .sidebar {
    display: none;
  }
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: var(--color-white);
  z-index: 1000;
  overflow-y: auto;
}

.sidebar__menu {
  list-style: none;
  padding: 20px;
}

.sidebar__menu li {
  /* margin-bottom: 5vh; */
  padding: 2.5vh 0vh;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease;
}

.sidebar__menu li:hover{
  background-color: #6e008c6e;
}

.sidebar__menu li a, .sidebar-user {
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  font-size: 16px;
  text-transform: uppercase;
  line-height: 20px;
  cursor: pointer;
}

.hamburger-menu {
  display: none;
  cursor: pointer;
}

@media (max-width: 900px) {
  /* Show hamburger menu button when screen width is less than or equal to 900px */
  .hamburger-menu {
    display: block;
  }
  /* Hide the sidebar by default on smaller screens */
}
</style>