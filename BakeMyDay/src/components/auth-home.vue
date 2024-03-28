<template>
    <section class="hero">
      <div class="hero-image">
        <img src="../assets/herobg.png" alt="sushi" data-aos="fade-up" />
        
        <div class="hero-image__overlay"></div>
      </div>
  
      <div class="hero-content">
        <div class="hero-content-info" data-aos="fade-left">
          <h1>Where flavours & people meet...</h1>
          <p>Savor the Sweet Moments: Home Baked Happiness Delivered to Your Doorstep</p>
  
          <!-- <div class="hero-content__buttons">
           <router-link to="/login"> <button class="hero-content__order-button">Log In</button></router-link>
          </div> -->
          <div class="hero-content__buttons">
            <button @click="handleLogOut" class="hero-content__order-button">Log Out</button>
          </div>
        </div>
  
        <div class="hero-content__testimonial" data-aos="fade-up">
          <div class="hero-content__customer flex-center">
            <h4>18<span>k+</span></h4>
            <p>Happy Customers</p>
          </div>
  
          <div class="hero-content__review">
            <!-- <img src="../assets/user.png" alt="user" />
            <p>"Amazing ,delicious &fresh homemade cake ❤️ i highly recommend"</p> -->
            <Slider/>
          </div>
        </div>
      </div>
    </section>
    <About/>
    <Popular/>
    <Trending/>
    <Contact/>
    <Foot/>
  </template>
  
<script>
import Contact from './contact.vue';
import About from './aboutus.vue';
import Popular from './popular.vue';
import Trending from './trending.vue';
import Foot from './footer.vue';
import Slider from './carousel.vue';
import axios from 'axios';

export default {
  components: {
    Contact,
    About,
    Popular,
    Trending,
    Foot,
    Slider
  },
  methods: {
        async handleLogOut() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/logout/')
                sessionStorage.removeItem('session_id');
                // console.log(response.data) // Handle successful login response
                
                // Redirect to home or handle success action
                this.$router.push('/');
                console.log(router.push())
                
         } catch (error) {
                console.log(error)
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


<style>
  .hero {
    display: flex;
    min-height: calc(100vh - 74px);
    overflow: hidden;
  }
  
  .hero-image {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 5
  }
  
  .hero-image img {
    width: 120%;
    height: 100%;
    object-fit: contain;
  }
  
  .hero-image__overlay {
    position: absolute;
    inset: 0;
    width: 100%;
  
    background-color: var(--primary-color);
    z-index: -1;
  }
  
  .hero-image h2 {
    position: absolute;
    bottom: 0;
    padding: 20px;
  
    font-family: var(--playfair-display);
    font-weight: 700;
    font-size: 120px;
    line-height: 138px;
    color: #fff;
  }
  
  .hero-content {
    flex: 1.22;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  
  .hero-content-info {
    padding: 64px;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .hero-content-info h1 {
    font-size: 75px;
    font-weight: 600px;
    font-family: var(--playfair-display);
    color: var(--secondary-color);
  }
  
  .hero-content-info p {
    margin: 32px 0 0 0px;
    font-family: var(--plus-jakarta-sans);
    color: var(--secondary-color);
    font-size: 18px;
    font-weight: 400;
  }
  
  .hero-content__buttons {
    margin: 41px 0 0 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
  }
  
  .hero-content__order-button {
    padding: 20px;
    border-radius: 36px;
    min-width: 212px;
    outline: none;
    border: none;
    background: var(--secondary-color);
  
    cursor: pointer;
  
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }
  
  .hero-content__testimonial {
    padding: 32px 64px 32px 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  
    background: var(--color-white)
  }
  
  .hero-content__customer {
    flex: 1;
    gap: 10px;
  }
  
  .hero-content__customer h4 {
    font-size: 62px;
    font-weight: 400;
    font-family: var(--playfair-display)
  }
  
  .hero-content__customer p {
    font-size: 16px;
    font-weight: 400;
    font-family: var(--plus-jakarta-sans);
    color: var(--secondary-color);
    opacity: 0.5;
  }
  
  .hero-content__review {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 20px;
    border-left: 1px solid rgba(2, 2, 2, 0.1);
    min-width: 200px;
  }
  
  .hero-content__review img {
    width: 42px;
    height: 42px;
    object-fit: contain;
  }
  
  .hero-content__review p {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    font-family: var(--plus-jakarta-sans);
    color: var(--secondary-color);
    opacity: 0.8
  }

  @media screen and (max-width: 1060px) {
  .hero {
    flex-direction: column;
  }

  .hero-image img {
    width: 80vh;
    /* transform: matrix(1, 0.05, 0, 1.25, 0, 0) !important; */
  }
} 

@media screen and (max-width: 750px) {
  .hero-image h2 {
    font-size: 70px;
    line-height: 90px;
  }
}

@media screen and (max-width: 550px) {
  .hero-image h2 {
    font-size: 40px;
    line-height: 60px;
  }

  .hero-content-info {
    padding: 32px;
  }

  .hero-content-info h1 {
    font-size: 60px;
  }

  .hero-content-info p {
    margin: 32px 0;
  }

  .hero-content__buttons {
    margin: 41px 0;
  }

  .hero-content__testimonial {
    padding: 32px;
  }
}

  </style>
  