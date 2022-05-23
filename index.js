import express from "express";
import countryRouters from "./routers/countryRouters.js";

const app = express();
const port = process.env.PORT || 5001;


app.use(express.json());
app.use("/api/countries", countryRouters); 


app.get("/", (req, res) => {
    res.send("<p>Ahoy!</p>")
});




app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
});