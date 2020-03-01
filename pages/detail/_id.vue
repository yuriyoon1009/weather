<template>
  <div class="wrap-city-detail" v-if="show">
    <div class="wrap-detail-content">
      <common-box :name="cityName">
        <div slot="content" class="content">
          <h2 class="title">{{ weatherTitleText }}</h2>
          <template v-for="items in info[ 'weather' ]">
            <template v-for="(item, title, key) in items">
              <span :key="key">
              {{ title }}&nbsp;:&nbsp;
              {{ item }}
              </span>
            </template>
          </template>
        </div>

        <div slot="content" class="content" v-if="computedDetailInfo">
          <template v-for="(object, index, key) in computedDetailInfo">
            <h2 :key="key" class="title">
              {{ $utils.changeUpperCase(titleTextWithoutWeather[ index ]) }}
            </h2>
            <template v-for="(value, title) in object">
              <span>
                {{ title }}&nbsp;:&nbsp;
                {{ value }}
              </span>
            </template>
          </template>
        </div>
      </common-box>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import CommonBox from '@/components/common/Box'

export default {
  name: 'DetailPage',
  data: () => ({
    show: false
  }),
  components: {
    CommonBox
  },
  computed: {
    ...mapGetters({
      info: 'getDetailWeatherInformation',
      cityName: 'getCityName'
    }),
    computedDetailInfo () {
      const main = this.handleWeatherInformation(this.info, 'main')
      const wind = this.handleWeatherInformation(this.info, 'wind')
      const clouds = this.handleWeatherInformation(this.info, 'clouds')

      return main.concat(wind, clouds)
    },
    titleTextWithoutWeather () {
      return Object.keys(this.info).filter(key => key !== 'weather')
    },
    weatherTitleText () {
      const weather = Object.keys(this.info).find(key => key === 'weather')
      return this.$utils.changeUpperCase(weather)
    }
  },
  methods: {
    ...mapActions({
      actionDetailCity: 'actionDetailCity'
    }),
    ...mapMutations({
      setCityName: 'setCityName'
    }),
    handleWeatherInformation (info, selectedKey) {
      return Object.keys(info)
              .filter(key => key === selectedKey)
              .map(key => info[ selectedKey ])
    }
  },
  async beforeMount () {
    const cityId = this.$route.params.id
    /** 도시 상세 정보 api call */
    const { data, status } = await this.actionDetailCity({ cityId })

    if (!this.getCityName && status) {
      this.show = true
      this.setCityName(data.name)
    }
  }
}
</script>
<style lang="scss">
  .wrap-city-detail {
    .wrap-detail-content {
      width: 1100px;
      margin: 30px auto;
      .content {
        width: 100%;
        .title {
          padding-top: 5px;
          font-weight: 900;
          color: #FCBA3D;
          font-size: 14px;
        }
      }
    }
  }
</style>
