let path = '/api';

module.exports = {
    // goods
    goodsList: path + '/goods/list',
    goodsDetail: path + '/goods/detail',
    goodsDelete: path + '/goods/delete',
    goodsAdd: path + '/goods/add',
    goodsDeleteMulti: path + '/goods/delete-multi',
    goodsUploadImg: path + '/goods/upload-img',

    // user
    userList: path + '/user/list',
    userDelete: path + '/user/delete',
    userAdd: path + '/user/add',
    userDeleteMulti: path + '/user/delete-multi',
    userLogin: path + '/user/login',
    userLogout: path + '/user/logout',
    userAutoLogin: path + '/user/auto-login',
    userChangeRole: path + '/user/change-role',
};