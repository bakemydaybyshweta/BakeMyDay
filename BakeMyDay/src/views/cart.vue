<template>
    <div class="all">
        <div class="container">
            <h1>Items going to the oven</h1>
            <div class="row-items" v-if="cartDetails.length !== 0">
                <!-- Iterate over products and display product cards -->
                <div class="container-box" v-for="(cartItem, index) in cartDetails" :key="index">
                    <div class="container-img">
                        <img :src="productDetails[cartItem.product_id][0].image" alt="Product Image" />
                    </div>
                    <h4>{{ productDetails[cartItem.product_id][0].product_name }}</h4>
                    <p>{{ productDetails[cartItem.product_id][0].description }}</p>
                    <p class="price">₹{{ productDetails[cartItem.product_id][0].price }}</p>
                    <!-- Add To Cart button -->
                    <button class="confirm-order-btn" @click="toggleDropdown">Confirm Order</button>
                    <button class="remove-btn" @click="removeItem(cartItem.id)"><i class="fa-solid fa-trash"></i>
                        Remove</button>
                </div>
            </div>
            <div v-else class="empty-cart">
                <p><i class="fa-solid fa-circle-exclamation"></i> You Have Not Added Anything In The Oven</p>
            </div>

            <hr style="height:2px; border-width:0; background-color: var(--color-white); margin: 20px 0px;">
            <h1>Previously Baked For You</h1>

            <div class="row-items" id="ordered" v-if="orderedItems.length !== 0">
                <!-- Iterate over products and display product cards -->
                <div class="container-box" v-for="(order, index) in orderedItems" :key="index">
                    <div class="container-img">
                        <img :src="productDetails[order.product_id][0].image" alt="Product Image" />
                    </div>
                    <h4>{{ productDetails[order.product_id][0].product_name }}</h4>
                    <p>{{ productDetails[order.product_id][0].description }}</p>
                    <p class="price">₹{{ productDetails[order.product_id][0].price }}</p>
                </div>
            </div>
        </div>

        <div class="dropdown-overlay" v-show="showDropdown" @click="toggleDropdown"></div>
        <div class="dropdown" v-show="showDropdown">
            <form @submit.prevent="placeOrder"> <!-- Added @submit.prevent to prevent default form submission -->
                <label for="name">Your Name</label><br>
                <input type="text" v-model="orderDetails.name" id="name" name="name" placeholder="Enter Your Name"><br>
                <label for="contact">Contact</label><br>
                <input type="tel" v-model="orderDetails.contact" id="contact" name="contact"
                    placeholder="Enter Your Phone Number"><br>
                <label for="address">Delivery Address</label><br>
                <input type="text" v-model="orderDetails.address" id="address" name="address"
                    placeholder="Enter Delivery Address">
                <button type="submit" class="place-order-btn-form">Place Order</button>
                <!-- Changed to type="submit" -->
            </form>
            <p style="margin-top: 40px;">*Please Order At Least 3 Days Prior, We need your time and patience to deliver
                home baked goodness*</p>
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
            cartDetails: [], // Initialize cartDetails array
            productDetails: {}, // Initialize productDetails object
            orderedItems: [], // Initialize array to store ordered items
            orderDetails: { // Add orderDetails object to store form data
                name: '',
                contact: '',
                address: ''
            }
        };
    },
    mounted() {
        this.fetchUserId(); // Call fetchUserId method when the component is mounted
        this.fetchOrderedItems();
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
            // Fetch cart data using userid
            axios.get(`http://127.0.0.1:8000/cart/?user_id=${this.userid}`)
                .then(response => {
                    // Filter cart items where ordered is false
                    this.cartDetails = response.data.cart_details.filter(item => !item.ordered);
                    this.productDetails = response.data.product_details;
                })
                .catch(error => {
                    console.error('Error fetching cart data:', error);
                });
        },
        fetchOrderedItems() {
            axios.get(`http://127.0.0.1:8000/cart/?user_id=${this.userid}`)
                .then(response => {
                    // Filter cart items where ordered is true
                    this.orderedItems = response.data.cart_details.filter(item => item.ordered);
                    this.fetchProductDetails(); // After fetching ordered items, fetch product details
                })
                .catch(error => {
                    console.error('Error fetching ordered items:', error);
                });
        },
        removeItem(cartItemId) {
            // Send a DELETE request to remove the item from the cart
            axios.delete(`http://127.0.0.1:8000/cart/?id=${cartItemId}`)
                .then(response => {
                    // Remove the deleted item from cartDetails
                    this.cartDetails = this.cartDetails.filter(item => item.id !== cartItemId);
                    console.log(response.data.message);
                })
                .catch(error => {
                    console.error('Error removing item from cart:', error);
                });
        },
        placeOrder() {
            // Send order details to the API0
            const requestData = {
                cart_item_id: this.cartDetails[0].id, // Assuming you want to send the cart item ID of the first item
                user_id: this.userid,
                amount: this.productDetails[this.cartDetails[0].product_id][0].price, // Assuming you want to send the price of the first item
                name: this.orderDetails.name,
                contact: this.orderDetails.contact,
                address: this.orderDetails.address
            };
            console.log(this.productDetails[this.cart_item_id]);

            axios.post('http://127.0.0.1:8000/confirm-order/', requestData)
                .then(response => {
                    console.log(response.data);
                    // Handle success response, e.g., show a success message
                })
                .catch(error => {
                    console.error('Error placing order:', error);
                    // Handle error, e.g., show an error message
                });
        }

    }
};
</script>

<style>
.all {
    background-color: var(--primary-color);
}

.container {
    margin: 0vh 5vh;
}

.empty-cart {
    background-color: white;
    padding: 60px 25px;
}

.empty-cart p {
    font-size: 2rem;
    text-align: center;
}


h1 {
    padding-top: 2vh;
    padding: 15px 20px;
    font-family: var(--playfair-display);
    color: var(--color-white);
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
    max-width: 400px;
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
}

.container .confirm-order-btn:hover {
    background: var(--primary-color);
    border: none;
    color: #fff;
}

.container .confirm-order-btn {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}

.container .remove-btn {
    border: 2px solid #da0021;
    color: #da0021;
}

.container .remove-btn:hover {
    background-color: #da0021;
    color: var(--color-white);
}

.place-order-btn-form {
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

.place-order-btn-form:hover {
    transform: scale(1.05);
}

.place-order-btn-form {
    margin-top: 20px;
}


.dropdown form {
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