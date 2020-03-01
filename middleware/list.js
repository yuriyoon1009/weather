import citylists from '../data/citylist.json'

// middleware 는 렌더링될때 실행되는 js 입니다.
export default async function ({ store }) {
  try {
    await store.commit('setCityLists', citylists)
  } catch (error) {
    store.commit('modal/openModal', {
      props: {
        guide: 'city list를 불러오지 못 했습니다.'
      }
    })
  }
}
