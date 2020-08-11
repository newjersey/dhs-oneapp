# OneApp Development Prototype Database

## To start the database:

```
docker-compose up -d
```

The Docker container will start Oracle 12c, create the `oneapp` tablespace, and import the development database.

### To watch the database start up:

```
docker logs oneapp-oracle-12c --follow
```

### After the database is running (may take ~5 minutes on first run), the connection details are as follows:
```
hostname: localhost
port: 1521
sid: xe
service name: xe
username: system
password: oracle
```

## To stop the database:

```
docker stop oneapp-oracle-12c
```

## To clear and rebuild the database

```
docker-compose down
```