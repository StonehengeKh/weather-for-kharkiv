import axios from "axios"

import * as types from "../actionTypes"

const getRequestToday = payload => {
    return {
        type: types.GET_FROM_SERVER_WEATHER_TODAY,
        payload
    }
}

const getRequestTodaySuccess = payload => {
    return {
        type: types.GET_FROM_SERVER_WEATHER_TODAY_SUCCESS,
        payload
    }
}

const getRequestTodayFail = payload => {
    return {
        type: types.GET_FROM_SERVER_WEATHER_TODAY_FAIL,
        payload
    }
}

export const getItemFromServerToday = payload => async dispatch => {
    try {
        dispatch(getRequestToday());
        const data = await axios ({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&units=metric&mode=json&appid=c93dd3b0d866284eada1abec31cafbe4"
        })
        dispatch(getRequestTodaySuccess(data))
    } catch(error) {
        dispatch(getRequestTodayFail(error))
    }
}



const getRequestDays = payload => {
    return {
        type: types.GET_FROM_SERVER_WEATHER_FOR_FIVE_DAYS,
        payload
    }
}

const getRequestDaysSuccess = payload => {
    return {
        type: types.GET_FROM_SERVER_WEATHER_FOR_FIVE_DAYS_SUCCESS,
        payload
    }
}

const getRequestDaysFail = payload => {
    return {
        type: types.GET_FROM_SERVER_WEATHER_FOR_FIVE_DAYS_FAIL,
        payload
    }
}

export const getItemFromServerDays = payload => async dispatch => {
    try {
        dispatch(getRequestDays());
        const data = await axios ({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/forecast?q=Kharkiv,ua&units=metric&mode=json&appid=c93dd3b0d866284eada1abec31cafbe4"
        })
        dispatch(getRequestDaysSuccess(data))
    } catch(error) {
        dispatch(getRequestDaysFail(error))
    }
}