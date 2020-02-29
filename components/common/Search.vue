<template>
  <div class="wrap-search">
    <input
      type="text"
      class="input"
      placeholder="도시 이름을 검색해보세요 (예: london)"
      maxlength="50"
      v-model="onTypingTitle"
      @keypress.enter="setTitle"/>
    <div class="wrap-search-icon">
      <img
        :src="searchImg"
        alt="찾기"
        class="img"
        @click="setTitle"/>
    </div>
  </div>
</template>
<script>
import searchImg from './img/icon-detail-search.svg'

export default {
  name: 'CommonSearch',
  data: () => ({
    searchImg,
    onTypingTitle: ''
  }),
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  watch: {
    title (v) {
      this.onTypingTitle = v
    }
  },
  methods: {
    setTitle () {
      this.$emit('setTitle', this.onTypingTitle)
    }
  }
}
</script>
<style lang="scss">
  .wrap-search {
    width: 1000px;
    position: relative;
    .input {
      width: 100%;
      font-size: 14px;
      box-sizing: border-box;
      height: 50px;
      text-indent: 24px;
      border: 0;
      &::placeholder {
        color: #FCBA3D;
        font-weight: 900;
      }
      &:focus {
        outline: 0 none;
      }
    }
    .wrap-search-icon {
      cursor: pointer;
      position: absolute;
      top: 12px;
      right: 13px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
</style>
