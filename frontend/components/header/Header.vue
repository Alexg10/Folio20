<template>
    <nav class="header uk-flex uk-flex-between uk-flex-middle">
        <div class="nav-left uk-flex uk-flex-bottom">
            <Logo />
            <!-- <Breadcrumb /> -->
        </div>
        <Meet />
    </nav>
</template>

<script>
    import Logo from '~/components/header/Logo'
    import Breadcrumb from '~/components/header/Breadcrumb'
    import Meet from '~/components/header/Meet'

    export default {
        components : {
            Logo,
            Breadcrumb,
            Meet
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 35px;
        color: $primary-color;
        z-index: 99;
    }
</style>
