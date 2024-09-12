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
const getBookbyId = (id) => {
    return axios.get(API_URI + `/${id}`).then(response => {
        return response.data;
    }).catch(error => {
        if(error.response && error.response.status === 404) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        } else {
            console.error('Error:', error.message);
            throw new Error(error.response.data.message || 'An unexpected error occurred');
        }
    })
}

const getBookByCategory = (categories) => {
    const queryString = categories?.map(cat => `categories=${encodeURIComponent(cat)}`).join('&');
    const url = API_URI + `/category?${queryString}`;

    return axios.get(url).then(response => {
        return response.data;
      }).catch(error => {
        if(error.response && error.response.status === 404) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        } else {
            console.error('Error:', error.message);
            throw new Error(error.response.data.message || 'An unexpected error occurred');
        }
    })
}

const getCategories = () => {
return axios.get(API_URI + '/categories').then(response => {
    console.log(response);
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

const updateBook = (id, formData) => {
    return axios.put(API_URI + `/${id}`, formData).then(response => {
        return response.data;
    }).catch(error => {
        if (error.response && error.response.status === 404) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        }
    })
}

const deleteBook = (id) => {
    return axios.delete(API_URI + `/${id}`).then(response => {
        return response.data;
    }).catch(error => {
        if (error.response && error.response.status === 404) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        }
        else if (error.response && error.response.status === 401) {
            // console.error('Error:', "Unauthorized access please login first");
            throw new Error("Unauthorized access please login first");
        }
    })
}

const searchBook = (searchTerm) =>{
    return axios.get(API_URI + '/search', {
        params: { searchTerm }
      }).then(response => {
        return response.data;
      }).catch(error => {
        if(error.response && error.response.status === 404) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        } else {
            console.error('Error:', error.message);
            throw new Error(error.response.data.message || 'An unexpected error occurred');
        }
    })
}

const bookService = {
create,
getBooks,
getBookbyId,
getBookByCategory,
getCategories,
updateBook,
deleteBook,
searchBook
};

export default bookService;