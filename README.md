This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Install dependencies.

```bash
yarn install
```

## Openapi

Generate client stub.  
The openapi contract file is in [glavenus](https://github.com/Rugal/glavenus/blob/master/configuration/openapi/contract.yml), so just clone this repository and place it at parallel level of current repository.  

```bash
# if you place `glavenus` exactly as instructed.
yarn openapi
# or with complete command
openapi-generator generate \
  --skip-validate-spec --minimal-update \
  -g typescript-axios \
  -i <PATH/TO/OPENAPI/CONTRACT/FILE> \
  -o src/openapi \
```
Not done yet, the openapi contract file specified host as `localhost:8080`, but mock server bind port at `localhost:4010`.  
Just go to `src/openapi/base.ts` at line `20`, change the `BASE_PATH` to the correct port.  

## Mock server

Start mock server.  

```bash
# if you place `glavenus` exactly as instructed.
yarn mock
# or  with complete command
prism mock PATH/TO/OPENAPI/CONTRACT/FILE
```

## Start

Once everything setup correctl, start the workspace server so you will see the result at `localhost:3000` by default.  

```bash
yarn start
```