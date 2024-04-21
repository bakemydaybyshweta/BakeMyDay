<template>
  <div class="product-admin">
    <div class="title-bar">
      <h2>Currently Available Products</h2>
    </div>
    <table>
      <!-- Table Header -->
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <!-- Existing Products -->
        <tr v-for="product in products" :key="product.product_id">
          <td>{{ product.product_id }}</td>
          <!-- <td><input type="text" v-model="product.image"></td> -->
          <td><img :src="product.image" alt="Product Image" /></td>
          <td><input type="text" v-model="product.product_name" /></td>
          <td><input type="text" v-model="product.description" /></td>
          <td><input type="text" v-model="product.price" /></td>
          <td>
            <button @click="updateProduct(product)" class="update_prod_btn"><i class="fa-solid fa-pen"></i>
              Update</button>
            <button @click="deleteProduct(product)" class="delete_prod_btn"><i class="fa-solid fa-trash"></i>
              Delete</button>
          </td>
        </tr>
        <!-- Empty Row for Adding New Product -->
        <tr>
          <td>&nbsp;</td>
          <td>
            <!-- Use 'input type="file"' for file upload -->
            <input type="file" @change="onFileChange" ref="fileInput" accept="image/*" />
          </td>
          <td><input type="text" v-model="newProduct.product_name" /></td>
          <td><input type="text" v-model="newProduct.description" /></td>
          <td><input type="text" v-model="newProduct.price" /></td>
          <td>
            <button @click="addNewProduct" class="add_new_prod_btn">Confirm</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      showDropdown: false,
      newProduct: {
        // Initialize newProduct object with empty values
        image: null, // Use null to represent file object
        product_name: '',
        description: '',
        price: ''
      }
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/products/');
        this.products = response.data.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    onFileChange(event) {
      // Set the selected file to the newProduct object
      this.newProduct.image = event.target.files[0];
    },
    async addNewProduct() {
      try {
        // Create FormData object to send file data
        const formData = new FormData();
        formData.append('image', this.newProduct.image); // Append image file
        formData.append('product_name', this.newProduct.product_name);
        formData.append('description', this.newProduct.description);
        formData.append('price', this.newProduct.price);

        const response = await axios.post('http://127.0.0.1:8000/products/', formData);
        console.log('New product added:', response.data);
        // Optionally, you can refresh the product list after adding the new product
        this.fetchProducts();
      } catch (error) {
        console.error('Error adding new product:', error);
      }
    },
    async updateProduct(product) {
      try {
        const formData = new FormData();
        // Append updated product details to the form data
        formData.append('product_name', product.product_name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        // Append the original product ID as a hidden field
        formData.append('product_id', product.product_id);

        const response = await axios.put('http://127.0.0.1:8000/products/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Update Product Response:', response); // Log the entire response
        console.log('Update Product Data:', response.data); // Log the response data

        // Check if the response status is successful
        if (response.status === 200) {
          console.log('Product updated successfully');
          // Optionally, update the local data with the updated product details
          const index = this.products.findIndex(p => p.product_id === product.product_id);
          this.$set(this.products, index, response.data.data);
        } else {
          console.error('Error updating product:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    async deleteProduct(product) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/products/`, { data: { product_id: product.product_id } });
        console.log('Product deleted:', response.data);
        // Remove the deleted product from the local data
        this.products = this.products.filter(p => p.product_id !== product.product_id);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  }
};
</script>


<style scoped>
.product-admin {
  margin: 0vh 7vh 0vh 18vh;
}

.title-bar {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 10px;
}

.title-bar h2 {
  padding: 3vh 0vh 0vh 0vh;
  font-size: 30px;
  font-weight: 500;
  color: var(--primary-color);
}


.add_new_prod_btn {
  margin-top: 10px;
  padding: 12px 30px;
  color: #fff;
  background-color: var(--primary-color);
  font-weight: 500;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  width: 100%;
  transition: 0.5s ease;
}


.add_new_prod_btn:hover {
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

.update_prod_btn,
.delete_prod_btn {
  border: none;
  padding: 5px 10px;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.update_prod_btn {
  background-color: #258749;
  transition: 0.8s ease;
}

.update_prod_btn:hover {
  background-color: #1a6535;
}

.delete_prod_btn {
  background-color: #d9331d;
  transition: 0.8s ease;
}


.delete_prod_btn:hover {
  background-color: #932416;
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
  gap: 10px;
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

.dropdown input {
  border: 1px solid #696969aa;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
}
</style>