<template>
    <div class="list">
        <el-table
                :data="tableData3"
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
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>

            <el-table-column
                    prop="price"
                    label="单价">
            </el-table-column>

            <el-table-column
                    prop="address"
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
                            @click="handleDelete(scope.$index, scope.row)">删除
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
    export default {
        name: 'list',
        data() {
            return {
                tableData3: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-08',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-06',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }],
                multipleSelection: []
            }
        },
        created () {
            this.$http.get('/api/goods-list')
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        },
    }
</script>

<style lang="scss">
    .list {
        .btns {
            margin: 20px 0;
            text-align: center;
        }
    }
</style>