<template>
  <div class="wrap-error">
    <img :src="Default" alt="default"/>
    <p class="text">페이지 찾을 수 없습니다.</p>
  </div>
</template>
<script>
import Default from '@/assets/img/default.jpg'

export default {
  name: 'ErrorPage',
  data: () => ({
    Default
  })
}
</script>
<style lang="scss">
  .wrap-error {
    .text {
      color: red;
    }
  }
</style>
