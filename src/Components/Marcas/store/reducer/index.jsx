import SwiperActionTypes from "../action/action-types"

const initialState = {
    swiperInversor: null,
    swiperModulo: null
}

const swiperReducer = (state = initialState, action) => {
  switch (action.type) {
    case SwiperActionTypes.SET_SWIPER_INVERSOR:
      return {
        ...state, 
        swiperInversor: action.payload
      }
    case SwiperActionTypes.SET_SWIPER_MODULO:
      return {
        ...state, 
        swiperModulo: action.payload
      }
    default:
      return state
  }
}

export default swiperReducer
