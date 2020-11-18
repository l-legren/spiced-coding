// let getNameAndCountry = ({ name, country }) => [name, country];

// function getNameAndCountry(object) {
//     var cityName = object.name;
//     var countryName = object.country;
//     return [cityName, countryName];
// }




// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };


const ber = {
    name: "Berlin",
    country: "Germany",
};

const col = {
    name: "Cologne",
    country: "Germany"
};


// getNameAndCountry(mad);

// console.log(getRelocatedCity(col, ber));

const {country} = ber;

console.log(country : "Germany");