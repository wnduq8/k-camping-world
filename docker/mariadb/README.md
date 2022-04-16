```
docker exec -it mysql_db_1 bash
mysql -u root -p
create database campingworld;
grant all privileges on *.* to 'campingworld'@'%' identified by 'qkrwnduq14!';
flush privileges;
```