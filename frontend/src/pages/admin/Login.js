import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../store/adminReducer'
import { signIn } from '../../apis/admin'

const Login = () => {

  const dispath = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const userInput = { email, password }
    const data = await signIn(userInput)
    dispath(loginSuccess({ email: data.data.email ? data.data.email : null, token: data.data.token ? data.data.token : null }))
  }

  return (

    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Log in</h2>
          </div>
          <>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold">Email</label>
              <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold">Password</label>
              <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label>
                  <input type="checkbox" />
                  <span className="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="/admin/forgotPassword">Forgot your password?</a></div>
            </div>
            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F1B4A] hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200" type='submit'
              onClick={handleLogin}
            >Submit</button>
            <p className="text-center font-extrabold">Don&rsquo;t have an account? <a className="text-red-500 hover:underline" href="/admin/signup">Sign up</a></p>
          </>
        </div>
      </div>
    </section>
  )
}

export default Login





/* 
const onClick = () => {
  dispatch(fetchUserById(userId)).then(() => {
    // do additional work
  })
}


// in the component

const onClick = () => {
  dispatch(fetchUserById(userId))
    .unwrap()
    .then((originalPromiseResult) => {
      // handle result here
    })
    .catch((rejectedValueOrSerializedError) => {
      // handle error here
    })
}



import { unwrapResult } from '@reduxjs/toolkit'

// in the component
const onClick = () => {
  dispatch(fetchUserById(userId))
    .then(unwrapResult)
    .then((originalPromiseResult) => {
      // handle result here
    })
    .catch((rejectedValueOrSerializedError) => {
      // handle result here
    })
}




const updateUser = createAsyncThunk(
  'users/update',
  async (userData, { rejectWithValue }) => {
    const { id, ...fields } = userData
    try {
      const response = await userAPI.updateById(id, fields)
      return response.data.user
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data)
    }
  }
)


*/








/* 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI, User } from './userAPI'

const fetchUserById = createAsyncThunk<User, string, {
    state: { users: { loading: string, currentRequestId: string } }
}> (  
  'users/fetchByIdStatus',
  async (userId: string, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().users
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
          state.currentRequestId = action.meta.requestId
        }
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        const { requestId } = action.meta
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle'
          state.entities.push(action.payload)
          state.currentRequestId = undefined
        }
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        const { requestId } = action.meta
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle'
          state.error = action.error
          state.currentRequestId = undefined
        }
      })
  },
})

const UsersComponent = () => {
  const { entities, loading, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const fetchOneUser = async (userId) => {
    try {
      const user = await dispatch(fetchUserById(userId)).unwrap()
      showToast('success', `Fetched ${user.name}`)
    } catch (err) {
      showToast('error', `Fetch failed: ${err.message}`)
    }
  }

  // render UI here
}


*/




/*
// file: store.ts noEmit
import { configureStore } from '@reduxjs/toolkit'
import type { Reducer } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import usersReducer from './user/slice'

const store = configureStore({ reducer: { users: usersReducer } })
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>

// file: user/userAPI.ts noEmit

export declare const userAPI: {
  updateById<Response>(id: string, fields: {}): { data: Response }
}

// file: user/slice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'
import type { AxiosError } from 'axios'

// Sample types that will be used
export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
}

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

interface UpdateUserResponse {
  user: User
  success: boolean
}

export const updateUser = createAsyncThunk<
  User,
  { id: string } & Partial<User>,
  {
    rejectValue: ValidationErrors
  }
>('users/update', async (userData, { rejectWithValue }) => {
  try {
    const { id, ...fields } = userData
    const response = await userAPI.updateById<UpdateUserResponse>(id, fields)
    return response.data.user
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err // cast the error for access
    if (!error.response) {
      throw err
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return rejectWithValue(error.response.data)
  }
})

interface UsersState {
  error: string | null | undefined
  entities: Record<string, User>
}

const initialState = {
  entities: {},
  error: null,
} as UsersState

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error.message
      }
    })
  },
})

export default usersSlice.reducer

// file: externalModules.d.ts noEmit

declare module 'some-toast-library' {
  export function showToast(type: string, message: string)
}

// file: user/UsersComponent.ts

import React from 'react'
import { useAppDispatch } from '../store'
import type { RootState } from '../store'
import { useSelector } from 'react-redux'
import { updateUser } from './slice'
import type { User } from './slice'
import type { FormikHelpers } from 'formik'
import { showToast } from 'some-toast-library'

interface FormValues extends Omit<User, 'id'> {}

const UsersComponent = (props: { id: string }) => {
  const { entities, error } = useSelector((state: RootState) => state.users)
  const dispatch = useAppDispatch()

  // This is an example of an onSubmit handler using Formik meant to demonstrate accessing the payload of the rejected action
  const handleUpdateUser = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const resultAction = await dispatch(updateUser({ id: props.id, ...values }))
    if (updateUser.fulfilled.match(resultAction)) {
      // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
      const user = resultAction.payload
      showToast('success', `Updated ${user.first_name} ${user.last_name}`)
    } else {
      if (resultAction.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.
        formikHelpers.setErrors(resultAction.payload.field_errors)
      } else {
        showToast('error', `Update failed: ${resultAction.error}`)
      }
    }
  }

  // render UI here
}

*/