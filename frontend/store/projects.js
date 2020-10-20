export const state = () => ({
    currentProject: "",
})

export const getters = {
    currentProject(state) {
        return state.currentProject
    }
}

export const mutations = {
  currentProject(state, current){
    state.currentProject = current;
  }
}

export const actions = {
  current({commit}, current) {
    commit('currentProject', current);
  }
}
