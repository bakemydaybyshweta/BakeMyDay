<template>
  <div class="user_table">
    <div class="order-title-bar">
      <h2>Currently Existing BakeMyDay Users</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Last Login</th>
          <th>Date Joined</th>
          <th>Delete User</th> <!-- column for delete button -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email_id }}</td>
          <td>
            <template v-if="user.isInactive">
              <span class="inactive-text"><i class="fa-solid fa-ban"></i> The User Is Inactive</span>
            </template>
            <template v-else>
              {{ user.last_login }}
            </template>
          </td>
          <td>{{ user.date_joined }}</td>
          <td>
            <button @click="deleteUser(user.user_id)" class="delete_user_btn"><i class="fa-solid fa-trash"></i>
              Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch('http://127.0.0.1:8000/users/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data && data.data && Array.isArray(data.data)) {
            const allUsers = data.data;
            const formattedUsers = allUsers.map(user => {
              this.formatUser(user);
              return user;
            });
            this.users = formattedUsers;
          } else {
            console.error('Invalid response format:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    formatUser(user) {
      const dateJoined = new Date(user.date_joined);
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      user.date_joined = dateJoined.toLocaleDateString('en-GB', options);
      if (user.last_login !== null) {
        const lastLoginDate = new Date(user.last_login);
        const lastLoginOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const lastLoginTime = lastLoginDate.toLocaleTimeString('en-GB', lastLoginOptions);
        user.last_login = `${lastLoginDate.toLocaleDateString('en-GB')} | ${lastLoginTime}`;
      } else {
        user.last_login = "The User Is Inactive";
        user.isInactive = true;
      }
    },async deleteUser(userId) {
  // Display confirmation dialog
  const confirmed = window.confirm("Are you sure you want to delete the user?");
  if (!confirmed) {
    return; // Do nothing if user cancels
  }

  try {
    const response = await fetch(`http://127.0.0.1:8000/users/?user_id=${userId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      // Remove the deleted user from the list
      this.users = this.users.filter(user => user.user_id !== userId);
      console.log('User deleted successfully');
      // Show success message
      window.alert('User successfully deleted');
    } else {
      console.error('Error deleting user:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}
  }
};
</script>

<style scoped>
.inactive-text {
  color: red;
}

.user_table {
  padding: 10px 0px 30px 0px;
  margin: 0vh 5vh 0px 16vh;
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


table {
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

.delete_user_btn {
  border: none;
  padding: 5px 10px;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  background-color: #d9331d;
  transition: 0.8s ease;
}


.delete_user_btn:hover {
  background-color: #932416;
}
</style>