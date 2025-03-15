<template>
  <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
    <div class="container mx-auto px-4">
      <!-- 标题区域 -->
      <header class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="inline-block relative">产品优势</span>
        </h2>
        <p class="text-lg mt-6 max-w-2xl mx-auto">更高效、更丰富、更专业的互动直播解决方案</p>
      </header>

      <!-- 优势卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 优势卡片1 -->
        <div class="advantage-card group">
          <div class="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="card-title">互动性强</h3>
          <p class="card-text">60+互动玩法，丰富直播形式，增强用户参与感，提升互动率和留存时间。</p>
          <div class="card-features">
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">实时互动响应</span>
            </div>
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">多种游戏玩法</span>
            </div>
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">个性化定制</span>
            </div>
          </div>
          <a href="#" class="card-link group-hover:text-success">
            了解更多
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <!-- 优势卡片2 -->
        <div class="advantage-card group">
          <div class="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="card-title">稳定可靠</h3>
          <p class="card-text">
            高并发架构设计，可支持百万级同时在线用户，确保大型活动的流畅体验。
          </p>
          <div class="card-features">
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">99.9%可用性保障</span>
            </div>
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">全球CDN加速</span>
            </div>
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">自动容灾备份</span>
            </div>
          </div>
          <a href="#" class="card-link group-hover:text-success">
            了解更多
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <!-- 优势卡片3 -->
        <div class="advantage-card group">
          <div class="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>
          <h3 class="card-title">数据分析</h3>
          <p class="card-text">全方位数据追踪与分析，了解用户行为，优化活动效果，提高转化率。</p>
          <div class="card-features">
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">实时数据看板</span>
            </div>
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">用户行为分析</span>
            </div>
            <div class="feature">
              <span class="feature-icon bg-success/10 text-success">✓</span>
              <span class="feature-text">自定义报表导出</span>
            </div>
          </div>
          <a href="#" class="card-link group-hover:text-success">
            了解更多
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- CTA按钮 -->
      <div class="mt-16 text-center">
        <a
          href="#"
          class="btn btn-success text-white btn-lg px-10 shadow-lg hover:shadow-success/20 gap-2 hover:-translate-y-1 transition-transform"
        >
          免费体验
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
    </div>
  </section>
</template>

<style scoped>
.advantage-card {
  @apply bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden;
}

.advantage-card::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-1 bg-success transform origin-left scale-x-0 transition-transform duration-300;
}

.advantage-card:hover::before {
  @apply scale-x-100;
}

.card-icon {
  @apply mb-6 p-4 inline-block rounded-full bg-success/10;
}

.card-title {
  @apply text-xl font-bold mb-3;
}

.card-text {
  @apply text-base-content/80 mb-6;
}

.card-features {
  @apply space-y-3 mb-6;
}

.feature {
  @apply flex items-center;
}

.feature-icon {
  @apply w-6 h-6 flex items-center justify-center rounded-full mr-3 font-bold text-sm;
}

.feature-text {
  @apply text-sm;
}

.card-link {
  @apply inline-flex items-center font-medium transition-colors duration-300;
}
</style>
