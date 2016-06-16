var appID = "d9467c6b6c156ba48c49e12841bd9416";


if ("geoLocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + "," + position.coords.longitude);
    });
} else {
    loadWeather("Alpharetta", 'GA', "");
}

$(document).ready(function () {
    setInterval(getWeather, 10000);
});

function loadWeather(location, woeid) {
    $.simpleWeather(
    {
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function (weather) {
            city = weather.city;
            temp = weather.temp + '&deg;';
            wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
            wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
            humidity = weather.humidity + '%';
            $(".location").text(city);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },

        error: function (error) {
            $(".error").html('<p>' + error + '</p>');
        }
    });
}