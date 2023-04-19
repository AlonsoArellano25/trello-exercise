# Nextjs OpenJira App

Para correr localmente se necesita la db

```
docker-compose up -d
```

\*El -d significa **detached**

\*MongoDB URL

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo .env.template a .env

## Llenar la db con info de prueba

llamar:

```
http://localhost:3000/api/seed
```
