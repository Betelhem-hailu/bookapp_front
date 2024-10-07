import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:5138/api/Auth";
const register = formData => {
  return axios.post(API_URI + "/register", formData, {
    withCredentials: true
  }).then(response => {
    return response.data;
  }).catch(error => {
    if (error.response && error.response.status === 409) {
      // Handle conflict
      console.error('Error:', error.response.data.message);
      throw new Error(error.response.data.message);
    } else {
      // Handle other errors
      console.error('Error:', error.message);
      throw new Error(error.response.data.message || 'An unexpected error occurred'); 
    }
  });
};


const login = async (email, password) => {
  return axios
    .post(
      API_URI + "/login",
      { email, password },
      { withCredentials: true }
    )
    .then(response => {
      return response.data;
    });
};

const authService = {
  register,
  login,
};

export default authService;