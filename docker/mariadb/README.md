```
docker exec -it mariadb_db_1 bash
mysql -u root -p
create database campingworld;
grant all privileges on velofolio.* TO 'campingworld'@'%' identified by 'qkrwnduq14!';
flush privileges;
```