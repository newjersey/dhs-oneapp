# OneApp Development Database

- [Requirements to run](#requirements-to-run)
- [To start the database](#to-start-the-database)
  - [To watch the database start up](#to-watch-the-database-start-up)
  - [Connection details](#connection-details)
- [To stop the database](#to-stop-the-database)
- [To clear and rebuild the database](#to-clear-and-rebuild-the-database)

## Requirements to run

* Docker
* Docker Compose

For directions on how to install Docker, [refer to the Docker website](https://docs.docker.com/get-docker/).

## To start the database

From the `/database` directory:

```
docker-compose up -d
```

The Docker container will start Oracle 12c, create the `oneapp` tablespace, and import the development database.

The database import will take around 5 minutes.

There will be import errors related to ASP.net users that do not exist. Those errors can safely be ignored.

### To watch the database start up

```
docker logs oneapp-db --follow
```

### Connection details
```
hostname: localhost
port: 1521
sid: xe
service name: xe
username: system
password: oracle
```

Note: The `***REMOVED***` user is also available.

## To stop the database

```
docker stop oneapp-db
```

## To clear and rebuild the database

```
docker-compose down
```