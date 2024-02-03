<template>
  <form class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    <h2 class="text-2xl font-semibold mb-6">Create an Account</h2>
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
      <input type="text" id="name" v-model="name" class="w-full px-3 py-2 border rounded" />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
      <input type="email" id="email" v-model="email" class="w-full px-3 py-2 border rounded" />
    </div>
    <!-- Add more input fields as needed -->
    <div class="mb-6">
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: ''
      // Add more data properties as needed
    }
  },
  methods: {
    // Add methods for form submission or validation
  }
}
</script>

<style scoped>
/* Add component-specific styles if needed */
</style>
