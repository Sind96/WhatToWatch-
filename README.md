# WhatToWatch?

<p align="center">
  <img src="/client/public/Logo.png"  width="500"/>
</p>

WhatToWatch is a mobile-friendly web application designed for movie enthusiasts. With WhatToWatch, you can easily browse through all your favorite movies, discover new ones, and see where they are available for streaming. The site also features a convenient favorites list and a random movie selector to help you decide what to watch when you're feeling indecisive.

## Screenshots

<p align="center">
  <img src="/client/public/Login.png" height="600" />
  <img src="/client/public/SignUp.png" height="600" /> <br>
  <img src="/client/public/Homescreen.png" height="600" />
</p>

## Getting started

In addition to the usual tools like Git, Node, and npm, you'll need the following to work on WhatToWatch. Follow the instructions below to set them up before proceeding with Installation.

**Important!**

- Obtain API key for:

  - [Streaming Availability](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/):
    Create an account to obtain an API key.

- Create a Database:
  - [MongoDB Database](https://cloud.mongodb.com/v2/667ad5e61adbb32502264a5b#/overview/)
    Set up your database account.

## Installation

1. Clone this repo and enter!

   ```bash
   git clone https://github.com/Sind96/WhatToWatch-
   ```

2. Install dependencies in both client and server folders.

   ```bash
   cd client - npm install
   cd server - npm install
   ```

3. Create a .env.local file and use the .env.local.template as a guide to add your Streaming Availability API key to the .env.local file.

4. Database Setup

- Before running the project locally, you need to create a MongoDB database named WhatToWatch.

- Inside the WhatToWatch database, create the following collections:

  ```sh
  favouritemovielists
  ```

5. Start the app on both the client and server side for it to work on your localhost.
   ```sh
   cd client - npm run dev
   cd server - nodemon
   ```

## Tech Stack

[![React][React]][React-url] [![Express.js][Express.js]][Express.js-url] [![MongoDB][Mongo-Db]][Mongo-Db-url]

## Developers

- Sindhu Yogu - [GitHub](https://github.com/cherlin)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React]: https://shields.io/badge/react-black?logo=react&style=for-the-badge
[React-url]: https://react.dev/
[Mongo-Db]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-Db-url]: https://www.mongodb.com/docs/atlas/getting-started/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
