import React from "react"
import {connect} from "react-redux"

import {getItemFromServerToday} from "../../actions/serverWeather"
import "./kharkivToday.css"

class KharkivToday extends React.Component {

    componentDidMount(){
        this.props.getItemFromServerToday()
    }

    render() {
        const weatherData = this.props.serverWeatherToday;
        if (!weatherData) return <div>Loading...</div>;
        console.log("weatherData", weatherData);
        return (
            <section className="day-block">
                {weatherData.weather ? (<h3>
                    {weatherData.weather[0].main} in {weatherData.name}, {weatherData.sys.country} today
                </h3>) : null}
                {weatherData.main ? (<p>Current: {weatherData.main.temp}°C</p>) : null}
                {weatherData.main ? (<p>High: {weatherData.main.temp_max}°C</p>) : null}
                {weatherData.main ? (<p>Low: {weatherData.main.temp_min}°C</p>) : null}
                {weatherData.wind ? (<p>Wind Speed: {weatherData.wind.speed} m/s</p>) : null}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        serverWeatherToday: state.serverWeather.serverWeatherToday
    }
}

export default connect(mapStateToProps, {getItemFromServerToday})(KharkivToday)