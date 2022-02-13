import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dateFormat from "dateformat";
import assetMapping from "../Assets/assetMapping.json";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../elements/Card/Card";
import CardForecast from "../components/CardForecast/CardForecast";
import AirDetails from "../components/AirDetails/AirDetails";
import Forecast from "../components/Forecast/Forecast";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ErrorNotice from "../components/ErrorNotice/ErrorNotice";
import Preview from "../components/Preview/Preview";
import Blank from "../components/Blank/Blank";

import Classes from "./App.module.css";
import CardSlim from "../elements/CardSlim/CardSlim";

class App extends Component {
  state = {
    searchBarInput: "",
    airQualityDetails: {
      aqi: "",
    },
    airQualityDescription: "default",
    aqiForecastDescriptionOne: "",
    aqiForecastDescriptionTwo: "",
    aqiForecastDescriptionThree: "",
    airQualityForecast: {
      dateOne: "",
      aqiOne: "",
      dateTwo: "",
      aqiTwo: "",
      dateThree: "",
      aqiThree: "",
    },
    loading: false,
    error: false,
  };

  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value,
    });

    console.log(this.state.searchBarInput);
  };

  settingAqiDetailsOne = () => {};

  // Reset state after clicking on Logo or Try Again button
  tryAgainHandler = () => {
    this.setState({
      searchBarInput: "",
      airQualityDetails: {
        aqi: "",
      },
      airQualityDescription: "default",
      aqiForecastDescriptionOne: "",
      aqiForecastDescriptionTwo: "",
      aqiForecastDescriptionThree: "",
      airQualityForecast: {
        dateOne: "",
        aqiOne: "",
        dateTwo: "",
        aqiTwo: "",
        dateThree: "",
        aqiThree: "",
      },
      loading: false,
      error: false,
    });

    console.log("OPSPOS");
  };

  setAirQuality = () => {
    const cityUntrimmed = this.state.searchBarInput;
    const city = cityUntrimmed.replace(/\s+/g, "");

    const API_KEY = "f6f2ceede8bf7b2c40ee8295e7bbda15286f21e9";
    const API_URL = "https://api.waqi.info/feed/";
    const URL = API_URL + `${city}` + `/?token=` + `${API_KEY}`;

    console.log(URL);

    const today = new Date();
    const tomorrow = new Date(today);
    const dayAfterTomorrow = new Date(today);
    const dayAfterAfterTomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);
    dayAfterTomorrow.setDate(tomorrow.getDate() + 1);
    dayAfterAfterTomorrow.setDate(tomorrow.getDate() + 2);

    const tomorrowFormatted = dateFormat(tomorrow, "mmm dd");
    const dayAfterTomorrowFormatted = dateFormat(dayAfterTomorrow, "mmm dd");
    const dayAfterAfterTomorrowFormatted = dateFormat(
      dayAfterAfterTomorrow,
      "mmm dd"
    );

    this.setState(
      {
        airQualityDetails: {},
        loading: true,
        error: false,
      },
      () => {
        fetch(URL)
          .then((res) => res.json())
          .then((data) => {
            if (data.status === "ok") {
              this.setState({
                airQualityDetails: {
                  aqi: data.data.aqi,
                },
                airQualityForecast: {
                  aqiOne: data.data.forecast.daily.pm25[0].avg,
                  aqiTwo: data.data.forecast.daily.pm25[1].avg,
                  aqiThree: data.data.forecast.daily.pm25[2].avg,
                  dateOne: tomorrowFormatted,
                  dateTwo: dayAfterTomorrowFormatted,
                  dateThree: dayAfterAfterTomorrowFormatted,
                },

                loading: false,
              });
            } else {
              this.setState({
                searchBarInput: "",
                airQualityDetails: {
                  aqi: "0",
                },
                airQualityDescription: "default",
                aqiForecastDescriptionOne: "",
                aqiForecastDescriptionTwo: "",
                aqiForecastDescriptionThree: "",
                airQualityForecast: {
                  dateOne: "",
                  aqiOne: "",
                  dateTwo: "",
                  aqiTwo: "",
                  dateThree: "",
                  aqiThree: "",
                },
                loading: false,
                error: true,
              });
            }
          })
          .then(() => {
            if (
              this.state.airQualityDetails.aqi > 0 &&
              this.state.airQualityDetails.aqi <= 50
            ) {
              this.setState({ airQualityDescription: "Good" });
            } else if (
              this.state.airQualityDetails.aqi > 50 &&
              this.state.airQualityDetails.aqi <= 100
            ) {
              this.setState({
                airQualityDescription: "Moderate",
              });
            } else if (
              this.state.airQualityDetails.aqi > 100 &&
              this.state.airQualityDetails.aqi <= 150
            ) {
              this.setState({
                airQualityDetails: {
                  description: "Unhealthy For Sensitive Groups",
                },
              });
            } else if (
              this.state.airQualityDetails.aqi > 150 &&
              this.state.airQualityDetails.aqi <= 200
            ) {
              this.setState({
                airQualityDescription: "Unhealthy",
              });
            } else if (
              this.state.airQualityDetails.aqi > 200 &&
              this.state.airQualityDetails.aqi <= 300
            ) {
              this.setState({
                airQualityDescription: "Very Unhealthy",
              });
            } else if (
              this.state.airQualityDetails.aqi > 300 &&
              this.state.airQualityDetails.aqi <= 500
            ) {
              this.setState({
                airQualityDescription: "Hazardous",
              });
            }
            console.log(this.state.airQualityDetails.aqi);
            console.log(this.state.airQualityDescription);
          })
          .then(() => {
            if (
              this.state.airQualityForecast.aqiOne > 0 &&
              this.state.airQualityForecast.aqiOne <= 50
            ) {
              this.setState({ aqiForecastDescriptionOne: "Good" });
            } else if (
              this.state.airQualityForecast.aqiOne > 50 &&
              this.state.airQualityForecast.aqiOne <= 100
            ) {
              this.setState({
                aqiForecastDescriptionOne: "Moderate",
              });
            } else if (
              this.state.airQualityForecast.aqiOne > 100 &&
              this.state.airQualityForecast.aqiOne <= 150
            ) {
              this.setState({
                airQualityDetails: {
                  description: "Unhealthy For Sensitive Groups",
                },
              });
            } else if (
              this.state.airQualityForecast.aqiOne > 150 &&
              this.state.airQualityForecast.aqiOne <= 200
            ) {
              this.setState({
                aqiForecastDescriptionOne: "Unhealthy",
              });
            } else if (
              this.state.airQualityForecast.aqiOne > 200 &&
              this.state.airQualityForecast.aqiOne <= 300
            ) {
              this.setState({
                aqiForecastDescriptionOne: "Very Unhealthy",
              });
            } else if (
              this.state.airQualityForecast.aqiOne > 300 &&
              this.state.airQualityForecast.aqiOne <= 500
            ) {
              this.setState({
                aqiForecastDescriptionOne: "Hazardous",
              });
            }
          })
          .then(() => {
            if (
              this.state.airQualityForecast.aqiTwo > 0 &&
              this.state.airQualityForecast.aqiTwo <= 50
            ) {
              this.setState({ aqiForecastDescriptionTwo: "Good" });
            } else if (
              this.state.airQualityForecast.aqiTwo > 50 &&
              this.state.airQualityForecast.aqiTwo <= 100
            ) {
              this.setState({
                aqiForecastDescriptionTwo: "Moderate",
              });
            } else if (
              this.state.airQualityForecast.aqiTwo > 100 &&
              this.state.airQualityForecast.aqiTwo <= 150
            ) {
              this.setState({
                aqiForecastDescriptionTwo: "Unhealthy For Sensitive Groups",
              });
            } else if (
              this.state.airQualityForecast.aqiTwo > 150 &&
              this.state.airQualityForecast.aqiTwo <= 200
            ) {
              this.setState({
                aqiForecastDescriptionTwo: "Unhealthy",
              });
            } else if (
              this.state.airQualityForecast.aqiTwo > 200 &&
              this.state.airQualityForecast.aqiTwo <= 300
            ) {
              this.setState({
                aqiForecastDescriptionTwo: "Very Unhealthy",
              });
            } else if (
              this.state.airQualityForecast.aqiTwo > 300 &&
              this.state.airQualityForecast.aqiTwo <= 500
            ) {
              this.setState({
                aqiForecastDescriptionTwo: "Hazardous",
              });
            }
          })
          .then(() => {
            if (
              this.state.airQualityForecast.aqiThree > 0 &&
              this.state.airQualityForecast.aqiThree <= 50
            ) {
              this.setState({ aqiForecastDescriptionThree: "Good" });
            } else if (
              this.state.airQualityForecast.aqiThree > 50 &&
              this.state.airQualityForecast.aqiThree <= 100
            ) {
              this.setState({
                aqiForecastDescriptionThree: "Moderate",
              });
            } else if (
              this.state.airQualityForecast.aqiThree > 100 &&
              this.state.airQualityForecast.aqiThree <= 150
            ) {
              this.setState({
                aqiForecastDescriptionThree: "Unhealthy For Sensitive Groups",
              });
            } else if (
              this.state.airQualityForecast.aqiThree > 150 &&
              this.state.airQualityForecast.aqiThree <= 200
            ) {
              this.setState({
                aqiForecastDescriptionThree: "Unhealthy",
              });
            } else if (
              this.state.airQualityForecast.aqiThree > 200 &&
              this.state.airQualityForecast.aqiThree <= 300
            ) {
              this.setState({
                aqiForecastDescriptionThree: "Very Unhealthy",
              });
            } else if (
              this.state.airQualityForecast.aqiThree > 300 &&
              this.state.airQualityForecast.aqiThree <= 500
            ) {
              this.setState({
                aqiForecastDescriptionThree: "Hazardous",
              });
            }
            console.log(this.state.aqiForecastDescriptionThree);
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              loading: false,
              error: true,
            });
          });
      }
    );
  };

  render() {
    let cardContent = <Preview />;
    if (this.state.loading) {
      cardContent = <Preview />;
    } else if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler} />;
    } else if (this.state.airQualityDetails.aqi !== "") {
      // Display weather information if temperature and description exists
      cardContent = (
        <AirDetails
          type={this.state.airQualityDescription}
          aqi={this.state.airQualityDetails.aqi}
          description={this.state.airQualityDescription}
        />
      );
    }

    let forecastContentNew = <Blank></Blank>;
    if (this.state.loading) {
      forecastContentNew = <Blank />;
    } else if (this.state.airQualityForecast.aqiOne === "") {
      forecastContentNew = <Blank />;
    } else if (this.state.airQualityForecast.aqiOne !== "") {
      forecastContentNew = (
        <>
          <CardSlim
            color={
              assetMapping.colors[
                this.state.aqiForecastDescriptionOne == ""
                  ? "default"
                  : this.state.aqiForecastDescriptionOne
              ]
            }
          >
            <CardForecast
              date={this.state.airQualityForecast.dateOne}
              aqi={this.state.airQualityForecast.aqiOne}
            ></CardForecast>
          </CardSlim>
          <CardSlim
            color={
              assetMapping.colors[
                this.state.aqiForecastDescriptionTwo == ""
                  ? "default"
                  : this.state.aqiForecastDescriptionTwo
              ]
            }
          >
            <CardForecast
              date={this.state.airQualityForecast.dateTwo}
              aqi={this.state.airQualityForecast.aqiTwo}
            ></CardForecast>
          </CardSlim>
          <CardSlim
            color={
              assetMapping.colors[
                this.state.aqiForecastDescriptionThree == ""
                  ? "default"
                  : this.state.aqiForecastDescriptionThree
              ]
            }
          >
            <CardForecast
              date={this.state.airQualityForecast.dateThree}
              aqi={this.state.airQualityForecast.aqiThree}
            ></CardForecast>
          </CardSlim>
        </>
      );
    }
    let sectionHeader =
      this.state.airQualityForecast.aqiOne == "" ? (
        <Blank></Blank>
      ) : (
        <SectionHeader></SectionHeader>
      );

    return (
      <>
        <div>
          <Header
            color={
              assetMapping.colors[
                this.state.airQualityDescription == ""
                  ? "default"
                  : this.state.airQualityDescription
              ]
            }
            onClickHandler={this.tryAgainHandler}
          />
          <SearchBar
            value={this.state.searchBarInput}
            onChangeHandler={this.searchBarHandler}
            onClickHandler={this.setAirQuality}
            error={this.state.error}
          />
          <Card>{cardContent}</Card>
          <Blank>{sectionHeader}</Blank>
          <Blank>{forecastContentNew}</Blank>
        </div>
      </>
    );
  }
}

export default App;
