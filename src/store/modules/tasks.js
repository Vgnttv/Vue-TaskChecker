const state = {
  tasks: [
    {
      id: 1,
      title: "Finish assignment",
      user: "Angela",
      completed: false,
      count: 0,
      date: new Date(),
      steps: ["test one", "test two"]
    },
    {
      id: 2,
      title: "Implementing add feature",
      user: "Oscar",
      completed: false,
      count: 0,
      date: new Date(),
      steps: ["test three", "test four"]
    }
  ]
};

const getters = {
  allTasks: state => state.tasks,
  totalCompleted: state =>
    state.tasks.reduce(function(previous, current) {
      return previous + current.count;
    }, 0),

  percentCompleted: state => {
    let completed = state.tasks.filter(task => task.count == 1).length;
    let notCompleted = state.tasks.filter(task => task.count == 0).length;
    let totalValue = completed + notCompleted;
    return Math.floor((100 * completed) / totalValue);
  },
  // returnSteps: state => {
  //   let steps = state.tasks.map(task => task.steps).toString();
  //   return steps;
  // }
};

const actions = {
  addTask({ commit }, task) {
    commit("addTask", task);
  },
  removeTask({ commit }, id) {
    commit("removeTask", id);
  }
};

const mutations = {
  addTask: (state, task) =>
    state.tasks.push({
      id: task.id,
      title: task.title,
      user: "Ottavia",
      completed: "",
      count: 0,
      date: new Date(),
      steps: ["test 1", "test 2", "test 3"]
    }),
  removeTask: (state, id) =>
    (state.tasks = state.tasks.filter(task => task.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
