<template>
  <div id="container" class="m-2">
    <HeaderClient />
    <NavigationMobile />
    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
import NavigationMobile from '@/components/NavigationMobile.vue'
import HeaderClient from '../components/HeaderClient.vue'
</script>
