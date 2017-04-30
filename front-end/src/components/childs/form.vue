<template>
    <el-form ref="form" :model="form" label-width="80px" class="form-contain">
        <el-form-item label="商品名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="商品价格">
            <el-input placeholder="请输入内容" v-model="form.price">
                <template slot="append">元</template>
            </el-input>
        </el-form-item>


        <!--<el-form-item label="商品库存">-->
            <!--<el-input-number v-model="form.num" :min="0"></el-input-number>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="商品属性">-->
            <!--<el-checkbox-group v-model="form.type">-->
                <!--<el-checkbox label="推荐" name="type"></el-checkbox>-->
                <!--<el-checkbox label="优选" name="type"></el-checkbox>-->
                <!--<el-checkbox label="折扣" name="type"></el-checkbox>-->
                <!--<el-checkbox label="热门" name="type"></el-checkbox>-->
            <!--</el-checkbox-group>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="商品图片">-->
            <!--<el-upload-->
                    <!--class="upload-demo"-->
                    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                    <!--:on-preview="handlePreview"-->
                    <!--:on-remove="handleRemove"-->
                    <!--:file-list="fileList2"-->
                    <!--list-type="picture">-->
                <!--<el-button size="small" type="primary">点击上传</el-button>-->
                <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            <!--</el-upload>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="商品视频">-->
            <!--<el-upload-->
                    <!--class="upload-demo"-->
                    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                    <!--:on-preview="handlePreview"-->
                    <!--:on-remove="handleRemove"-->
                    <!--:file-list="fileList2"-->
                    <!--list-type="picture">-->
                <!--<el-button size="small" type="primary">点击上传</el-button>-->
                <!--<div slot="tip" class="el-upload__tip">商品视频或gif图</div>-->
            <!--</el-upload>-->
        <!--</el-form-item>-->

        <el-form-item>
            <el-button type="primary" @click="onSubmit">添加商品</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import func from '../../public/func';
    import api from '../../public/api';

    export default {
        name: 'form',
        data() {
            return {
                form: {
                    name: '',
                    price: 0,
                }
            }
        },
        methods: {
            onSubmit() {
                func.ajaxPost(api.goodsAdd, this.form, res => {
                    if (res.status === 201) {
                        this.$message.success('添加成功');
                    }
                });
            },

        },
    }
</script>

<style lang="scss">
    .form-contain {
        width: 50%;
        margin: 0 auto;
    }

    .el-input-number {
        [class^='el-input-number'] {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
</style>