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
  },
  {
    id: 4,
    title: 'Learn Rails',
    description: "More and More",
    status: 'Unstarted'
  }
]

const tasks = (state = {tasks: initialState}, action) => {
  if (action.type === "EDIT_TASK") {
      const { payload } = action;
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
  return state
}

export default tasks