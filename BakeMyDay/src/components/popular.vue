<template>
    <section class="popular-foods" id="menu">
     <h2 class="popular-foods__title" data-aos="flip-up">Indulge in Our Crowd Favorites</h2>

     <div class="popular-foods__filters sushi__hide-scrollbar" data-aos="fade-up">
       <button class="popular-foods__filter-btn active">All</button>
       <button class="popular-foods__filter-btn">
         <img src="../assets/choco.png" alt="Chocolate" />
         Chocolate
       </button>
       <button class="popular-foods__filter-btn">
         <img src="../assets/strb.png" alt="Strawberry" />
         Strawberry
       </button>
       <button class="popular-foods__filter-btn">
         <img src="../assets/btrscth.png" alt="Butterscotch" />
         Butterscotch
       </button>
       <button class="popular-foods__filter-btn">
         <img src="../assets/cheese.png" alt="cheese" />
         Cheesecake
       </button>
     </div>

     <div class="popular-foods__catalogue" data-aos="fade-up">
       <article class="popular-foods__card">
         <img class="popular-foods__card-image" src="../assets/cheesecake.png" alt="cheesecake" />
         <h4 class="popular-foods__card-title">Cheesecake</h4>

         <div class="popular-foods__card-details flex-between">
           <div class="popular-foods__card-rating">
             <img src="../assets/star.svg" alt="star" />
             <p>4.9</p>
           </div>

           <p class="popular-foods__card-price">₹750.00</p>
         </div>
       </article>

       <article class="popular-foods__card active-card">
         <img class="popular-foods__card-image" src="../assets/choco-cake.png" alt="Chocolate Cake" />
         <h4 class="popular-foods__card-title">Chocolate Cake</h4>
         
         <div class="popular-foods__card-details flex-between">
           <div class="popular-foods__card-rating">
             <img src="../assets/star.svg" alt="star" />
             <p>5.0</p>
           </div>
           
           <p class="popular-foods__card-price">₹500.00</p>
         </div>
       </article>

       <article class="popular-foods__card">
         <img class="popular-foods__card-image" src="../assets/strawberry-cake.png" alt="Strawberry" />
         <h4 class="popular-foods__card-title">Strawberry Cake</h4>

         <div class="popular-foods__card-details flex-between">
           <div class="popular-foods__card-rating">
             <img src="../assets/star.svg" alt="star" />
             <p>4.7</p>
           </div>

           <p class="popular-foods__card-price">₹640.00</p>
         </div>
       </article>
     </div>
     
     <button class="popular-foods__button">
      <router-link to="/login">Explore Food</router-link>
       <img src="../assets/arrow-right.svg"  alt="arrow-right" />
     </button>
   </section>
</template>

<style>
.popular-foods {
 padding: 64px;
 display: flex;
 flex-direction: column;
 background-color: var(--primary-color);
 /* background-image: url("../assets/popular_bg.png"); */
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
 overflow: hidden;
}

.popular-foods__title {
 font-size: 56px;
 font-family: var(--playfair-display);
 font-weight: 600;
 line-height: 78px;
 color: #fff;
 text-align: center;
}

.popular-foods__filters {
 margin-top: 48px;
 max-width: 100%;
 overflow-x: auto;
 display: flex;
 justify-content: center;
 gap: 24px;
}

.popular-foods__filter-btn {
 padding: 10px 28px;
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 10px;
 background: rgba(255, 255, 255, 0.05);
 border: 1px solid rgba(255, 255, 255, 0.2);
 border-radius: 46px;
 font-size: 16px;
 font-weight: 300px;
 line-height: 25px;
 font-family: var(--plus-jakarta-sans);
 color: #fff;
 cursor: pointer;
 transition: 0.7s ease;
}

.popular-foods__filter-btn img {
 width: 36px;
 height: 36px;
 object-fit: contain;
}

.popular-foods__filter-btn.active {
 background: #fff;
 color: var(--primary-color)
}

.popular-foods__filter-btn:hover {
 background: #fff;
 color: var(--primary-color)
}

.popular-foods__catalogue {
 margin-top: 64px;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 flex-wrap: wrap;
 gap: 56px;
}

.popular-foods__button {
 width: fit-content;
 padding: 20px 30px;
 margin: 80px auto 0;
 font-weight: 500;
 font-size: 18px;
 line-height: 23px;
 font-family: var(--plus-jakarta-sans);
 color: #fff;
 border: none;
 outline: none;
 background: var(--secondary-color);
 border-radius: 64px;
 cursor: pointer;
}

.popular-foods__button img {
 width: 14px;
 height: 14px;
 object-fit: contain;
 margin-left: 21px;
}

.popular-foods__card {
 padding: 38px;
 min-width: 260px;
 height: fit-content;
 display: flex;
 align-items: center;
 flex-direction: column;
 border-radius: 36px;
 background: rgba(255, 255, 255, 0.05);
 border: 1px solid rgba(255, 255, 255, 0.2);
}

.popular-foods__card-image {
 width: 170px;
 height: 144px;
 object-fit: contain;
}

.popular-foods__card-title {
 margin-top: 47px;
 font-weight: 600;
 font-size: 24px;
 line-height: 32px;
 font-family: var(--playfair-display);
 color: #fff;
 text-align: center;
}

.popular-foods__card-details {
 width: 100%;
 margin-top: 32px;
}

.popular-foods__card-rating {
 display: flex;
 align-items: center;
 gap: 8px;
}

.popular-foods__card-rating img {
 width: 24px;
 height: 24px;
 object-fit: contain;
}

.popular-foods__card-rating p {
 font-size: 20px; 
 font-weight: 300;
 font-family: var(--plus-jakarta-sans);
 color: #fff;
}

.popular-foods__card-price {
 font-size: 20px; 
 font-weight: 500;
 font-family: var(--plus-jakarta-sans);
 color: #fff;
}

.popular-foods__card.active-card {
 background: #fff;
 min-width: 340px;
}

.popular-foods__card.active-card .popular-foods__card-image {
 width: 234px;
 height: 180px;
}

.popular-foods__card.active-card .popular-foods__card-title {
 color: var(--black-500);
 font-size: 32px;
}

.popular-foods__card.active-card .popular-foods__card-rating img {
 width: 32px;
 height: 32px;
}

.popular-foods__card.active-card .popular-foods__card-rating p {
 font-size: 24px;
 color: var(--gray-100);
}

.popular-foods__card.active-card .popular-foods__card-price {
 font-size: 24px;
 color: var(--secondary-color)
}
</style>