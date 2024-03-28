<template>
<div class="cart">
    <h1>Items going to the oven</h1>
    <div class="current">
        <div class="cart-item">
            <img src="../assets/cake-stock.jpg" alt="">
            <div class="item-text">
                <h3>Product Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa aliquid nam, earum quibusdam aspernatur labore unde sequi fuga autem? Dolorum sunt commodi, praesentium impedit minus assumenda mollitia ad eveniet.</p>
            </div>
            <div class="item-price">
                <h4>₹999</h4>
                <button class="remove-btn">Remove</button>
            </div>
        </div>
        <button class="place-order-btn">Place Order</button>
    </div>
    <hr style="height:2px; border-width:0; background-color: var(--color-white);">
    <h1>Prevoisly Baked For You</h1>
    <div class="previous">
        <div class="cart-item">
            <img src="../assets/cake-stock.jpg" alt="">
            <div class="item-text">
                <h3>Product Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa aliquid nam, earum quibusdam aspernatur labore unde sequi fuga autem? Dolorum sunt commodi, praesentium impedit minus assumenda mollitia ad eveniet.</p>
            </div>
            <div class="item-price">
                <h4>₹999</h4>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.cart{
    background-color: var(--primary-color);
    padding: 10px 0px;
}
.current, .previous{
    margin-bottom: 5vh;
}

.item-text{
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 0px 10px;
}

h1{
    /* margin-top: 2vh; */
    padding: 15px 20px;
    font-family: var(--playfair-display);
    color: var(--color-white);
}

h3{
    font-size: 26px;
    font-weight: 600;
    font-family: var(--playfair-display);
    color: var(--secondary-color);
}

p{
    font-family: var(--plus-jakarta-sans);
    color: var(--secondary-color);
    font-size: 16px;
    font-weight: 400;
}

h4{
    font-family: var(--plus-jakarta-sans);
    color: var(--secondary-color);
    font-size: 30px;
    font-weight: 400;
}

.cart-item{
    display: flex;
    height: 25vh;
    padding: 10px 20px 10px 10px;
    margin: 10px 20px;
    /* width: 100%; */
    background-color: var(--color-white);
    border-radius: 18px;
}
.cart-item img{
    border-radius: 8px;
}

.item-text,.item-price{
    margin-left: 5%;
}

.item-price{
    display: flex;
    flex-direction: column;
    gap: 48%;
    text-align: right;
}

.place-order-btn{
    margin-top: 20px;
    margin-left: 45%;
    border: none;
    border-radius: 10px;
    padding: 14px 50px;
    background-color: #01b641;
    color: #fff;
    font-family: var(--plus-jakarta-sans);
    font-size: 16px;
    font-weight: 500;
    transition: 0.5s ease;
    cursor: pointer;
}

.place-order-btn:hover{
    background-color: #009634;
}

.remove-btn{
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    background-color: #ff1538;
    color: #fff;
    font-family: var(--plus-jakarta-sans);
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s ease;
    cursor: pointer;
}

.remove-btn:hover{
    background-color: #e31d23;
}
</style>