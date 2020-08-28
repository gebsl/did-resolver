# DID-Resolver

This is a litte web app enabling you to resolve DIDs (decentralized ids) with method "web". One will look like `did:web:{uniquestring}` 

It's not beautiful, but functional.

Using [did-resolver](https://www.npmjs.com/package/did-resolver) and [web-did-resolver](https://www.npmjs.com/package/did-resolver)

Possible to run in docker. 

## Run in docker

`npm run docker`

This command builds and runs the docker image. Open `http://localhost:8080` to view the webpage.

## Run dev server

`npm run start`

Starts webpack dev server. Open `http://localhost:8080` to view the webpage.