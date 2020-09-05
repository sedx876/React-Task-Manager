const initialState = [
  {
    id: 1,
    title: 'Learn React Js',
    description: "Lets learn this",
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Learn Redux',
    description: "Lets learn this again",
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'Learn MoRe',
    description: "Again and again",
    status: 'Unstarted'
  }
]

const tasks = (state = {tasks: initialState}, action) => {
  return state
}

export default tasks