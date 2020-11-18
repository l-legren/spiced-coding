function logInfo(city) {
    const { name, country, numPeople } = city

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}


const mad = {
    name: "Madrid",
    country: "Spain",
    numPeople: "4,5 million"
};

logInfo(mad);
