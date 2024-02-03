<template>
  <ClientLayout>
    <div>
      <!-- background image and  avatar -->
      <div class="relative">
        <div id="background-image" class="h-[200px] w-full bg-black relative rounded"></div>
        <div
          id="avatar"
          class="absolute -bottom-14 w-[90%] bg-yellow-50 left-4 rounded-full p-1 flex items-center"
        >
          <img
            src="../assets/images/my-avatar.jpg"
            alt=""
            class="h-24 w-24 rounded-full object-contain"
          />
          <div id="name" class="ml-4">
            <div class="font-extrabold text-xl hover:underline cursor-pointer">Adonis</div>
            <div>abi</div>
          </div>
        </div>
      </div>
    </div>
  </ClientLayout>
</template>
<script setup>
import ClientLayout from '@/layouts/ClientLayout.vue'
</script>
