/*
MySQL Backup
Source Server Version: 8.0.11
Source Database: todolist
Date: 2018/9/21 19:48:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--  Table structure for `list`
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
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

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `psw` char(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `admin` int(11) DEFAULT NULL,
  `signature` varchar(50) DEFAULT NULL,
  `msg` int(11) DEFAULT NULL,
  `headimg` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `work` varchar(40) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Records 
-- ----------------------------
INSERT INTO `list` VALUES ('1','','tan','0','qeeeytrdsafshfg','',NULL,'','12','23',NULL), ('2','年段蝴蝶结卡','111','0','<p>正文......</p><p>你就卡氨基酸的脸孔爱神的箭</p>','讨论区','0','2018-09-10 10-55-25','1','1',NULL), ('3','啊感觉哈啊了','111','0','<p>正文......</p><p><br></p><p><br></p><p><br></p><p><br></p><p>按实际客户登记卡山东矿机阿斯利康的考拉打算离开家都快拉上</p>','讨论区','0','2018-09-11 10-57-14','1','1',NULL), ('4','啊感觉哈啊了','111','0','<p>正文......</p><p><br></p><p><br></p><p><br></p><p>冈萨加好多个</p><p>按实际客户登记卡山东矿机阿斯利康的考拉打算离开家都快拉上</p>','讨论区','0','2018-09-11 10-57-22','1','1',NULL), ('5','测试哦','111','0','<p>正文......拿不到玛纳斯</p>','讨论区','0','2018-09-11 11-36-59','1','1',NULL), ('6','我是草稿','111','0','<p>正文......</p><p><br></p><p><br></p><p>测试是</p>','讨论区','0','2018-09-13 03-57-58','1','1',NULL), ('7','我是真的草稿','111','1','<p>正文......黑科技</p>','讨论区','0','2018-09-13 03-59-54','1','1',NULL), ('8','1111111111111','111','0','<p>正文......</p>','讨论区','0','2018-09-13 04-12-53','1','1',NULL), ('9','22222222222222','111','0','<p>正文......</p>','讨论区','0','2018-09-13 04-13-09','1','1',NULL), ('10','3333333333333','111','0','<p>正文......</p>','讨论区','0','2018-09-13 04-13-15','1','1',NULL), ('11','4444444444444','111','0','<p>正文......</p>','讨论区','0','2018-09-13 04-13-20','1','1',NULL), ('12','555555555555555','111','0','<p>正文......</p>','讨论区','0','2018-09-13 04-13-24','1','1',NULL), ('13','666666666666666666','111','0','<p>正文......</p>','讨论区','0','2018-09-13 04-13-30','1','1',NULL), ('14','7777777777777777','111','0','<p>正文......</p>','讨论区','0','2018-09-13 04-13-36','1','1',NULL), ('15','爱好几个电话就按个','211','0','<p>正文......阿市规划局的桂花树</p>','讨论区','0','2018-09-13 09-55-46','1','0',NULL), ('16','begin','111','0','<p>路径：</p><ol><li>图形    threejs</li><li>在线聊天</li><li>bs精通</li></ol><p><br></p>','讨论区','0','2018-09-14 10-30-29','0','0',NULL), ('17','begin','111','0','<p>路径：</p><ol><li>threejs  图形</li><li>在线聊天</li><li>bs</li></ol>','讨论区','0','2018-09-14 10-40-29','0','0',NULL), ('18','begin','111','0','<p>路径：</p><ol><li>threejs  图形</li><li>在线聊天</li><li>bs</li></ol>','讨论区','0','2018-09-14 10-41-10','4','0',NULL), ('19','begin','111','0','<p>路径：</p><ol><li>threejs  图形</li><li>在线聊天</li><li>bs</li></ol>','新闻','0','2018-09-14 10-41-15','2','0',NULL), ('20','这里是css板块','111','0','<p>正文......</p>','css小点','0','2018-09-14 10-49-34','0','0',NULL), ('21','这里是js板块','111','0','<p>正文......</p>','css小点','0','2018-09-14 10-49-43','1','0',NULL), ('22','这里是js板块','111','0','<p>正文......</p>','js','0','2018-09-14 10-50-43','0','0',NULL), ('23','下一站、start','111','0','<p>下一站：</p><ol><li>three.js</li><li>在线聊天</li><li>bs精通</li></ol>','新闻','0','2018-09-15 11-47-04','431','0',NULL), ('24','图片测试','111','0','<p>你好</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><img src=\"http://localhost:3000/articleImg/1536987376764.jpg\" width=\"193\" style=\"\"></p><p><br></p><p><br></p><p>图片测试</p>','讨论区','0','2018-09-15 12-56-39','3','0',NULL), ('25','发表文章','111','0','<p>正文......</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><img src=\"http://localhost:3000/articleImg/1536988775560.jpg\" width=\"256\" style=\"display: block; margin: auto;\"></p><p><br></p><p>嘿嘿</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>底部</p>','讨论区','0','2018-09-15 01-20-12','1','0',NULL), ('26','发表到css','111','0','<p>正文......</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>到css</p><p><br></p><p><img src=\"http://localhost:3000/articleImg/1536989262409.jpg\" width=\"309\" style=\"\"></p><p><br></p><p><br></p><p><br></p><p>按揭客户登记卡</p>','css小点','0','2018-09-15 01-28-09','1','0',NULL), ('27','图片居中测试','111','0','<p>正文......</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><img src=\"http://localhost:3000/articleImg/1536989524976.jpg\" width=\"245\" style=\"display: block; margin: auto;\"></p><p>就开始打回访可接受的</p>','讨论区','0','2018-09-15 01-32-57','6','0',NULL), ('28','测试时间','111','0','<p>正文......</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>对时间的测试</p>','讨论区','0','2018-09-15 13-39-59','18','0',NULL);
INSERT INTO `user` VALUES ('1','tan','123456','1',NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('2','asd','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('7','1231','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('8','111','123456','1','nihaahjka','23','http://localhost:3000/headImg/1537109641348.png','2018-09-04','教师','我只想回家'), ('9','112','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('10','133','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('11','116','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('12','117','123456',NULL,NULL,NULL,'http://localhost:3000/headImg/1536507967236.png',NULL,NULL,NULL), ('13','118','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('14','110','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('15','121','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('16','128','123456',NULL,NULL,NULL,'http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg',NULL,NULL,NULL), ('17','222','123456',NULL,NULL,'0','http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg','2018-09-09',NULL,NULL), ('18','333','123456',NULL,NULL,'0','http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg','2018-09-09',NULL,NULL), ('19','115','123456',NULL,NULL,'0','http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg','2018-09-09','你好','我来了'), ('20','211','123456',NULL,NULL,'0','http://localhost:3000/headImg/1536846915251.png','2018-09-13','教师','那就快回家的刻录机奥斯卡'), ('21','asda','1234578',NULL,NULL,'0','http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg','2018-09-14',NULL,NULL), ('22','456','123456',NULL,NULL,'0','http://i1.hdslb.com/bfs/face/ea61f3ace77785b5820a50522d54a257a54e498b.jpg','2018-09-14',NULL,NULL);
