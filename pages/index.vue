<template>
  <div class="wrap-main">
    <p class="none">도시 이름이 나오는 리스트 화면 구성</p>
    <div class="wrap-header">
      <div class="wrap-top-search">
        <common-search
          @setTitle="search"
          :title="cityName"
        ></common-search>
      </div>
    </div>
    <div class="wrap-lists">
    </div>
  </div>
</template>
<script>
import CommonSearch from '@/components/common/Search'

import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    CommonSearch
  },
  // test
  /* async mounted () {
    await this.actionSearchCityWeather()
  }, */
  mounted () {
    // dataset
  },
  computed: {
    ...mapGetters({
      cityName: 'getCityName'
    })
  },
  methods: {
    ...mapActions({
      actionSearchCity: 'actionSearchCity'
    }),
    ...mapMutations({
      setCityName: 'setCityName'
    }),
    async search (cityName) {
      this.setCityName(cityName)

      const { data, status, errors } = await this.actionSearchCity()

      if (status) {
       this.goToDetail(data.id)
      } else {
        alert(errors.message)
      }
    },
    goToDetail (id) {
      this.$router.push({
        path: `/detail/${id}`,
        params: { id }
      })
    }
  }
}
</script>
<style lang="scss">
  .wrap-main {
    .none {
      display: none;
    }
    .wrap-header {
      background: #FCBA3D;
      padding: 32px 0;
      .wrap-top-search {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
