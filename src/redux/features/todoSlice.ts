import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store';

export interface ITodos {
  id?: string,
  is_completed?: boolean,
  updated_at?: string,
  created_at?: string,
  title: string,
  priority: string
}
export interface IInitialState {
  todos: ITodos[]
}
const initialState: IInitialState = {
  todos: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodos>) => {
      state.todos.push({
        ...action.payload,
        id: uuidv4(),
        is_completed: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
    },
    delateTodos: (state, action: PayloadAction<{ id: string }>) => {
      state.todos.filter(item => item.id !== action.payload.id)
    },
    reset: (state) => {
      state.todos = []
    }
  }
})

export const { addTodo, reset, delateTodos } = todoSlice.actions
export default todoSlice.reducer

// make a hook 
export const useTodos = (state: RootState) => state.todo