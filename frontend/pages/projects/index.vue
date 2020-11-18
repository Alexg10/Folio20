<template>
    <div class="projects">
        <projectList :projects="projects" />
    </div>
</template>

<script>
    import projectsQuery from '~/apollo/queries/project/projects'
    import projectList from '~/components/projects/List'

    export default {
        data() {
          return {
              api_url: process.env.strapiBaseUri,
              projects: [],
          };
        },
        components: {
          projectList
        },
        apollo: {
            projects: {
                prefetch: true,
                query: projectsQuery
            }
        }
    }
</script>

<style lang="scss">
    .projects{
        overflow: hidden;
        width: 100vw;
        display: block;
        height: 100vh;
        position: relative;
    }
</style>
