<template>
  <div class="wrap-main">
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
        <template v-if="cityLists.length">
          <template v-for="({ name, country }, key) in computedCityLists">
            <div class="wrap-box-list" :key="key">
              <common-box
                :img="imgLists[ key ]"
                :name="name"
                :country="country">
              </common-box>
            </div>
          </template>
        </template>
      </div>
    </client-only>
    <div @click="onClickMore">더보기 {{ pageText }}</div>
  </div>
</template>
<script>
import CommonSearch from '@/components/common/Search'
import CommonBox from '@/components/common/Box'
// img
import Pen0 from '@/assets/img/pen1.jpg'
import Pen1 from '@/assets/img/pen2.jpg'
import Pen2 from '@/assets/img/pen3.jpg'
import Pen3 from '@/assets/img/pen4.jpg'
import Pen4 from '@/assets/img/pen5.jpg'
import Pen5 from '@/assets/img/pen6.png'
import Default from '@/assets/img/default.jpg'

import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  middleware: 'list',
  components: {
    CommonSearch,
    CommonBox
  },
  data: () => ({
    imgLists: [],
    currentPage: 0
  }),
  beforeMount () {
    this.imgLists = this.createArray(this.imgLists)
  },
  computed: {
    ...mapGetters({
      cityName: 'getCityName',
      cityLists: 'getCityLists'
    }),
    pageText () {
      return `${this.currentPage + 1}`
    },
    computedCityLists () {
      const endIndex = this.currentPage ? (this.currentPage + 1) * 6 : 6

      if (this.currentPage) {
        this.imgLists = this.createArray(this.imgLists)
      }

      return this.cityLists.slice(0, endIndex)
    }
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
    onClickMore () {
      this.currentPage = this.currentPage + 1
    },
    changeSrc (img) {
      switch (img) {
        case 'pen1': {
          return Pen1
        }
        case 'pen2': {
          return Pen2
        }
        case 'pen3': {
          return Pen3
        }
        case 'pen4': {
          return Pen4
        }
        case 'pen5': {
          return Pen5
        }
        case 'pen6': {
          return Pen6
        }
        default: {
          return Default
        }
      }
    },
    createArray (imgLists) {
      const _imgLists = Array.from({ length: 6 }, (value, index) => {
        const penguin = `pen${index}`

        return {
          src: this.changeSrc(penguin),
          alt: penguin
        }
      })

      return imgLists.concat(_imgLists)
    },
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
    .wrap-header {
      background: #FCBA3D;
      padding: 32px 0;
      .wrap-top-search {
        display: flex;
        justify-content: center;
      }
    }
    .wrap-box-list {
      width: 33.33%;
    }
  }
</style>
