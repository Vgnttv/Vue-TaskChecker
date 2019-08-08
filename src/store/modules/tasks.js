const state = {
  tasks: [
    {
      id: 1,
      title: "Finish assignment",
      user: "Angela",
      completed: false,
      count: 0
    },
    {
      id: 2,
      title: "Implementing add feature",
      user: "Oscar",
      completed: false,
      count: 0
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
  }
};

const actions = {
  //   addTask({commit}){(commit("addTask")},

  removeTask({ commit}, id) {
    commit("removeTask", id);
  }
};

const mutations = {
  //   addTask: state => {
  //     if (state.task.length > 0) {
  //       state.tasks.push({
  //         id: this.idForTask,
  //         title: this.task,
  //         user: "Ottavia",
  //         completed: false,
  //         count: 0
  //       });
  //       (this.task = ""), this.idForTask++;
  //     }
  //   },
  removeTask: (state, id) => (state.tasks = state.tasks.filter(task => task.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
