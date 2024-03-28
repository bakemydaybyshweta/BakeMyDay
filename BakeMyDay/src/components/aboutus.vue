<template>
    <section class="about-us" id="about-us">
   <div class="about-us__image">
     <div class="about-us__image-slice1">
       <img src="../assets/donuts.jpg" alt="cake" data-aos="fade-up" />
     </div>

     <button class="about-us__button">
       Learn More
       <img src="../assets/arrow-up-right.svg" alt="learn more" />
     </button>

     <div class="about-us__image-slice2">
       <img src="../assets/cupcakes.jpg" alt="cake"  data-aos="fade-down" />
     </div>
   </div>

   <div class="about-us__content"  data-aos="fade-left">
     <p class="cake__subtitle" style="font-size: 28px;">About Us</p>
     <h3 class="cake__title">Our mission is to deliver memorable flavours with quality ingredients</h3>
     <p class="cake__description">Quality is our foundation. We use only the finest ingredients to create cakes that are a symphony of flavors. From classic favourites to innovative combos, our cakes are a testament to our commitment to delivering an unparalleled taste experience.</p>
   </div>
 </section>
</template>

<style>
.about-us {
display: flex;
min-height: 720px;
overflow: hidden;
}

.about-us__image {
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
background: var(--color-white);
position: relative;
}

.about-us__image div {
/* padding: 0px 64px; */
flex: 1;
display: flex;
align-items: center;
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}

.about-us__image-slice1 {
border-bottom: 8px solid var(--color-creamson);
}

.about-us__image-slice1 img {
width: 100%;
height: 100%;
}

.about-us__image-slice2 img {
width: 100%;
height: 100%;
}

.about-us__button {
position: absolute;
right: 0;
padding: 12px 32px;
min-height: 64px;
background: #fff;
border-radius: 32px 0 0 32px;
border: 0;
outline: 0;
color: var(--secondary-color);
font-family: var(--plus-jakarta-sans);
font-weight: 500;
font-size: 18px;
line-height: 23px;
cursor: pointer;
z-index: 100;
}

.about-us__button img {
object-fit: contain;
margin-left: 32px;
}

.about-us__content {
padding: 64px;
flex: 1;
display: flex;
justify-content: center;
flex-direction: column;
}
</style>