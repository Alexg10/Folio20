<template>
    <div class="breadcrumb">
        <ul>
            <li><nuxt-link to="/projects">projects</nuxt-link></li>
            <li>{{ currentProject }}</li>
        </ul>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        computed: {
            currentProject(){
                return this.$store.getters["projects/currentProject"]
            }
        },
    }
</script>

<style lang="scss" scoped>
    ul{
        padding-left: 5px;
        li{
            position: relative;
            list-style-type: none;
            float: left;
            padding-left: 10px;
            color: $black;
            padding-left: 20px;
            transition: color 0.5s ease;
            &:after{
                content: '/';
                color: $black;
                position: absolute;
                top: 0;
                left: 8px;
                transition: color 0.5s ease;
            }
            &:last-of-type{
                color: $primary-color;
            }
            a{
                color: $black;
                transition: color 0.5s ease;
            }
            .bg-red &{
              color: $white;
              transition: color 0.5s ease;
              &:after{
                color: $white;
                transition: color 0.5s ease;
              }
              a{
                color: $white;
                transition: color 0.5s ease;
              }
            }
        }
    }
</style>
