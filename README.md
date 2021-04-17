# B-log





1.Main Folder үүсгэх (бүх file aa агуулах)
2.Main Folder дотроо 

              -connection (Folder) үүсгэх
                -connection.js ийг оруулна.Connection.js дотор маань Databas-тэй холбогдох холболтууд хийгдсэн байгаа.
                
              -multer-file-upload  
                -package-lock.json
                -package.json   fileе-ууд багтаж өгсөн бөгөөд эдгээрийг Terminal дээрээ npm install хийн татаж авхад үүснэ. ( https://www.youtube.com/watch?v=rg5BE2glE6U )
              -photos (ашиглагдаж байгаа зургуудаа хадгална)
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







##########################################################################

Database дээр 3-н table үүсгэх

  -create table registerUsers(
rUsers_id int AUTO_INCREMENT PRIMARY KEY,
user_img varchar(100),
username varchar(45),
email varchar(45),
password varchar(45)
);



  -create table contact(
idcontact int AUTO_INCREMENT PRIMARY KEY,
firstname varchar(200) NOT NULL,
lastname varchar(200) not null,
country varchar(200) NOT NULL,
subject varchar(200) NOT NULL
);



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
  
