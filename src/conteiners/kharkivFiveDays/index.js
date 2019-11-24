import React from "react"
import {connect} from "react-redux"

import {getItemFromServerDays} from "../../actions/serverWeather";
import "./kharkivFiveDays.css"

class KharkivFiveDays extends React.Component {

    componentDidMount(){
        this.props.getItemFromServerDays()
    }

    render() {
        const weatherDatas = this.props.serverWeatherDays;
        if (!weatherDatas) return <div>Loading...</div>;
        console.log("weatherDatas", weatherDatas)
        return (
            <section className="days-block">
                {weatherDatas.city ? (<h3>{weatherDatas.city.name}, {weatherDatas.city.country}</h3>) : null }
                <ul>
                    {weatherDatas.list ? (weatherDatas.list.map((elem, index) => (
                        <li key={index}>
                            {elem ? (<p>Date & time: {elem.dt_txt}</p>) : null}
                            {elem ? (<p>Temperature: {elem.main.temp}°C</p>) : null}
                            {elem ? (<p>Sky: {elem.weather[0].main}</p>) : null }
                            {elem ? (<p>Wind Speed: {elem.wind.speed} m/s</p>) : null}
                        </li>))
                    ) : null}
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        serverWeatherDays: state.serverWeather.serverWeatherDays
    }
}

export default connect(mapStateToProps, {getItemFromServerDays})(KharkivFiveDays)