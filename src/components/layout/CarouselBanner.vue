<template>
  <div class="w-full relative overflow-hidden"
       :style="{ paddingTop: (700 / 1920 * 100) + '%' }">
    <!-- 轮播容器 -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div ref="slider" class="flex h-full transition-transform duration-500 ease-in-out"
           :style="trackStyle">
        <div v-for="(slide, index) in slidesWithClones"
             :key="index"
             class="w-full h-full flex-shrink-0 relative">
          <img :src="slide.image"
               class="w-full h-full object-cover"
               alt="Banner">

          <!-- 文字内容 -->
          <div class="absolute inset-0 flex items-center bg-black/30">
            <div class="container mx-auto px-4 text-white space-y-6">
              <h2 class="text-5xl font-bold animate-fade-in-right">{{ slide.title }}</h2>
              <p class="text-xl max-w-2xl animate-fade-in-right animate-delay-100">{{ slide.description }}</p>
              <button class="btn btn-primary animate-fade-in-right animate-delay-200">
                {{ slide.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 控制按钮 -->
    <button class="absolute top-1/2 left-4 -translate-y-1/2 btn btn-circle btn-sm glass"
            @click="prevSlide">
      ❮
    </button>
    <button class="absolute top-1/2 right-4 -translate-y-1/2 btn btn-circle btn-sm glass"
            @click="nextSlide">
      ❯
    </button>

    <!-- 指示器 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
      <button v-for="(_, index) in slides"
              :key="index"
              class="w-3 h-3 rounded-full transition-colors"
              :class="index === realIndex ? 'bg-primary' : 'bg-white/50'"
              @click="goToSlide(index)">
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const slides = ref([
  {
    image: 'https://picsum.photos/1920/700?1',
    title: '夏季新品上市1111',
    description: '探索最新夏季系列，享受清凉一夏的时尚体验',
    buttonText: '立即选购'
  },
  {
    image: 'https://picsum.photos/1920/700?2',
    title: '限时优惠活动2222',
    description: '全场商品最高5折优惠，数量有限先到先得',
    buttonText: '查看优惠'
  },
  {
    image: 'https://picsum.photos/1920/700?3',
    title: '会员专属特权3333',
    description: '注册会员享受专属折扣和优先购买权',
    buttonText: '加入会员'
  },
  {
    image: 'https://picsum.photos/1920/700?4',
      title: '会员专属特权3333',
      description: '注册会员享受专属折扣和优先购买权',
      buttonText: '加入会员'
  }
])

// 添加首尾克隆项
const slidesWithClones = computed(() => {
  return [slides.value[slides.value.length - 1], ...slides.value, slides.value[0]]
})

// 轨道位移计算
const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
  transition: isTransition.value
    ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
    : 'none'
}))

const currentIndex = ref(1)
const isTransition = ref(true)
let interval = null
let timeout = null

// 计算真实索引
const realIndex = computed(() => {
  if (currentIndex.value === 0) return slides.value.length - 1
  if (currentIndex.value === slidesWithClones.value.length - 1) return 0
  return currentIndex.value - 1
})

const startAutoPlay = () => {
  interval = setInterval(() => {
    nextSlide()
  }, 5000)
}

// 向后滚动
const nextSlide = () => {
  currentIndex.value++
  checkBoundary()
}

// 向前滚动
const prevSlide = () => {
  currentIndex.value--
  checkBoundary()
}

//点击指示器选择
const goToSlide = (index) => {
  currentIndex.value = index + 1
  resetInterval()
}

// 边界检查逻辑
const checkBoundary = () => {
  // 到达克隆的最后一张
  if (currentIndex.value >= slidesWithClones.value.length - 1) {
    setTimeout(() => {
      isTransition.value = false
      currentIndex.value = 1
    }, 500)
  }
  // 到达克隆的第一张
  if (currentIndex.value <= 0) {
    setTimeout(() => {
      currentIndex.value = slidesWithClones.value.length - 2
    }, 500)
  }
}



//重置自动播放
const resetInterval = () => {
  clearInterval(interval)
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  clearInterval(interval)
  cancelAnimationFrame(timeout)
})
</script>

<style>
/* 自定义动画 */
.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

.animate-delay-100 {
  animation-delay: 0.2s;
}

.animate-delay-200 {
  animation-delay: 0.4s;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
