import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";
// https://exercisedb.p.rapidapi.com/exercises/bodyPart/back

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url: url,
      params: params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error.message);
  }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
