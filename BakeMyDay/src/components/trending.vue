<template>
    <section class="trending" id="food">
         <section class="trending-sushi">
           <div class="trending__content" data-aos="fade-right">
             <p class="heading">Services we offer</p>
             <ul class="trending__list flex-between">
               <li>
                 <div class="trending__icon flex-center">
                   <img src="../assets/check.svg" alt="check" />
                 </div>
                 <p>Service 1</p>
               </li>
               <li>
                 <div class="trending__icon flex-center">
                   <img src="../assets/check.svg" alt="check" />
                 </div>
                 <p>Service 2</p>
               </li>
               <li>
                 <div class="trending__icon flex-center">
                   <img src="../assets/check.svg" alt="check" />
                 </div>
                 <p>Service 3</p>
               </li>
               <li>
                 <div class="trending__icon flex-center">
                   <img src="../assets/check.svg" alt="check" />
                 </div>
                 <p>Service 4</p>
               </li>
               <li>
                 <div class="trending__icon flex-center">
                   <img src="../assets/check.svg" alt="check" />
                 </div>
                 <p>Service 5</p>
               </li>
               <li>
                 <div class="trending__icon flex-center">
                   <img src="../assets/check.svg" alt="check" />
                 </div>
                 <p>Service 6</p>
               </li>
             </ul>
           </div>
     
           <div class="trending__image flex-center">
             <img src="../assets/main-logo.png" alt="bakemyday" data-aos="fade-left" />
     
             <div class="trending__arrow trending__arrow-left">
               <img src="../assets/arrow-vertical.svg" alt="arrow vertical" />
             </div>
           </div>
         </section>
       </section>
   </template>
   
   <style>
   .trending {
     position: relative;
     display: flex;
     flex-direction: column;
     overflow: hidden;
   }
   
   .trending-sushi {
     width: 100%;
     min-height: 640px;
   
     display: flex;
     flex-direction: row;
   }
   
   .trending__content {
     flex: 1;
     display: flex;
     justify-content: center;
     flex-direction: column;
   
     padding: 32px 64px;
   }
   
   .trending__content .heading{
     font-size: 58px;
     font-weight: 600;
     font-family: var(--playfair-display);
     color: var(--secondary-color);
     margin-bottom: 10vh;
   }
   
   
   .trending__list {
     list-style: none;
   
     flex-wrap: wrap;
     gap: 20px;
   }
   
   .trending__list li {
     flex: 1;
     display: flex;
     align-items: center;
     flex-direction: row;
     gap: 12px;
   
     min-width: 210px;
   }
   
   .trending__icon {
     width: 40px;
     height: 40px;
     border-radius: 100%;
     background-color: var(--primary-color);
   }
   
   .trending__icon img {
     width: 50%;
     height: 50%;
     object-fit: contain;
   }
   
   .trending__list p {
     flex: 1;
     font-size: 22px;
     font-weight: 500;
     font-family: var(--plus-jakarta-sans);
   
     color: var(--secondary-color);
   }
   
   .trending__image {
     flex: 1;
     position: relative;
     padding: 32px 64px;
     background-color: var(--color-white);
     background-repeat: no-repeat;
     background-size: contain;
     background-position: center;
   }
   
   .trending__image img {
     width: 454px;
     height: 460px;
     object-fit: contain;
   }
   
   /* Arrows */
   .trending__arrow {
     position: absolute;
     z-index: 1;
   }
   
   .trending__arrow img {
     object-fit: contain;
   }
   
   .trending__arrow-left {
     left: -2.5px;
     top: 12%;
   }
   
   .trending__arrow-left img {
     width: auto;
     height: 100%;
   }

   
   
   </style>