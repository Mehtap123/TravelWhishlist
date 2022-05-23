const countries = [
    {id: 1, name: "Dominican Republic", alpha2Code : "DO", alpha3Code:"DOM"},
    {id: 2, name: "New Zealand", alpha2Code : "NZ", alpha3Code:"NZL"},
    {id: 3, name: "Thailand", alpha2Code : "TH", alpha3Code:"THA"},
    {id: 4, name: "United States of America", alpha2Code : "US", alpha3Code:"USA"},
    {id: 5, name: "Puerto Rico", alpha2Code : "PR", alpha3Code:"PRI"}
];

export const getAllcountries =(req, res) => {

        res.status(200).json(countries)
    
}

export const createNewCountry = (req, res) => {

    const newCountry = {id : req.body.id, name : req.body.name, alpha2Code : req.body.alpha2Code, alpha3Code : req.body.alpha3Code}
    countries.push(newCountry);
    res.status(201).json(countries);
}

export const getSingleCountry = (req, res) => {

    const {code} = req.params;

    let findCountry = countries.find((country) => country.alpha2Code == code);
    res.status(200).json(findCountry);
    
}

export const updateCountry = (req, res) => {

    const {code} = req.params;
    
    let findCountry = countries.find((country) => country.alpha2Code == code);
    if (findCountry){
        const updatedCountry = {id: req.body.id, name : req.body.name, alpha2Code : req.body.alpha2Code, alpha3Code : req.body.alpha3Code}
        res.json(updatedCountry);
    }else {
        res.status(404).send("There is no Country matching this Code")
    }
}

export const deleteCountry = (req, res) => {

    const {code} = req.params;

    let findCountry = countries.find((country) => country.alpha2Code == code);
    let index = countries.indexOf(findCountry)

    if(findCountry){
        countries.splice(index, 1)
        res.status(200).send('Country is deleted')
    }else{
        res.status(404).send('Country not found')
    }
    
}
    
