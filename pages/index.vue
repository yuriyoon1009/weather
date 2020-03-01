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
    <client-only>
      <div class="wrap-lists">
        <pre>
          {{ cityLists }}
        </pre>
      </div>
    </client-only>
  </div>
</template>
<script>
import CommonSearch from '@/components/common/Search'

import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  middleware: 'list',
  components: {
    CommonSearch
  },
  computed: {
    ...mapGetters({
      cityName: 'getCityName',
      cityLists: 'getCityLists'
    })
  },
  methods: {
    ...mapActions({
      actionSearchCity: 'actionSearchCity',
      actionListCity: 'actionListCity'
    }),
    ...mapMutations({
      init: 'init',
      setCityName: 'setCityName',
    }),
    async search (cityName) {
      this.setCityName(cityName)
      // 검색 api call
      await this.actionSearchCity()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      if (from.name === 'detail-id') {
        vm.$store.commit('init')
      }
    })
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
