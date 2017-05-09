<template>
    <div>
        <my-header></my-header>
        <el-row id="index-row">
            <el-col :span="4">
                <el-menu default-active="1" theme="dark" class="top-menu">
                    <el-submenu index="1">
                        <template slot="title">商品管理</template>
                        <router-link :to="{name: 'goods-list'}">
                            <el-menu-item index="1-1">商品列表</el-menu-item>
                        </router-link>

                        <router-link :to="{name: 'goods-form'}">
                            <el-menu-item index="1-2">新增商品</el-menu-item>
                        </router-link>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">用户管理</template>
                        <router-link :to="{name: 'user-list'}">
                            <el-menu-item index="2-1"
                                          @click="controlJump('user-list')">用户列表
                            </el-menu-item>
                        </router-link>

                        <router-link :to="{name: 'user-form'}">
                            <el-menu-item index="2-2"
                                          @click="controlJump('user-form')">新增用户
                            </el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" class="left">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Header from './common/header.vue';

    export default {
        name: 'admin',

        components: {
            'my-header': Header,
        },

        computed: {
            user_id () {
                return this.$store.state.user_id;
            },
        },

        methods: {
            // 跳转控制
            controlJump (target) {
                if (!this.user_id) {
                    this.$message.warning('权限不够，日后再说');

                } else {

                    this.$router.push({name: target});
                }

            }
        },

    }
</script>


<style lang="scss">
    .left {
        padding: 20px;
    }

    #index-row {
        min-width: 1200px;
        height: calc(100% - 60px);
        display: flex;
        position: fixed;
        width: 100%;

        .top-menu {
            background: #666;
            border-radius: 0;
            height: 100%;
        }
    }
</style>