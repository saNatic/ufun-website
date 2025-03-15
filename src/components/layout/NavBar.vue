<template>
  <nav class="navbar bg-base-100 shadow-lg px-4 md:px-8 sticky top-0 z-50">
    <!-- 左侧Logo -->
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-2xl bg-success text-white">
        <img src="@/assets/logo.svg" alt="Logo" class="h-6 mr-1" />
      </router-link>
    </div>

    <!-- 桌面导航 -->
    <div class="flex-none hidden md:flex">
      <ul class="menu menu-horizontal px-1 gap-4">
        <li v-for="item in navItems" :key="item.path">
          <router-link
            :to="item.path"
            class="text-lg hover:text-success"
            active-class="text-success font-bold"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 移动端汉堡菜单 -->
    <div class="md:hidden dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path" class="active:bg-primary">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 主题切换 -->
    <button class="btn btn-ghost btn-circle ml-4" @click="toggleTheme">
      <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
        />
      </svg>
      <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  { path: '/', title: '首页' },
  { path: '/services', title: '产品中心' },
  { path: '/about', title: '关于我们' },
  { path: '/contact', title: '联系我们' },
]

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
}
</script>
