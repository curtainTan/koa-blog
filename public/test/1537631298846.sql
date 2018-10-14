/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : todolist

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2018-09-21 20:05:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list_copy
-- ----------------------------
DROP TABLE IF EXISTS `list_copy`;
CREATE TABLE `list_copy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `user_name` varchar(64) NOT NULL,
  `caogao` int(11) NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `label` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `comment` int(1) DEFAULT NULL,
  `time` varchar(50) NOT NULL,
  `click_num` int(11) DEFAULT NULL,
  `like_num` int(11) DEFAULT NULL,
  `other` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
