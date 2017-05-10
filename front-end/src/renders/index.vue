<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'index',

        created () {
            this.func.ajaxGet(this.api.userAutoLogin, res => {
                if (res.status === 201) {
                    this.$store.commit('user', res.data);
                    this.$router.push('/admin');

                } else {
                    this.$router.push('/');
                }
            });
        },
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>