import SwiperActionTypes from "./action-types"

export const setSwiperInversor = (payload) => ({
    type: SwiperActionTypes.SET_SWIPER_INVERSOR,
    payload
})

export const setBoardSelectedToFunil = (payload) => ({
    type: SwiperActionTypes.SET_SWIPER_MODULO,
    payload
})