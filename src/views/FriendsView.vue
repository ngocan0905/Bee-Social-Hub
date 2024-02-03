<template>
  <ClientLayout>
    <div class="text-center font-extrabold text-yellow-950">Friends</div>
    <RouterLink :to="{ name: 'request' }"
      ><div class="text-sm font-bold text-yellow-600 flex items-center justify-between my-4">
        <div>
          Các lời mời kết bạn : <span>{{ friendsRequest }}</span>
        </div>

        <ArrowLongRightIcon class="w-6 h-6 text-yellow-950" /></div
    ></RouterLink>

    <!-- list friends -->
    <section class="border-b flex justify-between py-2">
      <div class="flex items-center">
        <img src="../assets/images/my-avatar.jpg" class="w-14 h-14 rounded-full" alt="" />
        <div class="ml-4 font-bold">username</div>
      </div>
      <button class="bg-yellow-300 text-yellow-950 px-4 rounded font-bold">Friend</button>
    </section>
    <!-- list friends -->
    <section class="border-b flex justify-between py-2">
      <div class="flex items-center">
        <img src="../assets/images/my-avatar.jpg" class="w-14 h-14 rounded-full" alt="" />
        <div class="ml-4 font-bold">username</div>
      </div>
      <button class="bg-yellow-300 text-yellow-950 px-4 rounded font-bold">Friend</button>
    </section>
    <!-- list friends -->
    <section class="border-b flex justify-between py-2">
      <div class="flex items-center">
        <img src="../assets/images/my-avatar.jpg" class="w-14 h-14 rounded-full" alt="" />
        <div class="ml-4 font-bold">username</div>
      </div>
      <button class="bg-yellow-300 text-yellow-950 px-4 rounded font-bold">Friend</button>
    </section>
    <!-- list friends -->
    <section class="border-b flex justify-between py-2">
      <div class="flex items-center">
        <img src="../assets/images/my-avatar.jpg" class="w-14 h-14 rounded-full" alt="" />
        <div class="ml-4 font-bold">username</div>
      </div>
      <button class="bg-yellow-300 text-yellow-950 px-4 rounded font-bold">Friend</button>
    </section>
  </ClientLayout>
</template>
<script setup>
import ClientLayout from '@/layouts/ClientLayout.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
const friendsRequest = ref(3)
</script>
