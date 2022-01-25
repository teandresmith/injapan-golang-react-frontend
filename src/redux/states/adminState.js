import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'admin/login',
  async (admin, dispatch, getState) => {
    return await fetch(`${process.env.REACT_APP_DOMAIN}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    }).then((res) => res.json())
  }
)

const initialState = {
  admin: {},
  status: null,
  isLoading: false,
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = 'loading'
      state.isLoading = true
    },
    [login.fulfilled]: (state, action) => {
      if (action.payload.message === 'Invalid Password') {
        state.status = 'Failed Login'
        state.admin = action.payload
      }
      if (action.payload.message === 'Login Successful') {
        state.status = 'Login Successful'
        const user = {
          name: action.payload.user.email,
          token: action.payload.user.token,
        }
        state.admin = action.payload
        localStorage.setItem('token', JSON.stringify(user))
      }

      state.isLoading = false
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed'
      state.isLoading = false
    },
  },
})

// Action creators are generated for each case reducer function
// export const {} = adminSlice.actions

export default adminSlice.reducer
