let queryParams = new URLSearchParams({
    APPID: weatherMapKey,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
});
// concat the query parameters onto the URL
fetch("http://api.openweathermap.org/data/2.5/onecall?" + queryParams, {
        method: "GET"
    }
).then(async function(response) {
    // use await to wait for the json data and then do something with it
    const data = await response.json();
    console.log('The entire response:', data);
    // console.log('Diving in - here is current information: ', data.current);
    // console.log('A step further - information for tomorrow: ', data.daily[1]);
 getWeather = getWeather(data);
return data
});
function getWeather(data) { // everything that is in the 5 day forecast will go here
     const dayOne = data.daily[0]
    console.log(dayOne);

    //  const dayTwo = data.daily[1]
    // console.log(dayTwo);
    // const dayThree = data.daily[2]
    // console.log(dayThree);
    // const dayFour = data.daily [3]
    // console.log(dayFour);
    // const dayFive = data.daily [4]
    // console.log(dayFive);


}
