/**
 * 获取完整的资源URL
 * @param {string} path - 资源相对路径
 * @returns {string} - 完整URL
 */
export function getAssetUrl(path) {
  // 移除开头的斜杠以确保正确拼接
  const cleanPath = path.startsWith('/') ? path.substring(1) : path

  // 获取基础URL，默认为空字符串
  const baseUrl = import.meta.env.VITE_ASSET_URL || ''

  // 如果已经是完整URL则直接返回
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // 拼接并返回完整URL
  return `${baseUrl}/${cleanPath}`
}

/**
 * 获取视频URL
 * @param {string} filename - 视频文件名或路径
 * @returns {string} - 完整视频URL
 */
export function getVideoUrl(filename) {
  return getAssetUrl(`videos/${filename}`)
}

/**
 * 获取图片URL
 * @param {string} filename - 图片文件名或路径
 * @returns {string} - 完整图片URL
 */
export function getImageUrl(filename) {
  return getAssetUrl(`images/${filename}`)
}
