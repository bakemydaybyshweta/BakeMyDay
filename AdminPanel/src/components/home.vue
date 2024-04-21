<template>
  <div class="analytics">
    <div class="dashboard">
      <div class="dash-box">
        <div class="text">
          <h3>{{ totalUsers }}</h3>
          <p>Users</p>
        </div>
        <div class="icon">
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
      <div class="dash-box">
        <div class="text">
          <h3>{{ ordersCount }}</h3>
          <p>Current Orders</p>
        </div>
        <div class="icon">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div class="dash-box">
        <div class="text">
          <h3>₹{{ totalAmount }}</h3>
          <p>Sales</p>
        </div>
        <div class="icon">
          <i class="fa-solid fa-wallet"></i>
        </div>
      </div>
    </div>
    <div class="charts">
      <div class="pie">
        <canvas id="salesPieChart"></canvas>
      </div>
      <div class="histogram">
        <canvas id="orderChart"></canvas>
      </div>
    </div>
    <div class="info">
      <div class="orders">
        <h3>Recent Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.order_id">
              <td>{{ getProductById(order.product_id).product_name }}</td>
              <td>{{ getProductById(order.product_id).price }}</td>
              <td>{{ formatDate(order.order_date) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="users">
        <h3>New Users</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.user_id">
              <td>{{ user.username }}</td>
              <td>{{ user.email_id }}</td>
              <td>{{ user.date_joined }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      users: [],
      totalUsers: 0,
      ordersCount: null,
      totalAmount: null,
      orderData: [],
      orders: [],
      productData: {}
    };
  },
  mounted() {
    this.fetchOrderData();
    this.fetchOrders();
  },
  created() {
    // Fetch all users from Django backend API
    fetch('http://127.0.0.1:8000/users/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.data && Array.isArray(data.data)) {
          // Assuming data format matches the API response
          const allUsers = data.data;
          // Reverse the array to display the latest users first
          const reversedUsers = allUsers.reverse();

          // Format date_joined for each user
          const formattedUsers = reversedUsers.map(user => {
            const dateJoined = new Date(user.date_joined);
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            user.date_joined = dateJoined.toLocaleDateString('en-GB', options);
            return user;
          });

          // Get the last 10 users
          this.users = formattedUsers.slice(0, 10);
          // Set total number of users
          this.totalUsers = allUsers.length;
        } else {
          console.error('Invalid response format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });

    // Fetch orders count from Django backend API
    this.fetchOrdersCount();

    // Fetch sum of all values in the 'amount' column from Orders table
    this.fetchTotalAmount();
  },
  methods: {
    fetchOrdersCount() {
      fetch('http://127.0.0.1:8000/orders-count/') // Update the URL with your Django server URL
        .then(response => response.json())
        .then(data => {
          this.ordersCount = data.orders_count;
        })
        .catch(error => {
          console.error('Error fetching orders count:', error);
        });
    },
    fetchTotalAmount() {
      fetch('http://127.0.0.1:8000/orders-total-amount/') // Update the URL with your Django server URL
        .then(response => response.json())
        .then(data => {
          this.totalAmount = data.total_amount;
        })
        .catch(error => {
          console.error('Error fetching total amount:', error);
        });
    },
    fetchOrderData() {
      fetch('http://127.0.0.1:8000/fetch-order-data/')
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.orderData = data.data;
            this.createChart();
            this.createPieChart();
          } else {
            console.error('Error fetching order data:', data.error);
          }
        })
        .catch(error => {
          console.error('Error fetching order data:', error);
        });
    },
    fetchOrders() {
      // Fetch orders from API
      fetch('http://127.0.0.1:8000/confirm-order/')
        .then(response => response.json())
        .then(data => {
          // Retrieve the last 10 orders and reverse them
          const lastTenOrders = data.order_list.slice(-10).reverse();
          this.orders = lastTenOrders;
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
    },
    createChart() {
      // Aggregate sales amounts by month
      const monthlySales = {};
      this.orderData.forEach(order => {
        const month = order.order_date.split('-')[1]; // Extract month from the date
        if (!monthlySales[month]) {
          monthlySales[month] = 0;
        }
        monthlySales[month] += order.amount;
      });

      // Extract months and sales amounts from the aggregated data
      const months = Object.keys(monthlySales);
      const sortedMonths = months.sort(); // Sort months in ascending order
      const sales = sortedMonths.map(month => monthlySales[month]);

      const ctx = document.getElementById('orderChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: sortedMonths,
          datasets: [{
            label: 'Monthly Sales Amount',
            data: sales,
            fill: false,
            borderColor: '#004cff',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },
    createPieChart() {
      const productSales = {};
      this.orderData.forEach(order => {
        if (!productSales.hasOwnProperty(order.product_id)) {
          productSales[order.product_id] = 0;
        }
        productSales[order.product_id] += order.amount;
      });

      const productLabels = Object.keys(productSales);
      const productSalesData = Object.values(productSales);

      const ctx = document.getElementById('salesPieChart').getContext('2d');
      const pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: productLabels,
          datasets: [{
            data: productSalesData,
            backgroundColor: this.generateRandomColors(productLabels.length)
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    },
    generateRandomColors(numColors) {
      const colors = [];
      for (let i = 0; i < numColors; i++) {
        const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;
        colors.push(randomColor);
      }
      return colors;
    }
  }
};

</script>


<style>
.analytics {
  margin: 0vh 7vh 0vh 18vh;
}

.dashboard {
  display: flex;
  justify-content: space-between;
}

.dashboard .dash-box {
  width: 29.5%;
  background-color: #fcfcfc;
  margin-top: 3vh;
  border-radius: 18px 8px 8px 18px;
  border-left: 8px solid var(--primary-color);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 18px 18px 20px #c0c0c0;
}

.dash-box .text h3 {
  font-size: 3rem;
  color: var(--black-500);
}

.dash-box .text p {
  font-size: 1.4rem;
  color: var(--gray-100);
  font-weight: 400;
}

.dash-box .icon {
  font-size: 4rem;
  color: var(--primary-color);
}

.charts {
  margin-top: 5vh;
  display: flex;
  gap: 3vh;
  height: 60vh;
}

.charts .pie {
  padding: 10px 20px;
  width: 35%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow: 18px 18px 20px #c0c0c0;
}

.charts .histogram {
  padding: 10px 20px;
  width: 65%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow: 18px 18px 20px #c0c0c0;
}

.charts .histogram #orderChart {
  position: absolute;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
}

.info {
  margin-top: 5vh;
  display: flex;
  gap: 3vh;
  /* height: 50vh; */
  margin-bottom: 4vh;
}

.info .orders {
  padding: 10px 20px;
  width: 65%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow: 18px 18px 20px #c0c0c0;
}

.info .orders h3 {
  font-size: 24px;
  font-weight: 500;
  color: var(--primary-color);
}

.info .users {
  padding: 10px 20px;
  width: 35%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow: 18px 18px 20px #c0c0c0;
}

.info .users h3 {
  font-size: 24px;
  font-weight: 500;
  color: var(--primary-color);
}

.info .users table,
.info .orders table {
  border-collapse: collapse;
  width: 100%;
  margin: 0px 0px 10px 0px;
}

.info .users th,
.info .users td,
.info .orders th,
.info .orders td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.info .users th,
.info .orders th {
  background-color: var(--primary-color);
  color: #fff;
  border: none;
}

.info .users th:first-child,
.info .orders th:first-child {
  border-radius: 8px 0px 0px 0px;
}

.info .users th:last-child,
.info .orders th:last-child {
  border-radius: 0px 8px 0px 0px;
}

.info .users tr,
.info .orders tr {
  transition: 0.5s ease;
}

.info .users tbody tr:hover,
.info .orders tbody tr:hover {
  background-color: var(--primary-color);
  color: #fff;
  transform: scale(1.05);
  cursor: default;
}

.info .users tr:hover td:first-child,
.info .orders tr:hover td:first-child {
  border-radius: 8px 0px 0px 8px;
}

.info .users tr:hover td:last-child,
.info .orders tr:hover td:last-child {
  border-radius: 0px 8px 8px 0px;
}

@media only screen and (max-width: 1300px) {
  .info {
    display: block;
  }

  .info .orders {
    width: 100%;
  }

  .info .users {
    width: 100%;
  }

  .charts {
    height: 50vh;
  }
}

@media only screen and (max-width: 1024px) {
  .dashboard .dash-box {
    width: 32%;
  }

  .dash-box .text h3 {
    font-size: 2.5rem;
  }

  .dash-box .icon {
    font-size: 3.5rem;
  }

  .charts {
    height: 40vh;
  }

  .info {
    display: block;
  }

  .info .orders {
    width: 100%;
  }

  .info .users {
    width: 100%;
  }
}

@media only screen and (max-width: 850px) {
  .dash-box .text h3 {
    font-size: 2.1rem;
  }

  .dash-box .icon {
    font-size: 3rem;
  }

  .charts {
    height: 30vh;
  }
}

@media only screen and (max-width: 760px) {
  .dashboard {
    display: block;
  }

  .dashboard .dash-box {
    width: 100%;
  }

  .charts {
    display: block;
    width: 100%;
  }

  .charts .pie {
    width: 100%;
    height: 40vh;
  }

  .charts .histogram {
    margin-top: 20px;
    width: 100%;
    height: 40vh;
  }

  .info {
    margin-top: 55vh;
  }
}

@media only screen and (max-width: 600px) {
  .analytics {
    margin: 0vh 3vh 0vh 14vh;
  }
}
</style>