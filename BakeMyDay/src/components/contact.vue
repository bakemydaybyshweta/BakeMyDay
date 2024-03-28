<template>
    <section class="subscription flex-center" id="services">
          <h2 data-aos="flip-down">How to find us?</h2>
    <div class="contact-main">
        <div class="contact-text" data-aos="fade-down">
            <h3>Opening Hours</h3>
            <p>10:00 am – 9:00 pm</p>
            <h3>Contact</h3>
            <p>097027 76807</p>
            <h3>Address</h3>
            <p>58/ 1739 opp. to Gauri Shankar wadi no 2 near <br> Dominic Savio Vidyalaya Pant Nagar, <br> Ghatkopar East, Mumbai, Maharashtra 400075 India</p>
          </div>
        <div class="contact-map" data-aos="fade-down">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.50695984882833!2d72.91422886458167!3d19.088156751784204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cc607a1cc9%3A0xe5ea88521cfcb006!2sBake%20My%20Day%20By%20Shweta!5e1!3m2!1sen!2sin!4v1709469026368!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>   
    <div class="get-directions" data-aos="fade-down">
        <a href="https://tinyurl.com/3u5ukt55" target="_blank"><button>Get Directions</button></a>
    </div>   
    </section>
</template>
    
<style scoped>
    .subscription {
      padding: 64px ;
      background-color: var(--primary-color);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      flex-direction: column;
      overflow: hidden;
    }
    
    .subscription h2 {
      font-size: 58px;
      font-family: var(--playfair-display);
      font-weight: 600;
      line-height: 123px;
      color: #fff;
      text-align: center;
      margin-bottom: 7vh;
    }
    
    .subscription p {
      font-size: 16px;
      font-family: var(--plus-jakarta-sans);
      font-weight: 300;  
      margin-bottom: 30px;
      color: #fff;
    }
    

    .contact-main{
      display: flex;
      gap: 10vh;
    }

    .contact-text h3{
      font-size: 24px;
      font-family: var(--plus-jakarta-sans);
      font-weight: 400;
      margin-bottom: 12px;
      color: #fff;
      text-decoration: underline;
      text-decoration-color: var(--black-400);
    }

    .contact-map iframe{
      width: 589px;
      height: 287px;
      border-radius: 12px;
      border: 5px solid var(--black-400);
    }

    .get-directions button {
      padding: 20px;
      min-width: 180px;
      font-size: 16px;
      font-weight: 500;
      font-family: var(--plus-jakarta-sans);
      color: #fff;
      text-align: center;
      background: var(--black-400);
      border-radius: 46px;
      border: none;
      outline: none;
      cursor: pointer;
      margin-top: 5vh;
}

</style>

<script>
</script>