import { createSlice } from '@reduxjs/toolkit'

const initialState = { list: [] }

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add(state, action) {
      state.list = [...state.list, action.payload ]
    },
    remove(state, action) {
      state.list = state.list.filter((f, index) => index != action.payload)
    },
    edit(state, action) {
      state.list = state.list.map((item, key) => {
      if(action.payload.key === key){
        return action.payload.item
      }
      return item
      })
    },
  },
})

export const { add,edit,remove } = listSlice.actions
export default listSlice.reducer