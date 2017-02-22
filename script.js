var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var showCountry = $('#showCountry');

$('#search').click(searchCountries);


function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}



function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var flagUrl = 'http://www.geonames.org/flags/x/';
		var flagUrlGif = '.gif';
		$('<h3>').text(item.name).appendTo(countriesList);
		var countryCode = item.alpha2Code.toLowerCase();
		$('#show-flag').prepend("<img src='" + flagUrl + countryCode + flagUrlGif + "' width='200px' height='124px' />");
		$('<img src="' + flagUrl + countryCode + flagUrlGif + '" width="200px" height="124px" />').appendTo(countriesList);
		$('<li>').text('Native Name: ' + item.altSpellings).appendTo(countriesList);
		$('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
		$('<li>').text('Country Code: ' + item.alpha3Code).appendTo(countriesList);
		$('<li>').text('Area: ' + item.area).appendTo(countriesList);
		$('<li>').text('Language: ' + item.languages).appendTo(countriesList);
		$('<li>').text('Region: ' + item.subregion).appendTo(countriesList);
		$('<li>').text('Population: ' + item.population).appendTo(countriesList);
		$('<li>').text('Currency: ' + item.currencies).appendTo(countriesList);
		$('<li>').text('Calling Code: ' + item.callingCodes).appendTo(countriesList);
		$('<li>').text('Domain: ' + item.topLevelDomain).appendTo(countriesList);
	});
}