<template>
  <ClientLayout>
    <div class="text-center font-extrabold text-yellow-950">Friend Requests</div>
    <RouterLink :to="{ name: 'friends' }"
      ><div class="text-sm font-bold text-yellow-600 flex items-center justify-between my-4">
        <div>
          Danh sách bạn bè : <span>{{ quantityFriends }}</span>
        </div>

        <ArrowLongRightIcon class="w-6 h-6 text-yellow-950" /></div
    ></RouterLink>

    <!-- list friends -->
    <section class="border-b flex justify-between py-2">
      <div class="flex items-center">
        <img src="../assets/images/my-avatar.jpg" class="w-14 h-14 rounded-full" alt="" />
        <div class="ml-4 font-bold">username</div>
      </div>
      <button class="bg-yellow-900 text-yellow-50 px-4 rounded font-bold">Request</button>
    </section>
    <!-- list friends -->
    <section class="border-b flex justify-between py-2">
      <div class="flex items-center">
        <img src="../assets/images/my-avatar.jpg" class="w-14 h-14 rounded-full" alt="" />
        <div class="ml-4 font-bold">username</div>
      </div>
      <button class="bg-yellow-900 text-yellow-50 px-4 rounded font-bold">Request</button>
    </section>
    <!-- list friends -->
    <section class="border-b flex justify-between py-2">
      <div class="flex items-center">
        <img src="../assets/images/my-avatar.jpg" class="w-14 h-14 rounded-full" alt="" />
        <div class="ml-4 font-bold">username</div>
      </div>
      <button class="bg-yellow-900 text-yellow-50 px-4 rounded font-bold">Request</button>
    </section>
  </ClientLayout>
</template>
<script setup>
import ClientLayout from '@/layouts/ClientLayout.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
const quantityFriends = ref(4)
</script>
