<template>
    <div class="list">
        <el-table
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
                type="selection">
            </el-table-column>

            <el-table-column
                prop="name"
                label="商品名称">
            </el-table-column>

            <el-table-column
                label="添加日期">
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
                </template>
            </el-table-column>

            <el-table-column
                prop="price"
                label="单价">
            </el-table-column>

            <el-table-column
                prop="Id"
                label="商品链接"
                show-overflow-tooltip>
            </el-table-column>

            <el-table-column label="操作">
                <template scope="scope">
                    <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)">修改
                    </el-button>
                    <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)">上架
                    </el-button>
                    <el-button
                        size="small"
                        type="warning"
                        @click="handleEdit(scope.$index, scope.row)">下架
                    </el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>

        </el-table>
        <div class="btns">
            <el-button type="success">加入礼盒</el-button>
            <el-button type="info">批量上架</el-button>
            <el-button type="warning">批量下架</el-button>
            <el-button type="danger">批量删除</el-button>
        </div>
    </div>
</template>

<script>
    import func from '../../public/func';
    import api from '../../public/api';

    export default {
        name: 'list',
        data() {
            return {
                tableData: [],
                multipleSelection: []
            }
        },

        methods: {
            handleDelete(row) {
                console.log(row);
                func.ajaxPost(api.goodsDelete, {id: row.Id}, res => {
                    if (res.status === 201) {
                        let index = this.tableData.indexOf(row);
                        this.tableData.splice(index, 1);
                        this.$message.success('删除成功');
                    }
                });
            },
        },

        created () {
            func.ajaxGet(api.goodsList, res => {
                this.tableData = res.data;
            });
        },


    }
</script>

<style lang="scss">
    .list {
        .btns {
            margin: 20px 0;
            text-align: center;
        }
        .el-table__empty-block {
            height: auto;
        }
    }
</style>