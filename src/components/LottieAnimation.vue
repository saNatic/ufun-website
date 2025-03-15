<template>
  <div
    ref="container"
    class="lottie-container"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import lottie from 'lottie-web'

const props = defineProps({
  animationData: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 80,
  },
  height: {
    type: Number,
    default: 80,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  speed: {
    type: Number,
    default: 1,
  },
})

const container = ref(null)
let animationInstance = null

// 加载动画数据
const loadAnimation = async () => {
  if (!container.value) return

  try {
    // 处理动画数据
    let animData
    if (typeof props.animationData === 'string') {
      try {
        // 尝试直接通过fetch获取JSON文件
        const response = await fetch(props.animationData)
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }
        animData = await response.json()
      } catch (fetchError) {
        console.error('Fetch error:', fetchError)
        // 如果fetch失败，记录错误但不抛出，让组件继续尝试显示
      }
    } else {
      animData = props.animationData
    }

    // 如果没有获取到动画数据，则退出
    if (!animData) {
      console.error('No animation data available')
      return
    }

    // 销毁已有的动画实例
    if (animationInstance) {
      animationInstance.destroy()
    }

    // 创建新的动画实例
    animationInstance = lottie.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: props.autoplay,
      animationData: animData,
    })

    // 设置速度
    animationInstance.setSpeed(props.speed)
  } catch (error) {
    console.error('Failed to load Lottie animation:', error)
  }
}

// 监听props变化
watch(() => props.animationData, loadAnimation)
watch(
  () => props.speed,
  (newSpeed) => {
    if (animationInstance) {
      animationInstance.setSpeed(newSpeed)
    }
  },
)

// 初始化
onMounted(loadAnimation)

// 清理
onUnmounted(() => {
  if (animationInstance) {
    animationInstance.destroy()
    animationInstance = null
  }
})
</script>

<style scoped>
.lottie-container {
  display: inline-block;
  position: relative;
  overflow: visible;
}
</style>
