<template>
  <div class="common-box">
    <div class="wrap-img">
      <img
        class="img"
        :src="img[ 'src' ]"
        :alt="img[ 'alt' ]"/>
    </div>
    <div class="wrap-text">
      <div class="wrap-city-name">
        <p class="title">City&nbsp;-&nbsp;</p>
        <p class="value">{{ name }}</p>
      </div>
      <div class="wrap-city-country">
        <p class="title">Country&nbsp;-&nbsp;</p>
        <p class="value">{{ country }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonBox',
  props: {
    img: {
      type: Object,
      default: () => ({
        src: '',
        alt: ''
      })
    },
    name: {
      type: String,
      default: 'London'
    },
    country: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
  .common-box {
    cursor: pointer;
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    border-radius: 4px;
    background: #F8F8F8;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 2px 1px -1px rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.14);
    .wrap-img {
      width: 50%;
      .img {
        width: 140px;
      }
    }
    .wrap-text {
      width: 50%;
      .wrap-city-name, .wrap-city-country {
        display: flex;
        flex-direction: row;
        font-weight: 900;
        width: 100%;
        .value {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .wrap-city-name {
        font-size: 20px;
        color: #56BBD4;
      }
      .wrap-city-country {
        padding-top: 20px;
        font-size: 12px;
        color: #000;
      }
    }
  }
</style>
