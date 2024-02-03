<template>
  <section class="m-2 p-2 border-2 rounded shadow">
    <!-- poster -->
    <div class="flex items-center justify-between">
      <div class="flex">
        <RouterLink to="/profile">
          <img
            src="../assets/images/my-avatar.jpg"
            alt=""
            class="w-10 h-10 rounded-full object-contain"
          />
        </RouterLink>

        <div class="ml-2">
          <RouterLink to="/profile"><div class="font-bold">User name</div></RouterLink>

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
        <RouterLink :to="{ name: 'profile' }"
          ><img src="../assets/images/my-avatar.jpg" class="h-fit w-fit object-contain" alt=""
        /></RouterLink>
      </div>
    </div>
    <!-- feature -->
    <div class="flex my-2 justify-between">
      <button><HeartIcon class="w-10 h-10 p-2" /> <span>23</span></button>
      <button><ChatBubbleOvalLeftEllipsisIcon class="w-10 h-10 p-2" /> <span>23</span></button>
      <button><ShareIcon class="w-10 h-10 p-2" /> <span>23</span></button>
    </div>
  </section>
</template>
<script setup>
import {
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ShareIcon
} from '@heroicons/vue/24/outline'
</script>
