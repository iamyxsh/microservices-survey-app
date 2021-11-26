### Prerequisites

1. Docker

### Running the app

1. Clone the repo
   `git clone git@github.com:iamyxsh/microservices-survey-app.git`
2. Navigate to the project dir `cd microservices-survey-app`
3. Run `docker compose up`
4. Microservices are you running on `http://localhost:3000`,
   `http://localhost:3001` and `http://localhost:3002`

### Microservices

# Auth

Basic app running running an API dealing with authentication - login and signup.

1. Language - Go(Lang)
2. Framework - Fiber
3. API - REST
4. Port - 3001

## API

1. `POST /api/auth/signup` - To signup into the app.

```
curl -X POST \
  http://localhost:3001/api/auth/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52a02f30-f8d6-db62-e304-5c9af4039dcf' \
  -d '{
	"name": "Yash",
	"email": "a@b.c",
	"password": "password"
}'
```

2. `POST /api/auth/signin` - To signin into the app and retreive the token.

```
curl -X POST \
  http://localhost:3001/api/auth/signin \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 2e882289-792b-040d-1648-c238c6ca7083' \
  -d '{
	"email": "a@b.c",
	"password": "password"
}'
```

# Event Bus

An event bus made from scratch for the communication between microservices.

1. Language - TypeScript (NodeJS)
2. Framework - Express
3. API - REST
4. Port - 3002

# Survey

Microservice to deal with creating and retrieving questions and answers. Visit
`http://localhost:3000/graphql` to view the schema.

1. Language - TypeScript (NodeJS)
2. Framework - NestJS
3. API - GraphQL
4. Port - 3000
