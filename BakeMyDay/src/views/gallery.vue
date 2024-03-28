<template>
        <div class="all-gallery">
        <div class="container-gallery">
            <div class="row-items-gallery">

              <div class="container-gallery-box">
                <div class="container-gallery-img">
                  <img src="../assets/cake-stock.jpg"/>
                </div>
              </div>
              <div class="container-gallery-box">
                <div class="container-gallery-img">
                  <img src="../assets/cake-stock.jpg"/>
                </div>
              </div>
              <div class="container-gallery-box">
                <div class="container-gallery-img">
                  <img src="../assets/cake-stock.jpg"/>
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
    </style>