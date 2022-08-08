import { createSlice } from '@reduxjs/toolkit'

const initialState = { list: [] ,filteredList: []}

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
    filter(state, action) {
      if(action.payload){
        state.filteredList = state.list.filter(f => f.name.includes(action.payload))
      }else{
        state.filteredList = []
      }
    }
  },
})

export const { add,edit,remove,filter } = listSlice.actions
export default listSlice.reducer