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
            &:after{
                content: '/';
                color: $black;
                position: absolute;
                top: 0;
                left: 8px;
            }
            &:last-of-type{
                color: $primary-color;
            }
            a{
                color: $black
            }
        }
    }
</style>