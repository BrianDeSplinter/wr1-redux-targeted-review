import axios from 'axios'

const initialState = {
    user: null,
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'
const LOG_OUT = 'LOG_OUT'
const GET_USER = 'GET_USER'

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: LOGIN_USER,
        payload: initialState
    }
}

export function getUser(){
    const user = axios.get('/auth/user')
    
    return {
        type: GET_USER,
        payload: user
    }
}

export default function (state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            return {...StaticRange, user: action.payload, isLoggedIn: true}
        case LOG_OUT:
            return initialState
        case GET_USER + '_PENDING':
            return state
        case GET_USER + '_FULFILLED':
            return {...state, user: action.payload.data, isLoggedIn: true}
        case GET_USER + '_REJECTED':
            return initialState
        default:
            return initialState
    }
}