# B-log


1.
Visual studio-г татсан байх (https://www.youtube.com/watch?v=G1-Zfr9-3zs)
1.https://www.youtube.com/watch?v=VqCgcpAypFQ        (Tutorial)



Visual Studio Terminal дээр эдгээрийг бэлдэх install хийх:
1.https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
2.https://www.youtube.com/watch?v=sJ7nDNNpOMA
3.https://www.youtube.com/watch?v=WCIYXCXMRlc
4.https://www.youtube.com/watch?v=EIQgVdoYb0M



2.
MySQl-г татсан байх (https://www.youtube.com/watch?v=GIRcpjg-3Eg)
1.https://www.youtube.com/watch?v=fHMh27nluTg         (Tutorial)






3.
Visual Studio дээр:
1.Main Folder үүсгэх (бүх file aa агуулах)
2.Main Folder дотроо 

               
              -connection (Folder) үүсгэх
                -connection.js ийг оруулна.Connection.js дотор маань Databas-тэй холбогдох холболтууд хийгдсэн байгаа. Өөр
                
              -multer-file-upload  
                -package-lock.json
                -package.json   fileе-ууд багтаж өгсөн бөгөөд эдгээрийг Terminal дээрээ npm install хийн татаж авхад үүснэ. ( https://www.youtube.com/watch?v=rg5BE2glE6U )
              -public
                 -css (бүх css file-ууд энд хадгалагдана)
                 -js (бүх js file-ууд энд хадгалагдана)
                 -photos (ашиглагдаж байгаа зургуудаа хадгална)
                 
              -routes
                 -js (бүх js file-ууд энд хадгалагдана)
        
              -uploads ( Database-тэй харьцах үед upload хийгдсэн ашиглагдсан зургууд энд хадгалагдана )
              -view (ejs file-ууд хадгалагдана)
                 -admin_layout
                    -header.ejs
                 -layout
                    -footer.ejs
                    -header.ejs
                 -user
                    -edit.ejs
                 
   -NewPage.js





4.
**Database дээр 3-н table үүсгэх**
1.create database 
2.use 



1.registerUsers table дээр хэрэглэгчийн бүртгэлийн мэдээллүүд хадгалагдах болно.

  -create table registerUsers(
rUsers_id int AUTO_INCREMENT PRIMARY KEY,
user_img varchar(100),
username varchar(45),
email varchar(45),
password varchar(45)
);


2.contact буюу хэрэглэгчийн санал хүсэлтийг хариуцна

  -create table contact(
idcontact int AUTO_INCREMENT PRIMARY KEY,
firstname varchar(200) NOT NULL,
lastname varchar(200) not null,
country varchar(200) NOT NULL,
subject varchar(200) NOT NULL
);


3.posts буюу оруулсан мэдээг хадгална.

-create table posts(
posts_id int AUTO_INCREMENT PRIMARY KEY,
file varchar(200) NOT NULL ,
d_file varchar(200),
title varchar(200) NOT NULL,
description varchar(200) NOT NULL,
d_description varchar(200) NOT NULL,
category varchar (100) NOT NULL,
date  date default null
);
  



!!!Хэрвээ DataBase тэйгээ холбогдож чадахгүй бол ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';  кодон дундаа үүнийг бичиж өгөөд ажлуулахад хангалттай.
