<template>
  <!-- 轮播容器 -->
  <div
    class="relative w-full overflow-hidden"
    :style="{ paddingTop: (700 / 1920) * 100 + '%' }"
    @mouseenter="showNav = true"
    @mouseleave="showNav = false"
  >
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        ref="slider"
        class="flex h-full transition-transform duration-500 ease-in-out"
        :style="trackStyle"
      >
        <div
          v-for="(slide, index) in slidesWithClones"
          :key="index"
          class="w-full h-full flex-shrink-0 relative"
        >
          <img :src="slide.image" class="w-full h-full object-cover" alt="Banner" />

          <!-- 文字内容 -->
          <div class="absolute inset-0 flex items-center bg-black/30">
            <div class="container mx-auto px-4 text-white space-y-6">
              <h2 class="text-5xl font-bold animate-fade-in-right">{{ slide.title }}</h2>
              <p class="text-xl max-w-2xl animate-fade-in-right animate-delay-100">
                {{ slide.description }}
              </p>
              <button
                class="btn btn-success text-white text-xl animate-fade-in-right animate-delay-200"
              >
                {{ slide.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 进度指示条 -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
      <div
        v-for="(_, index) in slides"
        :key="index"
        class="h-1.5 bg-white/30 rounded-full overflow-hidden transition-all duration-300"
        :class="{ 'w-8': activeIndex === index, 'w-4': activeIndex !== index }"
      >
        <div
          class="h-full bg-white"
          :style="{ width: activeIndex === index ? `${progress}%` : '0' }"
        />
      </div>
    </div>

    <!-- 导航按钮 -->
    <button
      class="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle glass shadow-lg z-20 opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-100': showNav }"
      @click="prevSlide"
    >
      ❮
    </button>
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle glass shadow-lg z-20 opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-100': showNav }"
      @click="nextSlide"
    >
      ❯
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((item) => item.image && item.title && item.description)
    },
  },
  interval: {
    type: Number,
    default: 5000,
  },
})

// 轨道位移计算
const trackStyle = computed(() => ({
  transform: `translateX(-${(activeIndex.value + 1) * 100}%)`,
  transition: isTransition.value ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
}))

// 响应式状态
const activeIndex = ref(0)
const progress = ref(0)
const isTransition = ref(true)
const showNav = ref(false)
let autoPlayTimer = null

// 创建克隆数组实现无缝循环
const slidesWithClones = computed(() => [
  props.slides[props.slides.length - 1],
  ...props.slides,
  props.slides[0],
])

// 自动播放逻辑
const startAutoPlay = () => {
  autoPlayTimer = setInterval(() => {
    progress.value += 100 / (props.interval / 50)

    if (progress.value >= 100) {
      nextSlide()
      progress.value = 0
    }
  }, 50)
}

// 切换逻辑
const nextSlide = () => {
  isTransition.value = true
  activeIndex.value++
  progress.value = 0
  // 到达克隆最后一项时重置
  if (activeIndex.value >= props.slides.length) {
    setTimeout(() => {
      isTransition.value = false
      activeIndex.value = 0
    }, 0)
  }
}

const prevSlide = () => {
  isTransition.value = true
  activeIndex.value--

  // 到达克隆第一项时重置
  if (activeIndex.value < 0) {
    setTimeout(() => {
      isTransition.value = false
      activeIndex.value = props.slides.length - 1
    }, 500)
  }
}

// 生命周期
onMounted(startAutoPlay)
onBeforeUnmount(() => clearInterval(autoPlayTimer))
</script>

<style>
/* 导航按钮过渡效果 */
.btn-circle {
  @apply transition-all duration-300;
}
</style>
