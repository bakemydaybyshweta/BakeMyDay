<template>
  <div class="all">
    <div class="custom-order">
      <div class="inner-custom">
        <h2>Baking your ideas into reality is our speciality!</h2>
        <p>Order a custom cake or explore other products below</p>
        <button @click="toggleDropdown">Create A Custom Cake</button>
      </div>
    </div>
    <div class="container">
      <div class="row-items">
        <!-- Iterate over products and display product cards -->
        <div v-for="product in products" :key="product.product_name" class="container-box">
          <div class="container-img">
            <img src="../assets/cake-stock.jpg" alt="Product Image" />
          </div>
          <h4>{{ product.product_name }}</h4>
          <p>{{ product.description }}</p>
          <p class="price">₹{{ product.price }}</p>
          <!-- Add To Cart button -->
          <button @click="addToCart(product)">Add To Cart</button>
        </div>
      </div>
    </div>
    <div class="dropdown-overlay" v-show="showDropdown" @click="toggleDropdown"></div>
    <div class="dropdown" v-show="showDropdown">
      <!-- <span>Cake Flavor</span>
      <input type="text">
      <span>Filling (if applicable)</span>
      <input type="text">
      <span>Frosting</span>
      <input type="text">
      <span>Decoration Style</span>
      <input type="text">
      <span>Color Scheme</span>
      <input type="text">
      <span>Message/Text on Cake </span>
      <input type="text">
      <span>Dietary Restrictions/Allergies (if any)</span>
      <input type="text">
      <span>Special Instructions/Additional Details:</span>
      <input type="text">
      <button class="custom_order_btn">Order</button> -->
      <form>
        <div class="form-container">
            <div class="form-column">
                <span>Cake Flavor</span>
                <input type="text">
                <span>Filling (if applicable)</span>
                <input type="text">
                <span>Frosting</span>
                <input type="text">
            </div>
            <div class="form-column">
                <span>Decoration Style</span>
                <input type="text">
                <span>Color Scheme</span>
                <input type="text">
                <span>Message/Text on Cake</span>
                <input type="text">
            </div>
            <div class="form-column">
                <span>Dietary Restrictions/Allergies (if any)</span>
                <input type="text">
                <span>Special Instructions/Additional Details:</span>
                <input type="text">
                <span>Name</span>
                <input type="text">
            </div>
            <div class="form-column">
                <span>Contact</span>
                <input type="text">
                <span>Address</span>
                <input type="text">
            </div>
        </div>
        <button type="submit" class="custom_order_btn">Order</button>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [], // Initialize products array to store fetched product details
      showDropdown: false,
      userid: null // Initialize userid property
    };
  },
  mounted() {
    // Fetch products data when the component is mounted
    this.fetchProducts();
    this.fetchUserId(); // Call fetchUserId method when the component is mounted
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    fetchUserId() {
      const userid = sessionStorage.getItem('user_id');
      if (userid) {
        this.userid = userid;
        console.log(userid)
      } else {
        // Handle case where userid is not found in session storage
        console.error('Userid not found in session storage.');
      }
    }
    ,
    async fetchProducts() {
      try {
        // Make GET request to fetch product data from Django API
        const response = await axios.get('http://127.0.0.1:8000/products/');
        // Update products array with fetched product data
        this.products = response.data.data;
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error
      }
    },
    async addToCart(product) {
      try {
        // Make POST request to add product to cart
        const response = await axios.post('http://127.0.0.1:8000/cart/', {
          product_id: product.product_id, // Use product.product_id to retrieve the product ID
          quantity: 1, // Default quantity to add is 1, you can change it as needed
          user_id: this.userid
        });
        // Handle success response, maybe show a success message
        console.log('Product added to cart:', response.data);
      } catch (error) {
        console.error('Error adding product to cart:', error);
        // Handle error
      }
    }
  }
};
</script>

<style>

.form-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .form-column {
            width: calc(33.33% - 10px); /* Adjust according to your preference */
            margin-bottom: 20px;
        }

        .form-column span {
            display: block;
            margin-bottom: 5px;
        }

        .form-column input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        .custom_order_btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .form-container {
            width: 1100px;
            margin: 0 auto;
        }

.all {
  background-color: var(--primary-color);
}

.custom-order {
  padding: 5px;
}

.custom-order .inner-custom {
  /* background-color: var(--color-white); */
  background: linear-gradient(rgba(0, 0, 0, 0.367), rgba(0, 0, 0, 0.429)), url("../assets/custom-order-bg.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  text-align: center;
  font-family: var(--playfair-display);
  color: #fff;
}

.custom-order .inner-custom h2 {
  font-size: 40px;
  font-weight: 500;
  margin: 10px;
}

.custom-order .inner-custom p {
  font-size: 24px;
  font-weight: 500;
  margin: 10px;
}


.custom-order .inner-custom button,
.custom_order_btn {
  border: none;
  margin: 20px;
  padding: 2vh 20vh;
  border-radius: 7px;
  color: #fff;
  font-family: var(--plus-jakarta-sans);
  font-size: 18px;
  font-weight: 600;
  background-image: linear-gradient(#8600c0, #2e023b);
  cursor: pointer;
  transition: 0.5s ease;
}

.custom-order .inner-custom button:hover {
  transform: scale(1.1);
}

.container {
  margin: 0vh 5vh;
}


.row-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 2rem;
  align-items: center;
  text-align: center;
  padding: 10px 0;
}

.container-box {
  background: var(--color-white);
  border: 1px solid #dad5d5;
  border-radius: 15px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  padding-bottom: 15px;
}

.container-img img {
  height: 35vh;
  width: 100%;
  padding: 5px;
  background: var(--bg-color);
  border-radius: 15px;
  cursor: pointer;
}

.container-box h4 {
  font-family: var(--playfair-display);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.container-box p {
  font-family: var(--plus-jakarta-sans);
  padding: 5px 10px;
  font-size: 15px;
  color: var(--second-color);
}

.container-box .price {
  font-size: 24px;
  font-weight: 600;
}

.container-box p span {
  color: gold;
  font-size: 25px;
}

.container-box:hover {
  transform: scale(1.05);
}

.container-box p i {
  color: #fed922;
}

.container button {
  width: 93%;
  padding: 12px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background: #fff;
  transition: 0.5s ease;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.container button:hover {
  background: var(--primary-color);
  border: none;
  color: #fff;
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
  display: flex;
  flex-direction: column;
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

.dropdown span {
  text-align: left;
  margin-bottom: 5px;
  font-family: var(--playfair-display);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--secondary-color);
}

.dropdown input {
  margin-bottom: 15px;
  border: 1px solid #696969aa;
  border-radius: 5px;
  padding: 10px;
  font-size: 12px;
  font-weight: 400;
}

@media(max-width:1040px) {
  .container-img img {
    height: 50%;
  }

}

@media(max-width:550px) {
  .container h1 {
    text-align: center;
    font-size: 20px;
  }

  .container .contact {
    background: #0c7c30;
    color: #fff;
  }

}

@media(max-width:420px) {
  .row-items {
    grid-template-columns: repeat(auto-fit, minmax(265px, auto));

  }
}
</style>