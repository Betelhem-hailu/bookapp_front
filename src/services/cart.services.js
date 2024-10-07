import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:5138/api/cart";

const getCart = () => {
    return axios.get(API_URI, { withCredentials: true }).then(response => {
        return response.data;
    }).catch(error => {
        if (error.response && error.response.status === 404) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        } else {
            console.error('Error:', error.message);
            throw new Error(error.response.data.message || 'An unexpected error occurred');
        }
    })
}

const addToCart = (bookId) => {
    console.log(bookId);
    return axios.post(API_URI, { bookId }, { withCredentials: true }).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        if (error.response && error.response.status === 409) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        } else {
            console.error('Error:', error.message);
            throw new Error(error.response.data.message || 'An unexpected error occurred');
        }
    });
}

const removeFromCart = (bookId) => {
    return axios.delete(API_URI + `/${bookId}`, { withCredentials: true }).then(response => {
        return response.data;
    }).catch(error => {
        if (error.response && error.response.status === 404) {
            console.error('Error:', error.response.data.message);
            throw new Error(error.response.data.message);
        } else {
            console.error('Error:', error.message);
            throw new Error(error.response.data.message || 'An unexpected error occurred');
        }
    });
}

const cartService = {
    getCart,
    addToCart,
    removeFromCart
};

export default cartService;