<template>
  <div
    class="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex items-center justify-center"
  >
    <div class="bg-white p-8 rounded shadow-md w-full h-full md:h-fit md:w-[500px]">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Wellcome to Bee</h2>

      <form @submit.prevent="login">
        <!-- Thêm tùy chọn đăng nhập bằng Facebook -->
        <div class="block md:flex">
          <button
            type="button"
            class="w-full text-black p-2 border rounded hover:bg-red-200 focus:outline-none mb-4 flex items-center"
            @click="loginWithFacebook"
          >
            <span class="">
              <img src="../assets/images/google-icon.png" class="h-6" alt="" />
            </span>
            Login with google
          </button>

          <!-- Thêm tùy chọn đăng nhập bằng Google -->
          <button
            type="button"
            class="w-full text-black p-2 border rounded hover:bg-blue-200 focus:outline-none mb-4 flex items-center"
            @click="loginWithGoogle"
          >
            <span>
              <img src="../assets/images/facebook-icon.png" class="h-6" alt="" />
            </span>
            Login with facebook
          </button>
        </div>
        <div class="text-center text-xl flex items-center">
          <div class="border w-full"></div>
          <span class="mx-2">Or</span>
          <div class="border w-full"></div>
        </div>
        <!-- Thêm phần đăng nhập bằng tên đăng nhập và mật khẩu -->
        <div class="mb-6">
          <label for="username" class="block text-sm font-medium text-gray-600">User name :</label>
          <input
            v-model="username"
            type="text"
            id="username"
            name="username"
            class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          class="mb-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none"
        >
          Đăng nhập
        </button>
        <div class="">Do not have an account? <span class="font-bold">Sign up</span></div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let username = ref('')
let password = ref('')
</script>
