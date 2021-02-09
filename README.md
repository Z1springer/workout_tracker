# workout_tracker

# Unit 17 NoSQL Homework: Workout Tracker

Modified: No starter code, tutors have the overly complex code, beware

For this assignment, you'll create a workout tracker. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## User Story

- As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with a previous workout.

The user should be able to:

- Add exercises to prvevious workout plans.

- Add new exercises to a new workout plan.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

- [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

- [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for the following two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills.

2. Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

- Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

- Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

- Don't commit half-done work, for the sake of your collaborators (and your future self!).

- Test your application before you commit to ensure functionality at every step in the development process.

We want you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

- The URL to the deployed application

- The URL to the GitHub repository

### Notes from Zac's Demo

- creates new repo, called mongoose meal planner _X_

- used express, compression, morgan, and mongoose _X_

- created two models, Meal.js(Meal model) and Week.js(Week model) and an index.js(requiring and exporting Meal and Week) _X_

- require mongoose and set Schema variable for each model _X_

- Meal had name, servings, isTasty, isHotDog, and spicyLevel

- Week had name, array of meals (meals:[{type:Schema.Types.ObjectId, ref: 'Meal'}])

- in server created const db = require("./models")

- in server, created const seedMeals for all the meals being put into the db with the parameters set above

- for each week (meals: [result[Math.floor(Math.random * result.length)].\_id])

- created connection to mongo server, in server (const mongoose = require('mongoose') & mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mealplanner"))

- in server app.get('/api/meals', (req,res)=>{db.Meal.find({}).then(dbMeals=>{res.json(dbMeals)})}) sameish for weeks

- created /populatedmeals route(app.get... (req,res)=>{db.Weeks.find({}).populate('meals')})

- tied in jquery and grabbed local script in the html and added a quick h1 for testing

- replaced in the '/' route res.send to res.sendFile('/index.html')

- then does an ajax request with the fron end script (function renderMealPlans(){$.ajax({url:"/populatedmeals",method:"GET"}).then(dbData=>{console.timeLog(dbData)})}renderMealplans())

- added to the .then(dbData) created a div in for each new object ($("<div>",{can add styling with this argument})) and set each one to a variable

- for each item in the list array it creates a new element

- when directly styling an element in the html make sure to separate out each style with a semi-colon

- deployment instructions are all in the class repo, read them closely
