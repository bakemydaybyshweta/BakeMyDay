<template>
    <footer class="footer flex-between">
      <div class="footer__logo">
        <img src="../assets/full-logo-dark.png" style="width: 350px; height: 66.74px;"/>
      </div>

      <ul class="footer__social">
        <li class="flex-center facebook">
          <img src="../assets/facebook.svg" alt="facebook" />
        </li>
        <a href="https://www.instagram.com/bakemydaybyshweta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <li class="flex-center instagram">
          <img src="../assets/instagram.svg" alt="instagram" />
        </li>
      </a>
      <a href="https://wa.me/919702776807/?text=Hi Shweta, I would love to try your cakes" target="_blank">
        <li class="flex-center whatsapp">
          <img src="../assets/whatsapp.svg" alt="whatsapp" />
        </li>
      </a>
      </ul>
    </footer>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cartItems: [], // Initialize array to store cart items
      userid: null // Initialize userid property
    };
  },
  mounted() {
    this.fetchUserId(); // Call fetchUserId method when the component is mounted
    this.fetchCartItems(); // Fetch cart items when the component is mounted
  },
  methods: {
    fetchUserId() {
      const userid = sessionStorage.getItem('user_id');
      if (userid) {
        console.log('Id:',userid)
        this.userid = userid;
      } else {
        // Handle case where userid is not found in session storage
        console.error('Userid not found in session storage.');
      }
    },
    async fetchCartItems() {
      try {
        if (this.userid) {
          // Make GET request to fetch cart items for the current user
          const response = await axios.get(`http://127.0.0.1:8000/cart/`);
          // Update cartItems array with fetched cart items
          this.cartItems = response.data.data;
        } else {
          console.error('Userid not available.');
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
        // Handle error
      }
    }
  }
};
</script>


<style>
.footer {
  width: 100%;
  padding: 20px 40px;
  background: var(--color-white);
  flex-wrap: wrap;
  gap: 20px;
  overflow: hidden;
}

.footer__logo {
  cursor: pointer;
}


.footer ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 64px;
}

.footer ul:last-child {
  gap: 32px;
}

.footer__social li {
  width: 42px;
  height: 42px;
  background-color: var(--secondary-color);
  border-radius: 100%;
  cursor: pointer;
  transition: 0.5s ease;
}

.footer__social li img {
  width: 45%;
  height: 45%;
  object-fit: contain;
}

.footer__social .facebook:hover{
  transform: scale(1.2);
  background-color: #1877F2;
}

.footer__social .instagram:hover{
  transform: scale(1.2);
  background-image: linear-gradient(325deg, #fedaa7,#f58529,#dd2a7b,#8134af,#515bd4);
}

.footer__social .whatsapp:hover{
  transform: scale(1.2);
  background-color: #25D366;
}

</style>