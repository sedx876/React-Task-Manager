// import uuid from "react-uuid";

const initState = [
  // {
  //   id: uuid(),
  //   title: "Learn Redux",
  //   description: "The store, actions, and reducers, oh my!",
  //   status: "Unstarted",
  // },
  // {
  //   id: uuid(),
  //   title: "Learn React JS",
  //   description: "React one of the popular javascript library to build UI!",
  //   status: "Unstarted",
  // },
];

const tasks = (state = { tasks: initState }, action) => {
  /**************************************************************
   *                    if else version
   ***************************************************************/
  // if (action.type === "CREATE_TASK") {
  //   return {
  //     tasks: state.tasks.concat(action.payload),
  //   };
  // }

  // if (action.type === "EDIT_TASK") {
  //   const { payload } = action;
  //   return {
  //     tasks: state.tasks.map((task) => {
  //       if (task.id === payload.id) {
  //         return Object.assign({}, task, payload.params);
  //       }
  //       return task;
  //     }),
  //   };
  // }

  /**************************************************************
   *                   switch version
   ***************************************************************/

  const { payload } = action;
  switch (action.type) {
    case "CREATE_TASK": {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }
    case "EDIT_TASK": {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case "REMOVE_TASK": {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default tasks;
