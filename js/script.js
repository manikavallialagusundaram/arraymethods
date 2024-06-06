//Get all the countries from Asia continent /region using Filter method 
var request = new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var Data = JSON.parse(this.response);
    console.log(Data);
    var asianCountries = Data.filter((country) => country.region === "Asia");
    console.log(asianCountries);
    //Get all the countries with a population of less than 2 lakhs using Filter method
    var population = Data.filter((country) => country.population<=200000);
    console.log(population);
    //Print the following details name, capital, flag, using forEach method
   Data.forEach(element => {
    console.log(`name: ${element.name.common},capital: ${element.capital},flag: ${element.flag}`)
   });
   //Print the total population of countries using reduce method
   var totalPopulation = Data.reduce((acc,ele)=>acc+ele.population,0);
   console.log(totalPopulation);
   //Print the country that uses US dollars as currency. 
   Data.forEach(country => {
    console.log(country.name.common);
   });
}


