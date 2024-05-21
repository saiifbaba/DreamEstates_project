import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':'fa9f2ab37amsh0fef40b88e33a77p1a703djsnb4407835e515',
    },
  });
    
  return data;
}