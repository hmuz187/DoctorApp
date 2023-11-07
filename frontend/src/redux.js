import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import thunk from 'redux-thunk'

import rootReducer from './store/rootReducer'

const reduxConfig = configureStore({
  reducer:  rootReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // extraReducers: (builder) => {
  //   builder.addCase(PURGE, (state) => {
  //     customEntityAdapter.removeAll(state);
  //   })
  // }
})
const persistor = persistStore(reduxConfig)

// const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     posts: postsReducer,
//   },
// })



export {
  reduxConfig,
  persistor
}




/*
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import { myCustomApiService } from './api'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: myCustomApiService,
      },
      serializableCheck: false,
    }),
})

*/


//===========================new==============================
// import { configureStore } from '@reduxjs/toolkit'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

// export default function configureAppStore(preloadedState) {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(loggerMiddleware),
//     preloadedState,
//     enhancers: [monitorReducersEnhancer],
//   })

//   if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//   }

//   return store
// }

//---------------new reducer--------------
// function todosReducer(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO': {
//       return state.concat(action.payload)
//     }
//     case 'TOGGLE_TODO': {
//       const { index } = action.payload
//       return state.map((todo, i) => {
//         if (i !== index) return todo

//         return {
//           ...todo,
//           completed: !todo.completed,
//         }
//       })
//     }
//     case 'REMOVE_TODO': {
//       return state.filter((todo, i) => i !== action.payload.index)
//     }
//     default:
//       return state
//   }
// }



//=======================old=========================================
// import { applyMiddleware, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

// export default function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = composeWithDevTools(...enhancers)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)

//   if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//   }

//   return store
// }