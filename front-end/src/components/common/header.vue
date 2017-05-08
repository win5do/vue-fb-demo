<template lang="pug">
    header
        .wrap.header-wrap
            .logo
                img(src='../../assets/imgs/logo.svg')
            .header-links
                li: a(href="#") 登录
                li: a(href="#") 注销
</template>

<script>
    export default {
        name: 'list'
    }
</script>

<style lang="scss">

    header {
        width: 100%;
        height: 60px;
        background: #444;
    }

    .header-wrap {
        height: 100%;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    .header-links {
        display: flex;
        flex-flow: nowrap row;
        justify-content: center;
        align-items: center;
        a {
            flex-flow: nowrap row;
            justify-content: center;
            align-items: center;
            display: flex;
            height: 100%;
            padding: 0 20px;
            color: #fff;
        }
    }

</style>