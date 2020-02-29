
import { errorHandler } from '../plugins/error.js'
import { utils } from '../plugins/utils'
const appKey = process.env.APP_KEY

export const state = () => ({
  cityName: '',
  detailWeatherInformation: {}
})

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
          rain,
          clouds
        }
      } = await this.$axios.get(`/weather?id=${cityId}&appid=${appKey}`)

      commit('setDetailWeatherInformation', {
        weather,
        main,
        wind,
        rain,
        clouds
      })

      return errorHandler({
        weather,
        main,
        wind,
        rain,
        clouds
      })
    } catch (error) {
      return errorHandler(error)
    }
  }
}

export const mutations = {
  setDetailWeatherInformation: (state, payload) => {
    /**
     * 날씨 정보
     * @params payload {object}
    */
    state.detailWeatherInformation = payload
  },
  setCityName: (state, payload) => {
    state.cityName = payload
  }
}

export const getters = {
  getDetailWeatherInformation: state => state.detailWeatherInformation,
  getCityName: state => state.cityName
}
