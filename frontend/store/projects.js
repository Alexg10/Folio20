export const state = () => ({
    apiUrl: process.env.strapiBaseUri,
    currentProject: null,
})

export const getters = {
    currentProject(state) {
        return state.currentProject
    }
}

export const mutations = {
    currentProject(state, id) {
        console.log("mutation");
        console.log(id);
        state.currentProject = id;
    }


}

export const actions = {
    async initProject({state, getters, commit}) {
        // const project = await this.$axios
        //     .$get(`${state.apiUrl}/projects?slug=${this.$route.params.id}`);
        console.log(state.apiUrl);
        console.log(getters.currentProject);
        console.log("project");
        console.log(project);
        state.commit('currentProject', project);
    }
}