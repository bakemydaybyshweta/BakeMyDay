<script setup>
import Navbar from './components/nav.vue'
import './assets/main.css';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()

const isSignUpPage = computed(() => route.fullPath == '/signup');
const isLoginPage = computed(() => route.fullPath == '/login');
const isHomePage = computed(() => route.fullPath == '/');

</script>

<template>
  <Navbar v-if="!isSignUpPage && !isLoginPage && !isHomePage"/>
  <router-view></router-view>
</template>

<style scoped>
</style>
