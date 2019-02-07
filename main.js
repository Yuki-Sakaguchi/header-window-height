/**
 * ヘッダーの大きさを画面の高さに揃える
 */
const elHeader = document.querySelector('.header')
let defaultWidth // SPの場合、初期表示と画面最上部の時にはバーが出るのでバー有りの時の高さを保存

// 高さをセットする
const setHeight = () => {
  elHeader.style.height = window.innerHeight + 'px'
  defaultWidth = window.innerWidth
}

// 横幅が変わった時のリサイズのみ高さを書き換える
const resizeHandle = () => {
  if (defaultWidth !== window.innerWidth) {
    setHeight()
  }
}

// 初期表示
setHeight()

// リサイズ
window.addEventListener('resize', resizeHandle)

// イベントの回数を抑える
// let resizeTimer = 0
// window.addEventListener('resize', () => {
//     if (resizeTimer) clearTimeout(resizeTimer)
//     resizeTimer = setTimeout(() => resizeHandle(), 500)
// })