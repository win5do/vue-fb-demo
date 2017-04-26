<template>
    <div>
        <my-header></my-header>
        <el-row class="index-row">
            <el-col :span="4">
                <el-menu default-active="1" theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-submenu>
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
    import Header from '../components/header.vue';

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
    }
</style>