<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
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
      <ul class="header__menu" data-aos="fade-down">
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
    </nav>
    <div class="dropdown-overlay" v-show="showDropdown" @click="toggleDropdown"></div>
    <div class="dropdown" v-show="showDropdown">
      <p>Username</p>
      <p>Date Joined</p>
      <p>Total Orders</p>
      <button class="log-btn">Log out</button>
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

.log-btn{
 margin-top: 5vh;
 font-family: var(--plus-jakarta-sans);
 font-size: 20px;
 background-color: var(--secondary-color);
 padding: 5px 30px;
 border-radius: 8px;
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
  z-index: 999; /* Ensure the overlay appears below the dropdown */
}

.dropdown {
  font-family: var(--plus-jakarta-sans);
  text-align: center;
  font-size: 20px;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Ensure the dropdown appears above other content */
}


</style>