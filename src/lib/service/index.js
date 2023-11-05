import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// API
const API_BASE_URL = "http://localhost:8000";

// GET
export const getProducts = () => {
    return new Promise((onSuccess, onFail) => {
        axios
            .get(`${API_BASE_URL}/api/products`)
            .then((response, error) => {
                if (!response || error) {
                    return onFail(`Response failure : ${error}`);
                }
                onSuccess(response);
            })
            .catch((err) => onFail(err));
    });
};

export const getUser = (body) => {
    return new Promise((onSuccess, onFail) => {
        console.log(body.profile) // realm return an object with user's profile details and email, we use the email to identify the user connected and retrieve profile details
        // check the object in the console to see properties
        axios
            .get(`${API_BASE_URL}/api/user/${body.profile.email}`, {
                params: {
                    email: body.profile.email
                }
            })
            .then((response, error) => {
                if (!response || error) {
                    return onFail(`Response failure : ${error}`);
                }
                onSuccess(response.data);
            })
            .catch((err) => onFail(err));
    });
};

// POST
export const addUser = (body) => {
    return new Promise((onSuccess, onFail) => {
        axios
            .post(`${API_BASE_URL}/api/users/add`, body)
            .then((response, error) => {
                if (!response || error) {
                    return onFail(`Response failure : ${error}`);
                }
                onSuccess(`user profile successfully created`);
            })
            .catch((err) => onFail(err));
    });
};

export const addOrder = (body) => {
    return new Promise((onSuccess, onFail) => {
        axios
            .post(`${API_BASE_URL}/api/orders/add`, body)
            .then((response, error) => {
                if (!response || error) {
                    return onFail(`Response failure : ${error}`);
                }
                onSuccess(`order successfully saved`);
            })
            .catch((err) => onFail(err));
    });
};

//stripe
export const processPayment = async (order) => {
    var stripePromise = loadStripe("pk_test_51O8oHIBa72leVPcBSZjm1c46fuDxOGei7DFWkv8rTAaIi0nrvlKKQsDXjxNyuxfDzOmYBbH1ExKXv9LhbW5DSqfP00H5FHDQ2i");
    const stripe = await stripePromise;
    axios.post(`${API_BASE_URL}/api/create-checkout-session`, order).then((response) => {
        const sessionID = response.data.id;
        return stripe.redirectToCheckout({ sessionId: sessionID });
    });
};
