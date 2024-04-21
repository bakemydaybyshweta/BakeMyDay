<template>
    <div class="cart">
        <h1>Items going to the oven</h1>
        <!-- Check if cart is not empty -->
        <div class="current" v-if="cartItems.length == 0">
            <!-- Iterate over cart items and display them -->
            <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
                <img src="../assets/cake-stock.jpg" alt="Product Image">
                <div class="item-text">
                    <h3>{{ item.product_name }}</h3>
                    <p>{{ item.description }}</p>
                    <p>Quantity: {{ item.quantity }}</p>
                </div>
                <div class="item-price">
                    <h4>₹{{ item.price }}</h4>
                </div>
                <button class="place-order-btn" @click="toggleDropdown">Confirm Order</button>
            </div>
        </div>
        <!-- If cart is empty, display a message -->
        <div v-else class="empty-cart">
            <p><i class="fa-solid fa-circle-exclamation"></i> You Have Not Added Anything In The Oven</p>
        </div>
        <hr style="height:2px; border-width:0; background-color: var(--color-white);">
        <h1>Prevoisly Baked For You</h1>
        <div class="previous">
            <div class="cart-item">
                <img src="../assets/cake-stock.jpg" alt="">
                <div class="item-text">
                    <h3>Product Name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa aliquid nam, earum
                        quibusdam aspernatur labore unde sequi fuga autem? Dolorum sunt commodi, praesentium impedit
                        minus assumenda mollitia ad eveniet.</p>
                </div>
                <div class="item-price">
                    <h4>₹999</h4>
                </div>
            </div>
        </div>

        <div class="dropdown-overlay" v-show="showDropdown" @click="toggleDropdown"></div>
        <div class="dropdown" v-show="showDropdown">
            <form>
                <label for="name">Your Name</label><br>
                <input type="text" id="name" name="name" placeholder="Enter Your Name"><br>
                <label for="contact">Contact</label><br>
                <input type="tel" id="contact" name="contact" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter Your Phone Number"><br>
                <label for="address">Delivery Address</label><br>
                <input type="text" id="address" name="address" placeholder="Enter Delivery Address"> 
            </form>
            <button class="place-order-btn-form">Order</button>
            <p style="margin-top: 40px;">*Please Order At Least 3 Days Prior, We need your time and patience to deliver home baked goodness*</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            showDropdown: false,
            userid: null, // Initialize userid property
            cartItems: [] // Initialize cartItems array to store cart data
        };
    },
    mounted() {
        this.fetchUserId(); // Call fetchUserId method when the component is mounted
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        fetchUserId() {
            const userid = sessionStorage.getItem('user_id');
            if (userid) {
                console.log('Id:', userid);
                this.userid = userid;
                this.fetchCartData(); // Call fetchCartData method to fetch cart data
            } else {
                // Handle case where userid is not found in session storage
                console.error('Userid not found in session storage.');
            }
        },
        fetchCartData() {
            axios.get(`http://127.0.0.1:8000/cart/`) // Fetch cart data based on user ID
                .then(response => {
                    this.cartItems = response.data.data; // Store cart data in cartItems array
                    this.fetchProductDetails(); // Call fetchProductDetails method to fetch product details for each item in the cart
                })
                .catch(error => {
                    console.error('Error fetching cart data:', error);
                });
        },
        fetchProductDetails() {
            // Loop through cartItems array and fetch product details for each item
            this.cartItems.forEach(item => {
                axios.get(`http://127.0.0.1:8000/products/${item.product_id}/`)
                    .then(response => {
                        // Update item with product details
                        const productData = response.data.data;
                        item.product_name = productData.product_name;
                        item.description = productData.description;
                        item.price = productData.price;
                    })
                    .catch(error => {
                        console.error('Error fetching product details:', error);
                    });
            });
        }
    }
};

</script>

<style>
.cart {
    background-color: var(--primary-color);
    padding: 10px 0px;
}

.current,
.previous {
    margin-bottom: 5vh;
}

.item-text {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 0px 10px;
}

.cart h1 {
    /* margin-top: 2vh; */
    padding: 15px 20px;
    font-family: var(--playfair-display);
    color: var(--color-white);
}

.cart h3 {
    font-size: 26px;
    font-weight: 600;
    font-family: var(--playfair-display);
    color: var(--secondary-color);
}

.cart p {
    font-family: var(--plus-jakarta-sans);
    color: var(--secondary-color);
    font-size: 16px;
    font-weight: 400;
}

.cart h4 {
    font-family: var(--plus-jakarta-sans);
    color: var(--secondary-color);
    font-size: 30px;
    font-weight: 400;
}

.cart-item {
    display: flex;
    height: 25vh;
    padding: 10px 20px 10px 10px;
    margin: 10px 20px;
    /* width: 100%; */
    background-color: var(--color-white);
    border-radius: 18px;
}

.cart-item img {
    border-radius: 8px;
}

.item-text,
.item-price {
    margin-left: 5%;
}

.item-price {
    display: flex;
    flex-direction: column;
    gap: 48%;
    text-align: right;
}

.place-order-btn, .place-order-btn-form {
    border: none;
    padding: 2vh 10vh;
    border-radius: 7px;
    color: #fff;
    font-family: var(--plus-jakarta-sans);
    font-size: 18px;
    font-weight: 600;
    background-image: linear-gradient(#8600c0, #2e023b);
    cursor: pointer;
    transition: 0.5s ease;
}

.place-order-btn:hover, .place-order-btn-form:hover {
    transform: scale(1.05);
}

.place-order-btn{
    margin-top: 20px;
    margin-left: 40%;
}

.place-order-btn-form{
    margin-top: 20px;
}

.remove-btn {
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    background-color: #ff1538;
    color: #fff;
    font-family: var(--plus-jakarta-sans);
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s ease;
    cursor: pointer;
}

.remove-btn:hover {
    background-color: #e31d23;
}

.cart .empty-cart {
    background-color: white;
    padding: 60px 25px;
}

.cart .empty-cart p {
    font-size: 2rem;
    text-align: center;
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
    width: 500px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    /* Ensure the dropdown appears above other content */
}

.dropdown form{
    text-align: left;
}

.dropdown label {
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
  width: 100%;
}
</style>