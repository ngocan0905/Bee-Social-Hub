<template>
  <ClientLayout>
    <div class="my-2">
      <!-- quick status -->
      <div class="flex justify-around items-center mb-2">
        <RouterLink :to="{ name: 'profile' }">
          <img
            src="../assets/images/my-avatar.jpg"
            alt=""
            class="w-10 h-10 rounded-full object-contain"
          />
        </RouterLink>

        <button class="py-2 px-4 border bg-gray-200 rounded-full text-gray-600">
          Bạn đang nghĩ gì ?
        </button>
        <PhotoIcon class="h-10 w-10 p-2 text-gray-500" />
      </div>
      <hr class="border-4 rounded-full my-2" />
      <!-- post -->
      <PostCard />
    </div>
  </ClientLayout>
</template>
<script setup>
import ClientLayout from '../layouts/ClientLayout.vue'
import PostCard from '@/components/PostCard.vue'
import { PhotoIcon } from '@heroicons/vue/24/outline'
</script>
