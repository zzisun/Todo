INSERT INTO `user` (`user_id`,`password`) VALUES ('noel', '1234');
INSERT INTO `card` (`user`, `title`, `content`, `priority`, `column_type`) VALUES (1, '제목입니다.', '내용입니다.', 1, 'TODO');
INSERT INTO `card` (`USER`, `TITLE`, `CONTENT`, `PRIORITY`, `COLUMN_TYPE`) VALUES (1, '테스트1', '내용', 1.3, 'TODO');
INSERT INTO `card` (`USER`, `TITLE`, `CONTENT`, `PRIORITY`, `COLUMN_TYPE`) VALUES (1, '테스트2', '내용', 1.6, 'TODO');
INSERT INTO `history` (`CARD`, `ACTION`, `DATE`, `FROM`, `TO`) VALUES ('1', 'ADD', now(), null, 'TODO');
INSERT INTO `history` (`CARD`, `ACTION`, `DATE`, `FROM`, `TO`) VALUES ('2', 'ADD', now(), null, 'DOING');
INSERT INTO `history` (`CARD`, `ACTION`, `DATE`, `FROM`, `TO`) VALUES ('3', 'ADD', now(), null, 'DONE');
