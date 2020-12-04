import axios from 'axios';
import { CHECK_CUSTOMER_EXIST,ADD_CUSTOMER, GET_CUSTOMERS, DELETE_CUSTOMER, CUSTOMERS_LOADING } from './types';

export const getCustomer = () => dispatch => {
    dispatch(setCustomersLoading());
    axios
    .get('/api/customers')
    .then(res => 
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data
        })
    )
}

export const checkCustomerExist = id => dispatch => {
    axios
    .get(`/api/customers/${id}`)
    .then(res => {
        dispatch({
            type: CHECK_CUSTOMER_EXIST
        })
        if(res.data.statusCode != 200) {
            return false;            
        }
        else
        {
            return true;
        }
    })
};

export const addCustomer = customer => dispatch => {
    axios
    .post('/api/addcustomer', customer)
    .then(res => 
        dispatch({
            type: ADD_CUSTOMER,
            payload: res.data
        })
    )
};

export const setCustomersLoading = () => {
    return {
        type: CUSTOMERS_LOADING
    }
}