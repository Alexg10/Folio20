import projectsQuery from '~/apollo/queries/project/projects'

export const state = () => ({
  init: false,
  projects: [],
  currentProject: "",
})

export const getters = {
  isInit(state) {
    return state.init;
  },
  currentProject(state) {
    return state.currentProject
  },
  list:(state) => {
    return state.projects;
  }
}

export const mutations = {
  init(state){
    console.log(state);
    state.init = true;
    console.log("NEEEEW STATE !!!! state");
    console.log(state);
  },
  setProjects(state, projects){
    console.log("______----PROJETOS");
    console.log(projects);
    state.projects = projects;
  },
  currentProject(state, current){
    state.currentProject = current;
  }
}

export const actions = {
  async init({commit}){
    const client = this.app.apolloProvider.defaultClient
    const projects = await client.query({
      query: projectsQuery
    });
    if(projects.data && projects.data.projects && projects.data.projects.length){
      commit('setProjects', projects.data.projects);
      commit('init');
    }
  },
  current({commit}, current) {
    commit('currentProject', current);
  }
}
