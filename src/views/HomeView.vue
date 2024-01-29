<template>
  <ClientLayout>
    <div class="my-2">
      <!-- quick status -->
      <div class="flex justify-around items-center mb-2">
        <img
          src="../assets/images/my-avatar.jpg"
          alt=""
          class="w-10 h-10 rounded-full object-contain"
        />
        <button class="py-2 px-4 border rounded-full font-thin">Bạn đang nghĩ gì ?</button>
        <PhotoIcon class="h-10 w-10 p-2 text-gray-500" />
      </div>
      <hr class="border-4 rounded-full my-2" />
      <!-- post -->
      <section class="m-2 p-2 border-2 rounded shadow">
        <!-- poster -->
        <div class="flex items-center justify-between">
          <div class="flex">
            <img
              src="../assets/images/my-avatar.jpg"
              alt=""
              class="w-10 h-10 rounded-full object-contain"
            />
            <div class="ml-2">
              <div class="font-bold">User name</div>
              <div class="font-thin">2d ago</div>
            </div>
          </div>
          <EllipsisVerticalIcon class="w-10 h-10 text-gray-600 p-2" />
        </div>
        <!-- content -->
        <div class="my-2">
          <!-- caption -->
          <span class="">my face</span>
          <!-- images -->

          <div class="my-2 rounded overflow-hidden">
            <img src="../assets/images/my-avatar.jpg" class="h-fit w-fit object-contain" alt="" />
          </div>
        </div>
        <!-- feature -->
        <div class="flex my-2 justify-between">
          <button><HeartIcon class="w-10 h-10 p-2" /> <span>23</span></button>
          <button><ChatBubbleOvalLeftEllipsisIcon class="w-10 h-10 p-2" /> <span>23</span></button>
          <button><ShareIcon class="w-10 h-10 p-2" /> <span>23</span></button>
        </div>
      </section>
    </div>
  </ClientLayout>
</template>
<script setup>
import ClientLayout from '../layouts/ClientLayout.vue'

import {
  PhotoIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ShareIcon
} from '@heroicons/vue/24/outline'
</script>
