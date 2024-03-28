<template>
    <div class="carousel" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
      <div class="slides" ref="slides">
        <div v-for="(slide, index) in slides" :key="index" class="slide"
             :style="{ order: slideOrder(index) }">
          <p>{{ slide }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          "The cakes and chocolates are heavenly and plus there is no compromise in the quality and quantity. All cakes are 100% vegetarian which gives an plus point. Totally Worth it. Kudos to BakeMyDay By Shweta. ~ Tanmay Kamble",
          "I would highly recommend cakes by bake my day. Cakes are freshly baked, fluffy and Delicious. They have wide range of variety. Must try❤️ ~ Ankita Kambli",
          "Best in taste feels fresh and the quantity is also perfect as compare to other outside cakes. ~ Kavya Dhaware"
        ],
        currentIndex: 0,
        intervalId: null
      };
    },
    mounted() {
      this.startAutoSlide();
    },
    methods: {
      slideOrder(index) {
        let offset = index - this.currentIndex;
        if (offset === 0) return 0;
        if (offset > 0) return offset;
        return this.slides.length + offset;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      startAutoSlide() {
        this.intervalId = setInterval(() => {
          this.nextSlide();
        }, 4000);
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease;
    margin-bottom: 20px;
  }
  
  .slide {
    flex: 0 0 auto;
    width: 100%;
  }
  
  @media screen and (max-width: 600px) {
    .carousel {
      width: 90%;
    }
  }
  </style>
  