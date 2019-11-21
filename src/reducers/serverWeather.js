import * as types from "../actionTypes"

const initialState = {
    serverWeatherToday: [],
    serverWeatherDays: []
}

export default (state=initialState, action) => {
    switch (action.type) {
        case types.GET_FROM_SERVER_WEATHER_TODAY: {
            return state
        }
        case types.GET_FROM_SERVER_WEATHER_TODAY_SUCCESS: {
            const {data} = action.payload
            return {
                serverWeatherToday: data
            }
        }
        case types.GET_FROM_SERVER_WEATHER_TODAY_FAIL: {
            return state
        }

        case types.GET_FROM_SERVER_WEATHER_FOR_FIVE_DAYS: {
            return state
        }
        case types.GET_FROM_SERVER_WEATHER_FOR_FIVE_DAYS_SUCCESS: {
            const {data} = action.payload
            return {
                serverWeatherDays: data
            }
        }
        case types.GET_FROM_SERVER_WEATHER_FOR_FIVE_DAYS_FAIL: {
            return state
        }

        default: return state
    }
}




