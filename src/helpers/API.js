import axios from "axios";
import setCookie from "set-cookie-parser";

const URL = "http://www.localhost:5000/api/v1";
// const URL = "https://utteruser.herokuapp.com/api/v1";

export const Login = async (_data) => {
  try {
    const { data } = await axios.post(URL + "/users/login", _data);
    return data;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const Register = async (_data) => {
  try {
    const { data } = await axios.post(URL + "/users/register", _data);
    return data;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const createSurvery = async (data_) => {
  try {
    const { data } = await axios.post(URL + "/surveys/createsurvey", data_, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const mySurveys = async (data_) => {
  try {
    const { data } = await axios.post(URL + "/surveys/mysurveys", data_, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return { error: error.message };
  }
};


export const singleCampaign = async(data_)=>{
  try {
    const {data} = await axios.post(URL + "/surveys/singlesurvey", data_, {
      withCredentials: true
    })
    return data;
  } catch (error) {
    return (error: error.message);
  }
}