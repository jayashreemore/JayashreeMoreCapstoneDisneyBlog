# JayshreeMoreyCapstoneDisneyBlogFinal
this project is a Social Media Blog about my Daughters favorite Disney movies like Frozen , Moana, Sofia the 1st, Cindrella , Tangled .....

clone the git repo and install express, mongoose and react- scripts to run this project. 

Login as a User and u can add comment , like to the  Movie posts. can subsribe and navigate to Facebook , Insta, LinkedIn .Try contact us to connect with us and we ll try best to get back to you.

I have used Express, Mongoose , react , cloudinary , mui ,
bcryptjs, body-parser, cloudinary, cookie-parser, cors, dotenv, express, jsonwebtoken,
 mongoose@5.13.9 ,morgan ,nodemon,@mui/material ,@emotion/react ,@emotion/styled ,@mui/icons-material ,@mui/x-data-grid, axios@1.1.3, formic ,yup, moment, react-dropzone, react-pro-sidebar, react-quill ,react-redux, @redux-devtools/extension ,react-router-dom, react-toastify redux

Backend routes 

//auth routes
// /api/signup
router.post("/signup", signup);

// /api/signin
router.post("/signin", signin);

// /api/signin
router.get("/logout", logout);

// /api/userprofile
router.get("/me", isAuthenticated, userProfile);

// /api/users
router.get("/users", userList);

// /api/users/:id
router.get("/user/:id", showSingleUser);

// /api/delete/user/:id
router.delete("/delete/user/:id", deleteUser);

// /api/users/:id
router.put("/update/user/:id", updateUser);

// /api/signup
router.post("/contactus", contactus);

//blog routes
router.post("/post/create", isAuthenticated, isAdmin, createPost);
router.get("/posts/show", showPost);
router.get("/post/:id", showSinglePost);
router.delete("/delete/post/:id", isAuthenticated, isAdmin, deletePost);
router.put("/update/post/:id", isAuthenticated, isAdmin, updatePost);
router.put("/comment/post/:id", isAuthenticated, addComment);
router.put("/addlike/post/:id", isAuthenticated, addLike);
router.put("/removelike/post/:id", isAuthenticated, removeLike);

// /api/signup
router.post("/subscription", subscription);


After cloning this Git repo please check both backend and front end package.json and install all the dependencies . 
BACKEND-PACKAGE.JSON
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "build": "npm i"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cloudinary": "^2.1.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "cros": "^1.0.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.5.0",
    "mongoose": "^5.13.22",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.0"
  }
}


FRONTEND-PACKAGE.JSON
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@babel/plugin-transform-private-property-in-object": "^7.24.1",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@fontsource/roboto": "^5.0.12",
    "@mui/base": "^5.0.0-beta.40",
    "@mui/icons-material": "^5.15.15",
    "@mui/material": "^5.15.15",
    "@mui/styled-engine-sc": "^6.0.0-alpha.18",
    "@mui/x-data-grid": "^7.2.0",
    "@redux-devtools/extension": "^3.3.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.1.3",
    "formik": "^2.4.5",
    "loader": "^2.1.1",
    "mdb-react-ui-kit": "^8.0.0",
    "moment": "^2.30.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.3",
    "react-pro-sidebar": "^1.1.0",
    "react-quill": "^2.0.0",
    "react-redux": "^9.1.1",
    "react-router-dom": "^6.22.3",
    "react-toastify": "^10.0.5",
    "redux": "^5.0.1",
    "redux-thunk": "^3.1.0",
    "socket.io-client": "^4.7.5",
    "styled-components": "^6.1.8",
    "web-vitals": "^2.1.4",
    "yup": "^1.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:9000",
  "devDependencies": {
    "@babel/eslint-parser": "^7.24.5",
    "@eslint/js": "^9.1.1",
    "babel-eslint": "^10.1.0",
    "globals": "^15.1.0",
    "react-scripts": "^5.0.1"
  }
}

do npm start on backend 1st , and npm start on frontend as well we usually do nodemon at back and npm run dev on front , remember this is without create react app and all file ext has to be js not mjs , once u did npm start on backend then frontend Disney Blog Webpage ll open, user need to register 1st then login to the dashboard remember ur password , u ll see movie cards , if u like it hit heart , u can add comment on it , try facebook , insta n linkedin on ABOUT US , try CONTACT US n tell us about ur fav movie i  ll try to creat ur movie card, try SUBSCRIPTION as well. 
Best luck all my friends thanks all of you. 

