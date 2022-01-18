# API testing framework for Digital Bank

This project aims at providing a base framework to build api tests for Digital Bank.

It's built around the JavaScript stack, and uses:

- [Mocha](https://mochajs.org/): Test framework
- [Chai](https://www.chaijs.com/): Assertions library
- [Axios](https://axios-http.com/): HTTP requests library
- [dotenv](https://github.com/motdotla/dotenv): Configuration management

## How to run it

After making sure you have node.js with npm installed in your system:

1. Create a `.env` file on your project's root directory with the following information. Substituting bracketed parts with your instance's values
```
BASE_URL={{hostBaseUrl}}/bank/api/v1
ADMIN_USERNAME={{apiAdminUsername}}
ADMIN_PASSWORD={{apiAdminPassword}}
```
2. `cd` into project's root
3. Run `npm install`
4. Then, for actually running the suite, excecute `npm test`

## How to add tests

Files ending in `spec.js` inside `test` directory are going to be interpreted as test files and run when using `npm test`, therefore place your test files there to extend the suite.
