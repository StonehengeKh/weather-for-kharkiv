import React from "react"
import {connect} from "react-redux"

import {getItemFromServerDays} from "../../actions/serverWeather";

class KharkivFiveDays extends React.Component {

    componentDidMount(){
        this.props.getItemFromServerDays()
    }

    render() {
        const weatherDatas = this.props.serverWeatherDays;
        if (!weatherDatas) return <div>Loading...</div>;
        console.log("weatherDatas", weatherDatas)
        return (
            <section>
                <h3>{weatherDatas.city.name}, {weatherDatas.city.country}</h3>
                <ul>
                    {weatherDatas.list.map((elem, index) => (
                        <li key={index}>
                            <p>{elem.dt_txt}</p>
                            <p>{elem.main.temp}°C</p>
                            <p>{elem.weather[0].main}</p> <img src='"http://openweathermap.org/img/w/" + {elem.weather[0].icon} + ".png"' alt={elem.weather[0].description} />
                            <p>{elem.wind.speed} m/s</p>
                        </li>))
                    }
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