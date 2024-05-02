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

