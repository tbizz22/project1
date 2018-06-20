// Spotify Call
var URL = "https://api.spotify.com/v1/search";
var searchTerm = "summer";
var searchType = "playlist";
var market = "us";
var queryString = URL + "?q=" + searchTerm + "&type=" + searchType + "&market=" + market;
var queryURL = encodeURI(queryString);
console.log(queryURL);

function getResults() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}

authorizeSpotify();
// getResults();

function authorizeSpotify() {
    var URL = "https://accounts.spotify.com/authorize";
    var clientId = spotifyKey;
    var responseType = "token";
    var redirectURI = "http://localhost:3000/";

    var queryString = URL + "?client_id=" + clientId + "&redirect_uri=" + redirectURI + "&response_type=" + responseType;
    var queryURL = encodeURI(queryString);

    console.log(queryURL);
    console.log(window.location.href);
    var accessToken = window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
    console.log(accessToken);


    $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {
            getResults();
            console.log(response);
        }

    })
}

//sample call
setPlaylist("spotify:user:spotify:playlist:37i9dQZF1DX1gRalH1mWrP");

function setPlaylist(uri) {
    var url = "https://open.spotify.com/embed?uri="
    var frameSrc = url + uri
    // properly formated URI looks like this
    // uri=spotify:album:1DFixLWuPkv3KT3TnV35m3
    $("#spotifyPlayer").attr("src", frameSrc);
    console.log(frameSrc);
}


getLocation();


// Accuweather code

function getLocation() {
    var URL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    var searchTerm = "matawan";
    var key = accuweatherKey;
    var queryString = URL + "?apikey=" + key + "&q=" + searchTerm;
    var queryURL = encodeURI(queryString);
    console.log(queryURL);
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })

}
