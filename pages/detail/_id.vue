<template>
  <div class="wrap-city-detail">
    <pre>{{ info }}</pre>
    <div>
      <!--box-->
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'DetailPage',
  computed: {
    ...mapGetters({
      info: 'getDetailWeatherInformation'
    })
  },
  methods: {
    ...mapActions({
      actionDetailCity: 'actionDetailCity'
    })
  },
  async beforeMount () {
    const cityId = this.$route.params.id
    /** 도시 상세 정보 api call */
    await this.actionDetailCity({ cityId })
  }
}
</script>
<style>
</style>
