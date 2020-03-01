
import { errorHandler } from '../plugins/error.js'
import { utils } from '../plugins/utils'

const appKey = process.env.APP_KEY

// 상태값
export const state = () => ({
  cityName: '',
  cityLists: [],
  detailWeatherInformation: {}
})

// 비동기
export const actions = {
  // 검색
  async actionSearchCity ({ state, commit }) {
    try {
      const dataset = {
        cityName: utils.changeUpperCase(state.cityName)
      }

      const { data: { id }} = await this.$axios.get(`/weather?q=${dataset.cityName}&appid=${appKey}`)

      this.$router.push({
        path: `/detail/${id}`,
        params: { id }
      })

      return errorHandler({ id })
    } catch (error) {
      const errorData = errorHandler(error)

      commit('modal/openModal', {
        componentKey: 'CommonModal',
        props: {
          guide: errorData.errors.message
        }
      }, { root: true })

      return errorData
    }
  },
  // 상세
  async actionDetailCity ({ commit }, { cityId }) {
    try {
      const {
        data: {
          weather,
          main,
          wind,
          clouds,
          name
        }
      } = await this.$axios.get(`/weather?id=${cityId}&appid=${appKey}`)

      commit('setDetailWeatherInformation', {
        weather,
        main,
        wind,
        clouds,
        name
      })

      return errorHandler({
        weather,
        main,
        wind,
        clouds,
        name
      })
    } catch (error) {
      return errorHandler(error)
    }
  }
}

// 동기
export const mutations = {
  init: (state) => {
    state.detailWeatherInformation = {}
    state.cityName = ''
  },
  setDetailWeatherInformation: (state, payload) => {
    /**
     * 날씨 정보
     * @params payload {object}
    */
    state.detailWeatherInformation = payload
  },
  setCityName: (state, payload) => {
    state.cityName = payload
  },
  setCityLists: (state, payload) => {
    state.cityLists = payload
  }
}

// 객체 전달
export const getters = {
  getDetailWeatherInformation: state => state.detailWeatherInformation,
  getCityName: state => state.cityName,
  getCityLists: state => state.cityLists
}
