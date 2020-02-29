<template>
  <div class="wrap-modal">
    <div class="dim">
      <div class="wrap-contents">
        <p>{{ guide }}</p>
        <span class="confirm" @click="closeModal">확인</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CommonModal',
  props: {
    guide: {
      type: String,
      default: '내용'
    }
  },
  methods: {
    ...mapMutations({
      closeModal: 'modal/closeModal'
    })
  }
}
</script>
<style lang="scss">
  .wrap-modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 25;
    overflow: auto;
    .dim {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(#000, 0.5);
      z-index: 1;
      .wrap-contents {
        position: relative;
        background: #fff;
        width: 300px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 4px;
        padding: 20px;
      }
      .confirm {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        color: #FCBA3D;
      }
    }
  }
</style>
