-- 유저 정보 추가
INSERT INTO `play_diary_app`.`user` (`email`, `password`, `nickname`, `introduction`, `registerType`) VALUES ('kimminhyuk02@naver.com', '$2a$11$Yk1bws99n8goe/FkAsN64ufg44bO4qie5o9PfbTfrJVDANucUPDSC', '닉네임', '나의 자기소개', '1');
INSERT INTO `play_diary_app`.`user` (`email`, `password`, `nickname`, `introduction`, `registerType`, `profileImgUrl`) VALUES ('kimminhyuk0719@gmail.com', '', '타 유저', '타 유저 자기소개', '2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_6cwV9Py2-gkGyj9oxgeOOg7bU6ld9nbog&usqp=CAU');
INSERT INTO `play_diary_app`.`user` (`email`, `password`, `nickname`, `introduction`, `registerType`, `profileImgUrl`) VALUES ('user2@naver.com', '', '타 유저2', '타 유저 자기소개2', '2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_6cwV9Py2-gkGyj9oxgeOOg7bU6ld9nbog&usqp=CAU');
INSERT INTO `play_diary_app`.`user` (`email`, `password`, `nickname`, `introduction`, `registerType`) VALUES ('user3@naver.com', '', '타 유저3', '타 유저 자기소개3', '2');

-- 극장 정보 추가
INSERT INTO `play_diary_app`.`auditorium` (`id`, `name`, `size`) VALUES ('1', '블루스퀘어 신한카드홀', '1');
INSERT INTO `play_diary_app`.`auditorium` (`id`, `name`, `size`) VALUES ('2', '세종문화회관 대극장', '1');
INSERT INTO `play_diary_app`.`auditorium` (`id`, `name`, `size`) VALUES ('3', '샤롯데시어터', '2');

-- 제작사 정보 추가
INSERT INTO `play_diary_app`.`company` (`id`, `name`) VALUES ('1', '신시컴퍼니');
INSERT INTO `play_diary_app`.`company` (`id`, `name`) VALUES ('2', 'OD컴퍼니');
INSERT INTO `play_diary_app`.`company` (`id`, `name`) VALUES ('3', 'EMK');

-- 공연 정보 추가
INSERT INTO `play_diary_app`.`play` (`id`, `title`, `status`, `startAt`, `endAt`, `runtime`, `genre`, `limitedAge`, `isOpenrun`, `story`, `poster`, `companyId`, `auditoriumId`) VALUES ('1', '레베카', '1', '2022-04-15', '2022-05-06', '160분', '1', '15', '0', '재밌는 이야기', 'https://www.incheon.go.kr/comm/getImage?srvcId=IRPblprfrDspy&upperNo=9611&fileTy=IMG&fileNo=1', '1', '1');
INSERT INTO `play_diary_app`.`play` (`id`, `title`, `status`, `startAt`, `endAt`, `runtime`, `genre`, `limitedAge`, `isOpenrun`, `story`, `poster`, `companyId`, `auditoriumId`) VALUES ('2', '영웅', '1', '2022-04-16', '2022-05-16', '200분', '1', '15', '0', '재밌는 이야기', 'https://www.incheon.go.kr/comm/getImage?srvcId=IRPblprfrDspy&upperNo=9611&fileTy=IMG&fileNo=1', '1', '2');
INSERT INTO `play_diary_app`.`play` (`id`, `title`, `status`, `startAt`, `endAt`, `runtime`, `genre`, `limitedAge`, `isOpenrun`, `story`, `poster`, `companyId`, `auditoriumId`) VALUES ('3', '오페라의 유령', '1', '2022-04-16', '2022-05-16', '180분', '1', '15', '0', '재밌는 이야기', 'https://www.incheon.go.kr/comm/getImage?srvcId=IRPblprfrDspy&upperNo=9611&fileTy=IMG&fileNo=1', '2', '1');
INSERT INTO `play_diary_app`.`play` (`id`, `title`, `status`, `startAt`, `endAt`, `runtime`, `genre`, `limitedAge`, `isOpenrun`, `story`, `poster`, `companyId`, `auditoriumId`) VALUES ('4', '옥탑방 고양이', '1', '2022-04-16', '2022-05-16', '120분', '2', '15', '0', '재밌는 이야기', 'https://www.incheon.go.kr/comm/getImage?srvcId=IRPblprfrDspy&upperNo=9611&fileTy=IMG&fileNo=1', '3', '3');
INSERT INTO `play_diary_app`.`play` (`id`, `title`, `status`, `startAt`, `endAt`, `runtime`, `genre`, `limitedAge`, `isOpenrun`, `story`, `poster`, `companyId`, `auditoriumId`) VALUES ('5', '아이다', '1', '2022-04-16', '2022-05-16', '140분', '1', '15', '0', '재밌는 이야기', 'https://www.incheon.go.kr/comm/getImage?srvcId=IRPblprfrDspy&upperNo=9611&fileTy=IMG&fileNo=1', '3', '3');

-- 

