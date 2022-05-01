# Shop-Shop

![](https://img.shields.io/badge/Database-MongoDB-darkgreen?style=flat-square&logo=mongoDB)
![](https://img.shields.io/badge/ExpressJs-grey?style=flat-square&logo=express&logoColor=%2361DAFB)
![](https://img.shields.io/badge/Front_End-React-aqua?style=flat-square&logo=react)
![](https://img.shields.io/badge/NodeJS-darkblue?style=flat-square&logo=nodedotjs)
![](https://img.shields.io/badge/GraphQL-purple?style=flat-square&logo=graphQL)
![](https://img.shields.io/badge/State-Redux-orange?style=flat-square&logo=redux)

Shop Shop is an e-commerce application that allows users to shop for various items, add these products to the shopping cart, manage the shopping cart by increasing and decreasing quantities, check out their purchases and see their order history.

This project is very similar to https://github.com/rpkrupali1/shop-shop in terms business functionality. However this has been migrated from REACT global state to Redux

# Table of contents

- [Deployed application](#deployed-application)
- [Application Details](#application-details)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

## Deployed application

Please use below link to access this application:

## Application Details

### User Story

    AS a senior engineer working on an e-commerce platform
    I WANT my platform to use Redux to manage global state instead of the Context API
    SO THAT my website's state management is taken out of the React ecosystem

### Acceptance Criteria

    GIVEN an e-commerce platform that uses Redux to manage global state
    WHEN I review the app’s store
    THEN I find that the app uses a Redux store instead of the Context API
    WHEN I review the way the React front end accesses the store
    THEN I find that the app uses a Redux provider
    WHEN I review the way the app determines changes to its global state
    THEN I find that the app passes reducers to a Redux store instead of using the Context API
    WHEN I review the way the app extracts state data from the store
    THEN I find that the app uses Redux instead of the Context API
    WHEN I review the way the app dispatches actions
    THEN I find that the app uses Redux instead of the Context API

Please check below animation to understand application functionality:
![image1](./Assets/22-state-homework-demo-01.gif)

![image2](./Assets/22-state-homework-demo-02.gif)

![image3](./Assets/22-state-homework-demo-03.gif)

## Technologies Used

We used Google API Book Engine to built and used MERN stack technology.

- React front end
- MongoDB database
- Node.js/Express.js server and API
- GraphQL API built with Apollo Server
- Deployed using Heroku
- JWT Authentication
- Redux

## Contributors

- Krupali
