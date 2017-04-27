<template>
    <div>
        <my-header></my-header>
        <el-row class="index-row">
            <el-col :span="4">
                <el-menu default-active="1" theme="dark">
                    <router-link :to="{name: 'list'}">
                        <el-menu-item index="2"><i class="el-icon-menu"></i>列表</el-menu-item>
                    </router-link>

                    <router-link :to="{name: 'form'}">
                        <el-menu-item index="3"><i class="el-icon-setting"></i>新增</el-menu-item>
                    </router-link>
                </el-menu>
            </el-col>
            <el-col :span="20" class="left">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Header from './childs/header.vue';

    export default {
        name: 'index',
        components: {
            'my-header': Header,
        },
    }
</script>


<style lang="scss">
    .left {
        padding: 20px;
    }

    .index-row {
        min-width: 1200px;
        height: calc(100% - 60px);
        .el-menu {
            background: #666;
            border-radius: 0;
            height: 100%;
        }
    }
</style>