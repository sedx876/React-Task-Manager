const initialState = [
  {
    id: 1,
    title: 'Learn React Js',
    description: "Lets learn this",
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Learn Redux',
    description: "Lets learn this again",
    status: 'In Progress'
  }
]

const tasks = (state = {tasks: initialState}, action) => {
  return state
}

export default tasks