<!-- <template>
        <div class="all-gallery">
        <div class="container-gallery">
            <div class="row-items-gallery">

              <div class="container-gallery-box">
                <div class="container-gallery-img">
                  <img src="../assets/gallery2.png"/>
                </div>
              </div>
              <div class="container-gallery-box">
                <div class="container-gallery-img">
                  <img src="../assets/gallery2.png"/>
                </div>
              </div>
              <div class="container-gallery-box">
                <div class="container-gallery-img">
                  <img src="../assets/gallery2.png"/>
                </div>
              </div>

            </div>
          </div>
        </div>
    </template>
    
    <style>
    .all-gallery{
        background-color: var(--primary-color);
    }
    
    .container-gallery{
        margin: 0vh 5vh;
    }
    
    
    .row-items-gallery{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, auto));
            grid-gap: 5px;
            align-items: center;
            text-align: center;
            padding: 10px 0;
    }
    
    .container-gallery-box{
            background: var(--color-white);
            border: 1px solid #dad5d5;
            border-radius: 15px;
            transition: all 0.5s ease 0s;
            cursor: pointer;
    }
    .container-gallery-img img{
            height: 35vh;
            width: 100%;
            padding: 5px;
            background: var(--bg-color);
            border-radius: 15px;
            cursor: pointer;
    }
    .container-gallery-box h4{
        font-family: var(--playfair-display);
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 8px;
    }
    .container-gallery-box p{
        font-family: var(--plus-jakarta-sans);
        padding: 5px 10px;
            font-size: 15px;
            color: var(--second-color);
    }
    
    .container-gallery-box .price{
        font-size: 24px;
        font-weight: 600;
    }
    
    .container-gallery-box p span{
        color: gold;
        font-size: 25px;
    }
    
    .container-gallery-box:hover{
            transform: scale(1.05);
    }
    
    .container-gallery-box p i{
        color: #fed922;
    }
    
    .container-gallery button{
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
    
      .container-gallery button:hover{
        background: var(--primary-color);
        border: none;
        color: #fff;
      }
    
     @media(max-width:1040px){
         .container-gallery-img img{
               height: 50%;
         }
    
     }
     @media(max-width:550px){
         .container-gallery h1{
        text-align: center;
        font-size: 20px;
    }
    
     .container-gallery .contact{
        background: #0c7c30;
        color: #fff;
     }
    
     }
    
     @media(max-width:420px){
        .row-items-gallery{
            grid-template-columns: repeat(auto-fit, minmax(265px, auto));
    
        }
     }
    </style> -->

<template>
  <div class="row">
  <div class="column">
    <img src="../assets/gallery1.png">
    <img src="../assets/gallery4.png">
    <img src="../assets/gallery3.png">
    <img src="../assets/gallery4.png">
    <img src="../assets/gallery6.png">
    <img src="../assets/gallery7.png">
    <img src="../assets/gallery4.png">
  </div>
  <div class="column">
    <img src="../assets/gallery2.png">
    <img src="../assets/gallery5.png">
    <img src="../assets/gallery1.png">
    <img src="../assets/gallery7.png">
    <img src="../assets/gallery6.png">
    <img src="../assets/gallery2.png">
  </div>
  <div class="column">
    <img src="../assets/gallery3.png">
    <img src="../assets/gallery6.png">
    <img src="../assets/gallery3.png">
    <img src="../assets/gallery4.png">
    <img src="../assets/gallery6.png">
    <img src="../assets/gallery7.png">
    <img src="../assets/gallery4.png">
  </div>
  <div class="column">
    <img src="../assets/gallery4.png">
    <img src="../assets/gallery7.png">
    <img src="../assets/gallery1.png">
    <img src="../assets/gallery7.png">
    <img src="../assets/gallery6.png">
    <img src="../assets/gallery2.png">
  </div>
</div>
</template>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

</style>