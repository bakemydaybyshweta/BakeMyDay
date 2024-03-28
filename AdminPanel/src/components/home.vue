<template>
  <div class="analytics">
   <div class="dashboard">
    <div class="dash-box">
      <div class="text">
        <h3>888</h3>
        <p>Users</p>
      </div>
      <div class="icon">
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
    <div class="dash-box">
      <div class="text">
        <h3>888</h3>
        <p>Orders</p>
      </div>
      <div class="icon">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
    <div class="dash-box">
      <div class="text">
        <h3>$888</h3>
        <p>Sales</p>
      </div>
      <div class="icon">
        <i class="fa-solid fa-wallet"></i>
      </div>
    </div>
   </div>
   <div class="charts">
    <div class="pie"> 
    
    </div>
    <div class="histogram">
     
    </div>
   </div>
   <div class="info">
    <div class="orders"><h3>Recent Orders</h3></div>
    <div class="users"><h3>New Users</h3></div>
   </div>
  </div>
</template>


<style>
.analytics{
  margin: 0vh 7vh 0vh 18vh;
}
.dashboard{
  display: flex;
  justify-content: space-between;
}

.dashboard .dash-box{
  width: 29.5%;
  background-color: #fcfcfc;
  margin-top: 3vh;
  border-radius: 18px 8px 8px 18px;
  border-left: 8px solid var(--primary-color);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow:  18px 18px 20px #c0c0c0;
}

.dash-box .text h3{
  font-size: 3rem;
  color: var(--black-500);
}

.dash-box .text p{
  font-size: 1.4rem;
  color: var(--gray-100);
  font-weight: 400;
}

.dash-box .icon{
  font-size: 4rem;
  color: var(--primary-color);
}

.charts{
  margin-top: 5vh;
  display: flex;
  gap: 3vh;
  height: 50vh;
}

.charts .pie{
  padding: 10px 20px;
  width: 35%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow:  18px 18px 20px #c0c0c0;
}

.charts .histogram{
  padding: 10px 20px;
  width: 65%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow:  18px 18px 20px #c0c0c0;
}

.info{
  margin-top: 5vh;
  display: flex;
  gap: 3vh;
  height: 50vh;
  margin-bottom: 4vh;
}

.info .orders{
  padding: 10px 20px;
  width: 65%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow:  18px 18px 20px #c0c0c0;
}

.info .orders h3{
  font-size: 24px;
  font-weight: 500;
  color: var(--primary-color);
}

.info .users{
  padding: 10px 20px;
  width: 35%;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow:  18px 18px 20px #c0c0c0;
}

.info .users h3{
  font-size: 24px;
  font-weight: 500;
  color: var(--primary-color);
}

@media only screen and (max-width: 1024px) {
  .dashboard .dash-box{
    width: 32%;
  }

  .dash-box .text h3{
    font-size: 2.5rem;
  }

  .dash-box .icon{
    font-size: 3.5rem;
  }

  .charts{
  height: 40vh;
}

.info{
  display: block;
}

.info .orders{
  width: 100%;
}

.info .users{
  width: 100%;
}
}

@media only screen and (max-width: 850px) {
  .dash-box .text h3{
    font-size: 2.1rem;
  }

  .dash-box .icon{
    font-size: 3rem;
  }

  .charts{
   height: 30vh;
  }
}

@media only screen and (max-width: 760px) {
  .dashboard{
    display: block;
  }
  .dashboard .dash-box{
    width: 100%;
  }
  .charts{
    display: block;
    width: 100%;
  }
  .charts .pie{
  width: 100%;
  height: 40vh;
}

.charts .histogram{
  margin-top: 20px;
  width: 100%;
  height: 40vh;
}

.info{
  margin-top: 55vh;
}
}

@media only screen and (max-width: 600px) {
  .analytics{
    margin: 0vh 3vh 0vh 14vh;
  }
}

</style>

<script>
export default {
};
</script>