<template>
  <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
    <div class="container mx-auto px-4">
      <!-- 标题区域 -->
      <header class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="inline-block relative"> 适用场景 </span>
        </h2>
        <p class="text-lg mt-6 max-w-2xl mx-auto">多种场景，一站式解决方案，满足您的各类互动需求</p>
      </header>

      <!-- 场景切换标签 -->
      <div class="flex justify-center mb-20">
        <div class="tabs-container w-full max-w-5xl">
          <div class="scene-tabs grid grid-cols-4 gap-3">
            <a
              v-for="(scene, index) in scenes"
              :key="scene.id"
              class="scene-tab flex flex-col items-center py-6 px-4 rounded-xl transition-all duration-500"
              :class="{
                'active-tab': activeSceneIndex === index,
                'inactive-tab': activeSceneIndex !== index,
              }"
              @click="activeSceneIndex = index"
            >
              <div
                class="icon-container p-3 rounded-full mb-3"
                :class="{
                  'bg-success/10': activeSceneIndex === index,
                  'bg-base-300/50': activeSceneIndex !== index,
                }"
              >
                <i
                  class="w-8 h-8 flex items-center justify-center text-2xl"
                  v-html="scene.icon"
                ></i>
              </div>
              <span class="font-bold text-center">{{ scene.title }}</span>
            </a>
          </div>
          <div
            class="indicator-container relative h-1 w-full mt-3 bg-base-300/30 rounded-full overflow-hidden"
          >
            <div
              class="indicator absolute h-full bg-success rounded-full transition-all duration-500"
              :style="{ width: '23%', left: `${activeSceneIndex * 25 + 1}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- 场景内容展示 -->
      <div class="scene-content mt-12">
        <div :key="activeSceneIndex" class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <!-- 场景图片展示区 -->
          <div class="space-y-6">
            <!-- 主图展示 -->
            <div
              class="group overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-success/10"
            >
              <img
                :src="activeScene.mainImage"
                :alt="activeScene.title"
                class="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <!-- 案例图片网格 -->
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(image, index) in activeScene.caseImages"
                :key="index"
                class="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  :src="image.url"
                  :alt="image.title"
                  class="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div class="p-3 bg-base-100/80 backdrop-blur-sm">
                  <p class="text-sm font-medium">{{ image.title }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 场景描述 -->
          <div class="space-y-8 p-4 sticky top-24">
            <div>
              <h3
                class="text-3xl font-bold bg-gradient-to-r from-success to-success/70 bg-clip-text text-transparent"
              >
                {{ activeScene.title }}
              </h3>
              <div class="w-16 h-1 bg-success rounded-full mt-2"></div>
            </div>
            <p class="text-lg leading-relaxed">{{ activeScene.description }}</p>
            <ul class="space-y-4">
              <li
                v-for="(feature, i) in activeScene.features"
                :key="i"
                class="flex items-start transform hover:translate-x-2 transition-transform duration-300"
              >
                <span
                  class="inline-flex items-center justify-center rounded-full bg-success/10 p-2 mr-4 text-success shadow-sm"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="text-base-content">{{ feature }}</span>
              </li>
            </ul>
            <div class="pt-4">
              <button
                class="btn btn-success text-white btn-lg shadow-lg hover:shadow-success/20 gap-2 rounded-full px-8 transition-all duration-300 hover:-translate-y-1"
              >
                了解更多
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// 场景数据
const scenes = ref([
  {
    id: 'wedding',
    title: '婚庆相亲',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /></svg>',
    mainImage: '/images/scenes/wedding.png',
    caseImages: [
      {
        url: 'https://picsum.photos/400/300?wedding1',
        title: '浪漫婚礼互动',
      },
      {
        url: 'https://picsum.photos/400/300?wedding2',
        title: '趣味相亲活动',
      },
      {
        url: 'https://picsum.photos/400/300?wedding3',
        title: '婚礼游戏环节',
      },
      {
        url: 'https://picsum.photos/400/300?wedding4',
        title: '创意合影墙',
      },
    ],
    description:
      '为您的婚礼或相亲活动增添互动乐趣，打造难忘的浪漫时刻。让每一位宾客都能积极参与，留下美好记忆。',
    features: [
      '多人互动游戏，增进交流',
      '定制婚礼主题，营造氛围',
      '实时互动反馈，留下美好回忆',
      '简单易用，适合各年龄段嘉宾',
    ],
  },
  {
    id: 'corporate',
    title: '企业年会',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" /></svg>',
    mainImage: 'https://picsum.photos/800/450?corporate',
    caseImages: [
      {
        url: 'https://picsum.photos/400/300?corp1',
        title: '年会开场秀',
      },
      {
        url: 'https://picsum.photos/400/300?corp2',
        title: '团队竞赛',
      },
      {
        url: 'https://picsum.photos/400/300?corp3',
        title: '互动抽奖',
      },
      {
        url: 'https://picsum.photos/400/300?corp4',
        title: '颁奖典礼',
      },
    ],
    description:
      '提升企业年会参与度，增强团队凝聚力，打造专属企业文化。让每一位员工都能充分参与，感受团队温暖。',
    features: [
      '团队协作游戏，增强凝聚力',
      '企业文化融入，强化品牌认同',
      '数据统计分析，洞察团队动态',
      '定制企业元素，彰显企业特色',
    ],
  },
  {
    id: 'exhibition',
    title: '展会互动',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>',
    image: 'https://picsum.photos/800/450?exhibition',
    description:
      '吸引展会人流，提高品牌曝光度，让您的展位成为全场焦点。创新的互动方式让访客驻足参与，形成良好口碑。',
    features: [
      '吸睛互动装置，提高驻足率',
      '即时奖励机制，刺激转化',
      '数据采集分析，精准营销',
      '品牌元素植入，深化印象',
    ],
  },
  {
    id: 'team',
    title: '团队激励',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>',
    image: 'https://picsum.photos/800/450?team',
    description:
      '通过有趣的互动方式，激发团队活力，提升团队协作能力。精心设计的活动让团队成员深入交流，共同成长。',
    features: [
      '团建游戏定制，针对团队痛点',
      '实时排行榜，激发竞争意识',
      '团队数据分析，发现潜在领导者',
      '灵活场地适应，室内外均可开展',
    ],
  },
])

// 当前选中的场景索引
const activeSceneIndex = ref(0)

// 当前选中的场景
const activeScene = computed(() => scenes.value[activeSceneIndex.value])
</script>

<style scoped lang="postcss">
.tabs-boxed .tab-active {
  @apply bg-success text-primary-content;
}

.tabs-boxed .tab {
  @apply bg-base-100 hover:bg-base-200;
}

.scene-tab {
  @apply bg-base-100 shadow-md hover:shadow-lg cursor-pointer;
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

.active-tab .icon-container svg {
  @apply text-white;
}

.inactive-tab .icon-container svg {
  @apply text-base-content/70;
}

.icon-container {
  @apply transition-all duration-300;
}

.tabs-container {
  @apply relative z-10;
}

/* 增加一些额外的动画效果 */
@keyframes pulse-light {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

.active-tab .icon-container {
  animation: pulse-light 2s infinite;
}

/* 添加新的样式 */
.scene-content {
  @apply relative;
}

/* 优化图片网格布局 */
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

/* 添加图片悬停效果 */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* 优化图片容器样式 */
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
