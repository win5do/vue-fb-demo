<template lang="pug">
    header
        .wrap.header-wrap
            .logo
                img(src='../../assets/imgs/logo.svg')
            .header-links
                li
                    button.btn(@click='login') {{ user ? user.user_name : '登录' }}
                li
                    button.btn(@click='logout') 注销
</template>

<script>
    export default {
        name: 'list',

        computed: {
            user () {
                return this.$store.state.user;
            },
        },

        methods: {
            login () {
                if (!this.user) {
                    this.$router.push('/');
                }
            },

            logout () {
                this.func.ajaxGet(this.api.userLogout, res => {
                    if (res.data.code === 200) {
                        this.$store.commit('user', null);
                    }
                });
            },
        }

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
        .btn {
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