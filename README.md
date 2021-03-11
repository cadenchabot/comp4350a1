# COMP 4350 Assignment 1

Searches Stack Overflow based on user-entered tag, displaying the 10 most upvoted and 10 newest questions from the past week, ordered by creation date.
Clicking on a question expands it to its full thread, including comments, answers, and the comments on answers.

## Running locally

### `npm install`

Install all required npm packages. Run this before the first start.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Running with docker

### `docker pull cadenchabot/comp4350a1`

Pulls the docker image deployed to DockerHub.

### `docker run -p 3000:3000 cadenchabot/comp4350`

Runs the docker image on port 3000.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
