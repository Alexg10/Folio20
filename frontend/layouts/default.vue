<template>
  <div>
    <div v-if="init">
      <Header />
      <nuxt />
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
  import projectsQuery from '~/apollo/queries/project/projects'
  import { mapGetters } from 'vuex';
  import Header from '~/components/header/Header'

  export default {
    components : {
      Header
    },
    middleware: 'app',
    computed: {
      ...mapGetters({
        init: 'projects/isInit'
      })
    }
  }
</script>


<style lang="scss" scoped>

</style>
