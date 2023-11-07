
import { createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    email: null,
    token: null
};


const adminSlice = createSlice({
    name: 'adminInfo',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
          return ({
            ...state,
            isLoggedIn: true,
            email: action.payload.email,
            token: action.payload.token
        })},
        logoutSuccess: (state) => ({
            ...state,
            ...initialState
        })
    }
});

export const {loginSuccess, logoutSuccess} = adminSlice.actions;

export default adminSlice.reducer;





/**
 
import {createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    token: null
};

const loginSuccess = createAction('LOGIN_SUCCESS')
const logoutSuccess = createAction('LOGOUT_SUCCESS')


const adminReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginSuccess, (state, action) => ({
            ...state,
            isLoggedIn: true,
            email: action.payload.email,
            token: action.payload.token
        }))
        .addCase(logoutSuccess, (state, action) => ({
            ...state,
            ...initialState
        }))
})

export default adminReducer

 */




/*
import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('increment')
const decrement = createAction('decrement')

function isActionWithNumberPayload(action) {
  return typeof action.payload === 'number'
}

const reducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        // action is inferred correctly here
        state.counter += action.payload
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {
        state.counter -= action.payload
      })
      // You can apply a "matcher function" to incoming actions
      .addMatcher(isActionWithNumberPayload, (state, action) => {})
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  }
)

*/