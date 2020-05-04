async function getWeather(value) {
    url = "https://api.agify.io?name=" + value + "&country_id=US";
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
}

function guess() {
    getWeather(document.getElementById("name").value).then((jsonData) => {
        results = "<h3>Estimated age: " + jsonData.age + "</h3>";
        document.getElementById("results").innerHTML = results;
    }).catch((error) => {
        console.log("error: " + error);
    });
}
