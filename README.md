<br/>
<p align="center">
  <h3 align="center">Node Code Verifier Backend</h3>

  <p align="center">
    Node Express Project - Backend

A MERN Stack Project
    <br/>
    <br/>
  </p>
</p>



## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](images/screenshot.png)

Project build based on the MERN Stack. For this project, we are using MongoDB as databse, Express as framework for the backend, React JS for the frontend and Node.js

## Built With

Global Dependencies:

-dotenv: Loads environment variables from .env file
-express: Node.js web application framework

Development Dependencies:

"@types/express": "^4.17.17",
    "@types/jest": "^29.4.0",
    "@types/node": "^18.14.2",
    "@typescript-eslint/eslint-plugin": "^5.54.0",
    "concurrently": "^7.6.0",
    "eslint": "^8.35.0",
    "eslint-config-standard-with-typescript": "^34.0.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^15.6.1",
    "eslint-plugin-promise": "^6.1.1",
    "jest": "^29.4.3",
    "nodemon": "^2.0.20",
    "supertest": "^6.3.3",
    "ts-jest": "^29.0.5",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.5",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-node-externals": "^3.0.0",
    "webpack-shell-plugin": "^0.5.0"

* []()

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

.env : PORT= Enter PORT's number to be used.

### Installation

1. Get a free API Key at [https://example.com](https://example.com)

2. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your API in `config.js`

```JS
const API_KEY = 'ENTER YOUR API';
```
npm run {script} build\start\dev\test

"build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
    "test": "jest",
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/josh-94/node-code-verifier-backend/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/josh-94/node-code-verifier-backend/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/josh-94/node-code-verifier-backend/blob/main/LICENSE.md) for more information.

## Authors

* **Jeshua Cabanillas** - *Full Stack Web Developer * - [Jeshua Cabanillas](https://github.com/josh-94) - *Backend, Frontend, Database*

## Acknowledgements

* [MongoDB](https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path)
* [React JS](https://beta.reactjs.org/)
* [NodeJS](https://nodejs.org/es/docs/)