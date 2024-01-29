<template>
  <header class="w-full">
    <div id="header" class="flex items-center">
      <div class="w-1/2">
        <div id="logo" class="text-3xl lg:text-4xl font-extrabold text-yellow-400 cursor-pointer">
          Bee
        </div>
      </div>
      <div class="w-1/2 flex justify-end">
        <PlusIcon
          class="h-10 w-10 text-yellow-900 mx-2 bg-yellow-100 p-2 cursor-pointer active:scale-95 rounded-full"
        /><MagnifyingGlassIcon
          class="h-10 w-10 text-yellow-900 bg-yellow-100 p-2 cursor-pointer active:scale-95 rounded-full"
        />
      </div>
      <div></div>
    </div>
  </header>
</template>
<script setup>
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/24/outline'
</script>
