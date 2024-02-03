<template>
  <div class="flex justify-between border-b">
    <RouterLink to="/">
      <HomeIcon
        class="w-10 h-10 text-yellow-950 p-2 rounded-full"
        :class="{ 'active-icon': $route.path === '/' }"
      />
    </RouterLink>
    <GlobeAsiaAustraliaIcon class="w-10 h-10 text-yellow-950 p-2 rounded-full" />
    <RouterLink :to="{ name: 'friends' }">
      <UsersIcon
        class="w-10 h-10 text-yellow-950 p-2 rounded-full"
        :class="{ 'active-icon': $route.name === 'friends' }"
      />
    </RouterLink>

    <BellIcon class="w-10 h-10 text-yellow-950 p-2 rounded-full" />
    <Bars4Icon class="w-10 h-10 text-yellow-950 p-2 rounded-full" />
  </div>
</template>
<script setup>
import {
  HomeIcon,
  UsersIcon,
  BellIcon,
  Bars4Icon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/vue/24/outline'
</script>
<style scoped>
.active-icon {
  color: rgb(169, 169, 0);
}
</style>
