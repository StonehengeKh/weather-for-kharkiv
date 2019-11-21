import React from "react"
import {connect} from "react-redux"

import {getItemFromServerToday} from "../../actions/serverWeather"

class KharkivToday extends React.Component {

    componentDidMount(){
        this.props.getItemFromServerToday()
    }

    render() {
        const weatherData = this.props.serverWeatherToday;
        if (!weatherData) return <div>Loading...</div>;
        console.log("weatherData", weatherData);
        return (
            <section>
                <h3>
                    {weatherData.weather[0].main} in {weatherData.name}, {weatherData.sys.country}
                    <img src={weatherData.weather[0].icon} alt={weatherData.weather[0].description} />
                </h3>
                <p>Current: {weatherData.main.temp}°C</p>
                <p>High: {weatherData.main.temp_max}°C</p>
                <p>Low: {weatherData.main.temp_min}°C</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
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