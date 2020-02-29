<template>
  <div class="wrap-layout">
    <div class="main">
      <nuxt />
    </div>
    <component :is="componentKey" v-bind="componentProps">
    </component>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import CommonModal from '@/components/common/Modal'

export default {
  name: 'default',
  components: {
    CommonModal
  },
  computed: {
    ...mapGetters({
      componentKey: 'modal/getComponentKey',
      componentProps: 'modal/getComponentProps'
    })
  }
}
</script>
<style>
</style>
