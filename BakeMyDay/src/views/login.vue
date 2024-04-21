<template>
    <div class="wrapper">
      <div class="inner">
        <img src="" alt="" class="image-1">
        <form @submit.prevent="handleLogin">
          <img src="../assets/full-logo-dark.png" alt="" style="margin-bottom: 20px; margin-left: 30px;">
          <h3>Enter Your Details</h3>
          <div class="form-holder">
            <span class="lnr"><i class="fa-solid fa-user"></i></span>
            <input type="text" class="form-control" placeholder="Username" v-model="username">
          </div>
          <div class="form-holder">
            <span class="lnr"><i class="fa-solid fa-lock"></i></span>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
          </div>
          <button type="submit">
            <span>Log in</span>
          </button>
          <p>Are you new into our world of deliciousness? <router-link to="/signup" exact><span class="cross-link">Sign up</span></router-link> and get started!</p>
        </form>
        <img src="" alt="" class="image-2">
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    computed: {
    isLoggedIn() {
      return !!sessionStorage.getItem('session_id');
        }
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/login/', {
                    username: this.username,
                    password: this.password
                });
                console.log(response.data); // Handle successful login response
                // Extract session ID from the response
                const sessionId = response.data.session_id;
                const userId = response.data.user_id;

                // Save session ID to sessionStorage
                sessionStorage.setItem('session_id', sessionId);
                sessionStorage.setItem('user_id', userId);
                
                // Redirect to home or handle success action
                this.$router.push('/auth-home');
                console.log(router.push())

         } catch (error) {
                console.log(error)
                this.error = 'Invalid email or password'; // Handle login error
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


<style>
input,
textarea,
select,
button {
    font-family: var(--plus-jakarta-sans);
}

body{
    max-width: 100%;
}

.wrapper{
    background: linear-gradient(rgba(0,0,0,0.367),rgba(0,0,0,0.429)),url("../assets/loging-bg.png"),var(--color-creamson);
    background-position: center;
    background-size: cover;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
    margin: 0;
    text-align: center;
}

p{
    margin-top: 20px;
    font-size: 16px;
}

img {
    max-width: 100%;
}

ul {
    padding-left: 0;
    margin-bottom: 0;
}

a {
    text-decoration: none;
}

:focus {
    outline: none;
}

.cross-link{
    color: var(--primary-color);
    text-decoration: underline;
    font-weight: 600;
}

.wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.inner {
    position: relative;
    width: 435px;
}

.image-1 {
    position: absolute;
    bottom: -40px;
    left: -307px;
    z-index: -1;
    transform: rotate(-5deg);
}

.image-2 {
    position: absolute;
    bottom: 0;
    right: -43vh;
    transform: rotate(10deg);
}

form {
    width: 100%;
    position: relative;
    z-index: 9;
    padding: 30px 61px 66px;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

h3 {
    font-size: 30px;
    font-family: var(--playfair-display);
    color: #333;
    /* letter-spacing: 3px; */
    text-align: center;
    margin-bottom: 33px;
}

.form-holder {
    position: relative;
    margin-bottom: 21px;
}

.form-holder span {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #333;
}


.form-control {
    border: none;
    border-bottom: 1px solid #e6e6e6;
    display: block;
    width: 100%;
    height: 38px;
    background: none;
    padding: 3px 42px 0px;
    color: #666;
    font-size: 16px;
}

.form-control::-webkit-input-placeholder {
    font-size: 17px;
    color: #999;
    transform: translateY(1px);
}

.form-control::-moz-placeholder {
    font-size: 14px;
    color: #999;
    transform: translateY(1px);
}

.form-control:-ms-input-placeholder {
    font-size: 14px;
    color: #999;
    transform: translateY(1px);
}

.form-control:-moz-placeholder {
    font-size: 14px;
    color: #999;
    transform: translateY(1px);
}

.form-control:focus {
    border-bottom: 1px solid var(--primary-color);
}

button {
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 49px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: var(--primary-color);
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
}

button span {
    position: relative;
    z-index: 2;
}

button:before,
button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(10, 5, 13, 0.25);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}

button:after {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
}

button:hover:before,
button:hover:after {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}

@media (max-width: 991px) {
    .inner {
        width: 400px;
        left: 4%;
    }
}

@media (max-width: 767px) {
    .inner {
        width: 100%;
        left: 0;
    }

    .image-1,
    .image-2 {
        display: none;
    }

    form {
        padding: 35px;
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -ms-box-shadow: none;
        -o-box-shadow: none;
    }

    .wrapper {
        background: none;
    }
}

/*# sourceMappingURL=style.css.map */
</style>