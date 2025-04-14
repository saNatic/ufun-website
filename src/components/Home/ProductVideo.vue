<template>
  <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
    <div class="container mx-auto px-4">
      <!-- 标题区域 -->
      <header class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="inline-block relative"> 热门玩法推荐111 </span>
        </h2>
        <p class="text-lg mt-6 max-w-2xl mx-auto">60+玩法任选 活动氛围高涨</p>
      </header>
      <!-- Tab 导航 -->
      <div class="mb-10 overflow-hidden tab-section">
        <div class="container-fluid px-4 md:px-8 lg:px-12">
          <div class="scene-tabs grid grid-cols-5 gap-3">
            <a
              v-for="tab in tabs"
              :key="tab.id"
              class="scene-tab flex flex-col items-center py-6 px-4 rounded-xl transition-all duration-500"
              :class="{
                'active-tab': activeTab === tab.id,
                'inactive-tab': activeTab !== tab.id,
              }"
              @click="activeTab = tab.id"
            >
              <div class="icon-container mb-3">
                <LottieAnimation
                  :animation-data="tab.lottieData"
                  :height="120"
                  :width="120"
                  :loop="true"
                  :autoplay="true"
                  :speed="tab.id === activeTab ? 1.5 : 1"
                  class="lottie-icon"
                />
              </div>
              <span class="font-bold text-center">{{ tab.label }}</span>
            </a>
          </div>
          <div
            class="indicator-container relative h-1 w-full mt-3 bg-base-300/30 rounded-full overflow-hidden"
          >
            <div
              class="indicator absolute h-full bg-success rounded-full transition-all duration-500"
              :style="{
                width: '20%',
                left: `${tabs.findIndex((t) => t.id === activeTab) * 20}%`,
              }"
            ></div>
          </div>
        </div>
      </div>

      <!-- 视频列表 -->
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          <article
            v-for="video in filteredVideos"
            :key="video.id"
            class="video-card bg-base-300 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            @click="openVideoModal(video)"
          >
            <div class="relative aspect-video">
              <img
                :src="video.thumbnail"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                :alt="video.title"
              />
              <div
                class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              >
                <button class="btn btn-circle btn-success">
                  <span class="sr-only">播放视频</span>
                  <i class="text-xl">▶</i>
                </button>
              </div>
              <time
                class="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm"
              >
                {{ video.duration }}
              </time>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2">{{ video.title }}</h3>
              <p class="text-sm text-base-content/70 line-clamp-2">{{ video.description }}</p>
            </div>
          </article>
        </div>

        <!-- 立即使用按钮 -->
        <div class="text-center mt-16 mb-8">
          <a
            href="/register"
            class="btn btn-success text-white btn-lg px-12 font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            立即使用
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <!-- 视频播放弹窗 -->
        <div class="modal" :class="{ 'modal-open': showVideoModal }">
          <div class="modal-box max-w-5xl p-0 overflow-hidden bg-black">
            <button
              class="btn btn-sm btn-circle absolute right-2 top-2 z-10 text-white bg-black/50 hover:bg-black/80 border-none"
              @click="closeVideoModal"
            >
              ✕
            </button>
            <div class="aspect-video w-full">
              <video v-if="currentVideo" ref="videoPlayer" class="w-full h-full" controls autoplay>
                <source :src="currentVideo?.src" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
            </div>
            <div class="p-4 bg-base-100">
              <h3 class="text-xl font-bold mb-2">{{ currentVideo?.title }}</h3>
              <p class="text-base-content/80">{{ currentVideo?.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import LottieAnimation from '@/components/LottieAnimation.vue'
import { getVideoUrl, getImageUrl } from '@/utils/assetHelper'

// Tab数据
const tabs = ref([
  {
    id: 'hot',
    label: '热门玩法',
    lottieData: '/lottie/hot.json',
    videos: [],
  },
  {
    id: 'signin',
    label: '签到暖场',
    lottieData: '/lottie/signin.json',
    videos: [],
  },
  {
    id: 'redpacket',
    label: '红包抽奖',
    lottieData: '/lottie/lottery.json',
    videos: [],
  },
  {
    id: 'game',
    label: '互动游戏',
    lottieData: '/lottie/shake.json',
    videos: [],
  },
  {
    id: 'ceremony',
    label: '会议仪式',
    lottieData: '/lottie/ceremony.json',
    videos: [],
  },
])

// 视频数据
const allVideos = ref([
  {
    id: 1,
    title: '弹幕',
    description: '实时弹幕互动，增加活动氛围，满屏祝福',
    duration: '2:30',
    thumbnail: getImageUrl('thumbnails/danmu.png'),
    src: getVideoUrl('products/danmu.mp4'),
    category: 'hot',
  },
  {
    id: 2,
    title: '3D抽奖',
    description: '动感3D抽奖，支持自定义奖品和中奖概率，增强仪式感',
    duration: '2:15',
    thumbnail: getImageUrl('thumbnails/3Dlottery.png'),
    src: getVideoUrl('products/3Dlottery.mp4'),
    category: 'hot',
  },
  {
    id: 3,
    title: '动感摇一摇',
    description: '动感摇一摇，增加活动氛围',
    duration: '2:45',
    thumbnail: './images/thumbnails/shake.png',
    src: '/videos/products/shake.mp4',
    category: 'hot',
  },
  {
    id: 4,
    title: '3D签到墙',
    description: '签到头像组成logo，立体3d效果',
    duration: '2:20',
    thumbnail: './images/thumbnails/3Dsignin.png',
    src: '/videos/products/3Dsignin.mp4',
    category: 'hot',
  },
  {
    id: 5,
    title: '弹珠抽奖',
    description: '弹珠抽奖，趣味性十足，满足商场展会的抽奖需求',
    duration: '2:10',
    thumbnail: './images/thumbnails/ball.png',
    src: '/videos/products/ball.mp4',
    category: 'signin',
  },
  {
    id: 6,
    title: '拉霸机抽奖',
    description: '经典拉霸机抽奖',
    duration: '2:35',
    thumbnail: './images/thumbnails/slotMachine.png',
    src: '/videos/products//slotMachine.mp4',
    category: 'signin',
  },
  {
    id: 7,
    title: '产品入门指南7',
    description: '快速了解产品核心功能和使用方法（第7集）',
    duration: '2:25',
    thumbnail: './images/thumbnails/ball.png',
    src: '/videos/ball.mp4',
    category: 'hot',
  },
])

// 初始化分类数据
onMounted(() => {
  tabs.value.forEach((tab) => {
    tab.videos = allVideos.value.filter((v) => v.category === tab.id || tab.id === 'hot')
  })
})

// 状态管理
const activeTab = ref('hot')
const showVideoModal = ref(false)
const currentVideo = ref(null)
const videoPlayer = ref(null)

// 计算属性
const filteredVideos = computed(() => {
  return tabs.value.find((t) => t.id === activeTab.value)?.videos || []
})

// 视频播放框控制
const openVideoModal = (video) => {
  currentVideo.value = video
  showVideoModal.value = true
}

const closeVideoModal = () => {
  showVideoModal.value = false
  if (videoPlayer.value) {
    videoPlayer.value.pause()
  }
  currentVideo.value = null
}

// 清理
onUnmounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.pause()
  }
})
</script>

