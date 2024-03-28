<template>
    <div class=all>
    <div class="container">
        <div class="row-items">
          <div class="container-box">
            <div class="container-img">
              <img src="../assets/cake-stock.jpg"/>
            </div>
            <h4> Product Name </h4>
            <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
            <p class="price"  >
                ₹999
            </p>
             <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src="../assets/cake-stock.jpg" />
            </div>
            <h4>Product Name</h4>
            <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
            <p class="price">
                 ₹999
            </p>
             <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src="../assets/cake-stock.jpg" />
            </div>
            <h4>Product Name</h4>
            <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
            <p class="price" >
                ₹999
            </p>
             <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src="../assets/cake-stock.jpg" />
            </div>
            <h4>Product Name</h4>
            <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
            <p class="price" >
                ₹999
            </p>
             <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src="../assets/cake-stock.jpg" />
            </div>
            <h4>Product Name</h4>
            <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
            <p class="price" >
                ₹999
            </p>
             <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src="../assets/cake-stock.jpg" />
            </div>
            <h4>Product Name</h4>
            <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
            <p class="price">
                ₹999
            </p>
             <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
          </div>

          <div class="container-box">
              <div class="container-img">
                <img src="../assets/cake-stock.jpg" />
              </div>
              <h4>Product Name</h4>
              <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
              <p class="price">
                 ₹999
              </p>
               <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
            </div>

            <div class="container-box">
              <div class="container-img">
                <img src="../assets/cake-stock.jpg" />
              </div>
              <h4>Product Name</h4>
              <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
              <p class="price">
                ₹999
              </p>
               <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
            </div>

            <div class="container-box">
              <div class="container-img">
                <img src="../assets/cake-stock.jpg" />
              </div>
              <h4>Product Name</h4>
              <!-- <p><b>Rating :</b> <span>⭐⭐⭐⭐⭐</span></p> -->
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis quasi error nihil dolore, minus atque temporibus omnis, provident neque tempore maiores cum placeat porro, nesciunt totam modi tenetur quidem.</p>
              <p class="price">
                 ₹999
              </p>
               <button><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
</template>

<style>
.all{
    background-color: var(--primary-color);
}

.container{
    margin: 0vh 5vh;
}


.row-items{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	grid-gap: 2rem;
	align-items: center;
	text-align: center;
	padding: 10px 0;
}

.container-box{
	background: var(--color-white);
	border: 1px solid #dad5d5;
	border-radius: 15px;
	transition: all 0.5s ease 0s;
	cursor: pointer;
    padding-bottom: 15px;
}
.container-img img{
	height: 35vh;
	width: 100%;
	padding: 5px;
	background: var(--bg-color);
	border-radius: 15px;
	cursor: pointer;
}
.container-box h4{
    font-family: var(--playfair-display);
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 8px;
}
.container-box p{
    font-family: var(--plus-jakarta-sans);
    padding: 5px 10px;
	font-size: 15px;
	color: var(--second-color);
}

.container-box .price{
    font-size: 24px;
    font-weight: 600;
}

.container-box p span{
    color: gold;
    font-size: 25px;
}

.container-box:hover{
	transform: scale(1.05);
}

.container-box p i{
    color: #fed922;
}

.container button{
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

  .container button:hover{
    background: var(--primary-color);
    border: none;
    color: #fff;
  }

 @media(max-width:1040px){
     .container-img img{
	   height: 50%;
     }

 }
 @media(max-width:550px){
     .container h1{
    text-align: center;
    font-size: 20px;
}

 .container .contact{
    background: #0c7c30;
    color: #fff;
 }

 }

 @media(max-width:420px){
    .row-items{
        grid-template-columns: repeat(auto-fit, minmax(265px, auto));

    }
 }
</style>