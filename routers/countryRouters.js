import {Router} from "express";
import { createNewCountry, getAllcountries, getSingleCountry, updateCountry, deleteCountry } from "../controllers/countryController.js";

const countryRouters = Router();
countryRouters.route("/").get(getAllcountries).post(createNewCountry)

countryRouters.route("/:code").get(getSingleCountry).put(updateCountry).delete(deleteCountry)

export default countryRouters;