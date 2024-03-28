<template>
    <div class="navigation">
      <div class="logo">
        <a href="#"><img src="../assets/full-logo-dark.png" /></a>
      </div>
      <ul>
        <li class="list">
          <router-link to="/">
            <span class="icon"><i class="fa-solid fa-chart-pie"></i></span>
            <span class="title"><b>Analytics</b></span>
          </router-link>
        </li>
        <li class="list">
          <router-link to="/adminorder">
            <span class="icon"><i class="fa-solid fa-cart-shopping"></i></span>
            <span class="title"><b>Orders</b></span>
          </router-link>
        </li>
        <li class="list">
          <router-link to="/adminproduct">
            <span class="icon"><i class="fa-solid fa-cake-candles"></i></span>
            <span class="title"><b>Products</b></span>
          </router-link>
        </li>
        <li class="list">
          <router-link to="/user">
            <span class="icon"><i class="fa-solid fa-users"></i></span>
            <span class="title"><b>Users</b></span>
          </router-link>
        </li>
        <li class="list">
          <router-link to="/history">
            <span class="icon"><i class="fa-solid fa-clock-rotate-left"></i></span>
            <span class="title"><b>History</b></span>
          </router-link>
        </li>
      </ul>
    </div>
</template>
   
<style>

.router-link-active{
  background-color: var(--primary-color);
  border-radius: 18px 0px 0px 18px;
}

.router-link-active span{
  color: #fff;
}

.logo img{
    width: 274px;
    padding-left: 7px;
    padding-top: 10px;
}

.navigation{
    z-index: 1;
    position: fixed;
    height: 100vh;
    width: 70px;
    background: #fff;
    box-shadow: 10px 0 0 var(--primary-color);
    overflow-x: hidden;
    transition: width 0.5s;
}

.navigation:hover{
    width: 230px;
}

.navigation ul{
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 50px;
}

.navigation ul li{
    font-size: 18px;
    position: relative;
    list-style: none;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}


.navigation ul li a{
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 300;
}


.navigation ul li a .icon{
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}

.navigation ul li a.icon {
 position: relative;
 font-size: 1.5rem;
 z-index: 1;
}

.navigation ul li a .title{
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
}

   </style>
  