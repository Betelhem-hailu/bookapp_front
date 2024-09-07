"use client";
import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:5138/api/Books";

const create = formData => {
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
return axios.post(API_URI, formData, {
withCredentials: true
}).then(response => {
return response.data;
}).catch(error => {
    if (error.response && error.response.status === 409) {
      // Handle conflict
    console.error('Error:', error.response.data.message);
    throw new Error(error.response.data.message);
} 
else if (error.response && error.response.status === 400) {
    console.error('Error:', "User input is invalid" );
    throw new Error("User input is invalid");
}
else {
    // Handle other errors
    console.error('Error:', error.message);
    throw new Error(error.response.data.message || 'An unexpected error occurred'); 
}
});
};

const getBooks = () => {
return axios.get(API_URI, {withCredentials: true}).then(response => {
    return response.data;
}).catch(error => {
    if (error.response && error.response.status === 404) {
        // Handle conflict
        console.error('Error:', error.response.data.message);
        throw new Error(error.response.data.message); 
        // Show a user-friendly message in the UI
    } else {
    // Handle other errors
    console.error('Error:', error.message);
    throw new Error(error.response.data.message || 'An unexpected error occurred'); 
    }
})
}

const getCategories = () => {
return axios.get(API_URI + '/categories').then(response => {
    return response.data;
}).catch(error => {
    if (error.response && error.response.status === 404) {
        // Handle conflict
        console.error('Error:', error.response.data.message);
        throw new Error(error.response.data.message); 
        // Show a user-friendly message in the UI
    }
})
}


const bookService = {
create,
getBooks,
getCategories
};

export default bookService;