# MERN Chat Application

A simple realtime chat application made using React JS, a JavaScript library for building user interfaces by Facebook, Node JS, Express JS, Socket.io, and MongoDB.

This application uses React JS to create a component-oriented user interface. All components are written in JSX and ES6 style and are combined to get a single build for production purposes using Webpack 5.

ES6 module creation along with import/export is used. Babel is used to transpile all JSX code to vanilla JavaScript code. To install all the dependencies npm is used.

Back end is implemented using Node JS, Express JS and MongoDB. Atlas, the Cloud version of MongoDB, is used. Real-time communication is done using Socket.io.

This is a responsive web application for viewing in both mobile and desktop.

## Features

- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- React JS Hooks are used with Functional components
- ES8 async/await is used
- All user details, group chats, and conversations are stored in MongoDB Atlas
- Login/Signup as well as Logout feature is added
- Guest User Login added
- Error will be shown if the credentials are not correct
- Real-time communication & notification is supported using Socket.io
- Realtime One on One chats and group chats
- Functionality and features like Search for chats, create a group, add or remove participants.
- typing... animation.
- Online / Offline status are shown.
- Read / Unread status of conversation is supported
- All the conversation are stored in the database i.e. persistent
- Group Admin can be distinguished with a different color
- Close/Leave Group feature added
- Hover over chats to see the time the message created at.

## Tech Stack

MongoDB, Express, React, Node, Socket.IO, Chakra-UI

## Hosted/Deployed

https://mern-chat-app-p4.herokuapp.com/

## Usage

Test users:

| Email             | Password |
| ----------------- | -------- |
| guest@example.com | 123456   |

Clone the repository:

git clone https://github.com/weilianglee87/mern-chat-app.git

## Env Variables:

Create a .env file in the root and add the following

- NODE_ENV = production
- PORT = 5000
- MONGO_URI = <yourMongoDbUri>
- JWT_SECRET = <yourSecret>

## Install Dependencies (frontend & backend):

npm install
cd frontend
npm install

Run:

Run frontend (:3000) & backend (:5000)
