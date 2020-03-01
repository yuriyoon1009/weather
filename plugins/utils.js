import Vue from 'vue'

export const utils = {
  /**
   * 대문자 변환
   * @param {String} val
  */
 changeUpperCase (val) {
   if (!val) return

   return val.charAt(0).toUpperCase() + val.slice(1)
 }
}

Vue.prototype.$utils = utils
