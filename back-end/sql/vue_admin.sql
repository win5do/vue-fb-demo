/*
Navicat MySQL Data Transfer

Source Server         : wf
Source Server Version : 50718
Source Host           : 39.108.4.6:3306
Source Database       : vue_admin

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2017-05-14 23:29:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(50) NOT NULL DEFAULT 'noname',
  `price` float(10,2) NOT NULL DEFAULT '0.00',
  `inventory` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '库存',
  `category` varchar(50) DEFAULT '' COMMENT '分类',
  `imgs` varchar(50) DEFAULT '',
  `onsale` tinyint(4) unsigned NOT NULL DEFAULT '0' COMMENT '是否上架',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('41', '2017-05-09 16:39:57', '2017-05-09 16:39:57', '女盆友', '5555555.00', '0', null, null, '0');
INSERT INTO `goods` VALUES ('42', '2017-05-09 16:40:09', '2017-05-09 16:40:09', '大妹子', '5666666.00', '0', null, null, '0');
INSERT INTO `goods` VALUES ('59', '2017-05-14 20:28:18', '2017-05-14 20:28:18', 'dasdas', '1564564.00', '0', null, null, '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(40) NOT NULL DEFAULT '',
  `password` varchar(100) NOT NULL DEFAULT '',
  `role` tinyint(3) NOT NULL DEFAULT '0' COMMENT '用户权限',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('26', 'root', '$2a$10$RREavyfC7Pm1EXYIjcZS6.Ec3qMVveuwMm.GcXoCZOSMbNkxfYVLW', '100', '2017-05-09 23:14:07', '2017-05-09 23:14:07');
INSERT INTO `user` VALUES ('27', '666', '$2a$10$soVuVqbLSWwliu/6MT0xQ.3VLbXK2FRZhij/50Ni3E5SGwGaVb.ou', '1', '2017-05-09 23:38:06', '2017-05-13 14:47:04');
INSERT INTO `user` VALUES ('34', 'test', '$2a$10$ozwCHpePh3Cl64bomQY2nOb9XpzM7zlMA5KJG5CEhISTAh7zitFsy', '10', '2017-05-13 14:58:47', '2017-05-14 21:08:47');
SET FOREIGN_KEY_CHECKS=1;
