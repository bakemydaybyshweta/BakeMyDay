<template>
    <div class="order-admin">
        <div class="order-title-bar">
            <h2>Current Orders</h2>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Customer Name</th>
                    <th>Contact No.</th>
                    <th>Address</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in filteredOrders" :key="order.order_id">
                    <td>{{ getProductById(order.product_id).product_name }}</td>
                    <td>{{ getProductById(order.product_id).price }}</td>
                    <td>{{ order.customer_name }}</td>
                    <td>{{ order.contact }}</td>
                    <td>{{ order.address }}</td>
                    <td>{{ formatDate(order.order_date) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
            productData: {}
        };
    },
    mounted() {
        this.fetchOrders();
    },
    computed: {
        filteredOrders() {
            // Filter orders where is_complete is false
            return this.orders.filter(order => order.is_complete);
        }
    },
    methods: {
        fetchOrders() {
            // Fetch orders from API
            // Replace 'api_url' with your actual API endpoint
            fetch('http://127.0.0.1:8000/confirm-order/')
                .then(response => response.json())
                .then(data => {
                    this.orders = data.order_list;
                    this.productData = data.product_data;
                })
                .catch(error => console.error('Error fetching orders:', error));
        },
        getProductById(productId) {
            return this.productData[productId] || {};
        },
        formatDate(dateString) {
            // Format date as needed
            const date = new Date(dateString);
            return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        }
    }
};
</script>

<style>
.order-admin {
    margin: 0vh 7vh 0vh 18vh;
}

.order-title-bar {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
}

.order-title-bar h2 {
    padding: 3vh 0vh 0vh 0vh;
    font-size: 30px;
    font-weight: 500;
    color: var(--primary-color);
}

.order-title-bar button,
.add-btn {
    margin-top: 10px;
    padding: 12px 30px;
    color: #fff;
    background-color: var(--primary-color);
    font-weight: 500;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    transition: 0.5s ease;
}

.order-title-bar button:hover,
.add-btn:hover {
    background-color: #432651;
    cursor: pointer;
}

table {
    margin: 20px 0px;
    border-collapse: collapse;
    width: 100%;
}

th {
    background-color: var(--primary-color);
    color: #fff;
    text-align: left;
    padding: 8px;
}

td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(odd) {
    background-color: #dddddd;
}

tbody input {
    padding: 10px 5px;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid #696969aa;
}

.complete_order_btn,
.delete_order_btn {
    border: none;
    padding: 5px 10px;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
}

.complete_order_btn {
    background-color: #258749;
    transition: 0.8s ease;
}

.complete_order_btn:hover {
    background-color: #1a6535;
}

.delete_order_btn {
    background-color: #d9331d;
    transition: 0.8s ease;
}


.delete_order_btn:hover {
    background-color: #932416;
}
</style>
