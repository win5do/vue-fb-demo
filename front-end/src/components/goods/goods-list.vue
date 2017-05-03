<template>
    <div class="list">
        <el-table
            ref="multipleTable"
            @selection-change="handleSelectionChange"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
                type="selection">
            </el-table-column>

            <el-table-column
                prop="name"
                label="商品名">
            </el-table-column>

            <el-table-column
                width="160"
                label="添加日期">
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
                </template>
            </el-table-column>

            <el-table-column
                label="价格">
                <template scope="scope">
                    {{ scope.row.price }}元
                </template>
            </el-table-column>


            <el-table-column label="操作">
                <template scope="scope">
                    <el-button
                        size="small"
                        @click="handleEdit(scope.row)">修改商品
                    </el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.row)">删除商品
                    </el-button>
                </template>
            </el-table-column>

        </el-table>
        <div class="btns">
            <el-button type="success">批量上架</el-button>
            <el-button type="danger" @click="deleteMulti">批量删除</el-button>
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
                multipleSelection: [],
            }
        },

        methods: {
            // 删除
            handleDelete(row) {
                func.ajaxPost(api.goodsDelete, {id: row.Id}, res => {
                    if (res.status === 201) {
                        let index = this.tableData.indexOf(row);
                        this.tableData.splice(index, 1);
                        this.$message.success('删除成功');
                    }
                });
            },

            // 修改
            handleEdit (row) {
                this.$router.push({name: 'form', query: {id: row.Id}});
            },

            goodsDeleteMulti () {
                let multi = this.multipleSelection
                let id = multi.map(el => {
                    return el.Id;
                });

                func.ajaxPost(api.deleteMulti, {id}, res => {
                    if (res.status === 201) {
                        this.$message.success('删除成功');
                        multi.forEach(el => {
                            let i = this.tableData.indexOf(el);
                            this.tableData.splice(i, 1);
                        });
                    }
                });
            },

            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
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