<style scoped>
.video-card {
  @apply transition-all duration-300;
}

.video-card:hover {
  @apply transform -translate-y-1;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 添加新的标签样式 */
.scene-tab {
  @apply bg-base-100 shadow-md hover:shadow-lg cursor-pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.3s;
}

.active-tab {
  @apply bg-success/80 text-white shadow-lg transform -translate-y-1;
}

.inactive-tab {
  @apply hover:bg-base-200 hover:-translate-y-1;
}

.scene-tab:hover .icon-container {
  @apply transform scale-110;
}

.icon-container {
  @apply transition-all duration-300 flex items-center justify-center relative;
  width: 60px;
  height: 60px;
  overflow: visible;
}

/* 新增全宽Tab容器样式 */
.tab-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  padding: 1rem 0;
}

.container-fluid {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}

/* 保留Lottie动画样式 */
.lottie-icon {
  @apply transition-all duration-300;
  transform: scale(1);
  transform-origin: center center;
}

.scene-tab:hover .lottie-icon {
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
  transform: scale(1.2);
}

.active-tab .lottie-icon {
  filter: drop-shadow(0 0 8px rgba(var(--color-success-rgb), 0.4));
  transform: scale(1.3);
}

/* 可以调整指示器的过渡时间，使其更流畅 */
.indicator {
  transition:
    left 0.3s ease-out,
    width 0.3s ease-out;
}
</style>
