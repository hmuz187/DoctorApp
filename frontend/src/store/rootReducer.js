import { combineReducers } from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

import todoReducer from "./todoReducer"
import adminReducer from "./adminReducer"


const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const todoConfig = {
    ...commonConfig,
    key: 'word',
    value: ['workId'],
}

const adminConfig = {
    ...commonConfig,
    key: 'name',
    value: ['info']
}

const rootReducer = combineReducers({
    admin: persistReducer(adminConfig, adminReducer),
    todos: persistReducer(todoConfig, todoReducer),
})


export default rootReducer