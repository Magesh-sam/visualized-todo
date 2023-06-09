import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface TaskProps{
    id: string;
    taskName: string;
    completed: boolean;
    category: string ;
}

const sampleData = [
    {
        id: 'dkfkj3erelfkmelk9843jenf',
        taskName: 'walk  the dog',
        completed: false,
        category: 'home'
    },
    {
        id: 'dkf12234rfelkmfl435jenf',
        taskName: 'buy chicken',
        completed: false,
        category: 'home'
    },
    {
        id: 'dkfkj39834283l4k3ml4nf',
        taskName: 'wash dishes',
        completed: true,
        category: 'home'
    },
    {
        id: 'dkfkjeuhrerlerueh39843jenf',
        taskName: 'Maths Homework',
        completed: false,
        category: 'school'
    },
    {
        id: 'dkfkerplelrj3984eijfie3jenf',
        taskName: 'Submit weekly report',
        completed: false,
        category: 'work'
    },
    {
        id: 'rirtrt49erpleprl85uhgj',
        taskName: 'Meet john',
        completed: true,
        category: 'personal'
    },
    {
        id: 'rirtrt49lfkmefererokeore85uhgj',
        taskName: 'buy shoes',
        completed: false,
        category: 'personal'
    },
    {
        id: 'rirtreeprlperlpe85uhgj',
        taskName: 'Meet lucy',
        completed: true,
        category: 'personal'
    },

]

const initialState = {
    tasks: sampleData as TaskProps[]
}


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state,action:PayloadAction<TaskProps>) => {
            state.tasks.push(action.payload)
        },
        removeFromTodo: (state, action:PayloadAction<string>) => {
            const index = state.tasks.findIndex((task: TaskProps) => task.id === action.payload)
            state.tasks.splice(index,1)
        },
        setTodoStatus: (state, action: PayloadAction<string>) => {
            const index = state.tasks.findIndex((task: TaskProps) => task.id === action.payload)
            state.tasks[index].completed = !state.tasks[index].completed
        }
    }
})

export const { addTodo, removeFromTodo, setTodoStatus } = todoSlice.actions
export default todoSlice.reducer