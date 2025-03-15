<template>
  <div class="min-h-screen flex flex-col">
    <!--  -->
    <NavBar />
    <main class="flex-1">
      <!--banner组件-->
      <Banner :slides="slidesData" />
      <!-- 产品视频案例 -->
      <ProductVideo />
      <!-- 适用场景展示 -->
      <SceneShowcase />
      <!-- 特色服务区块 -->
      <Advantages />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import Banner from '@/components/layout/Banner.vue'
import ProductVideo from '@/components/Home/ProductVideo.vue'
import SceneShowcase from '@/components/Home/SceneShowcase.vue'
import Advantages from '@/components/Home/Advantages.vue'
// 定义 slides 数据
const slidesData = [
  {
    image: 'https://picsum.photos/1920/700?1',
    title: '夏季新品上市1111',
    description: '探索最新夏季系列，享受清凉一夏的时尚体验',
    buttonText: '立即选购',
  },
  {
    image: 'https://picsum.photos/1920/700?2',
    title: '限时优惠活动2222',
    description: '全场商品最高5折优惠，数量有限先到先得',
    buttonText: '查看优惠',
  },
  {
    image: 'https://picsum.photos/1920/700?3',
    title: '会员专属特权3333',
    description: '注册会员享受专属折扣和优先购买权',
    buttonText: '加入会员',
  },
  {
    image: 'https://picsum.photos/1920/700?4',
    title: '会员专属特权3333',
    description: '注册会员享受专属折扣和优先购买权',
    buttonText: '加入会员',
  },
]
</script>
