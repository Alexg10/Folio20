<template>
    <div class="projects">
        <projectList />
    </div>
</template>

<script>
    import projectList from '~/components/projects/List'

    export default {
        components: {
          projectList
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
