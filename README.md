# Recipe For You- Application

*Explore the culinary world with our delightful recipe app built using React and Vite. Discover a world of flavors, uncover detailed ingredients, delve into nutrient insights, and master cooking instructions – all at your fingertips!*

## Languages

* **HTML5**
* **CSS**
* **TypeScript**
* **JavaScript**

## Key Features
* **Google Authentication.**
* **Searching recipes**
* **Sorting The recipe with the number of data.**
* **Implemented Filtering based on the favorite recipes**
* **Listing recipes in the user side**
* **Responsive user interface**

## Recipe Details

This application is a recipe book that contains a list of recipes. Each recipe has a name, a list of ingredients, and a set of instructions. The user can view the list of recipes, add a new recipe, edit an existing recipe, or delete a recipe.

## Tools
<ul>
    <li>TailwindCSS (Responsive Design)</li>
    <li>Implemented Google Authentication</li>
    <li>Redux (State Management Library)</li>
</ul>

## Common setup

<ol>
  <li>Create new folder</li>
  <li>Open code editor(eg. vs code) in the newly created folder </li>
  <li>Open Terminal</li>
</ol>

Enter the command in the terminal
```bash
git init 
```

Clone the repo and install the dependencies.

```bash
git clone https://github.com/Abhinavabhi123/recipe_for_you_frontend.git
cd Recipe_Frontend
```
To install the dependencies:-
```bash
    npm install
```
# Environment Variables

This project uses environment variables to store sensitive information and configuration options.

## Setup
* Create `.env` file in your project directory. 
* Add the below mentioned variables
  ```armasm
  VITE_SERVER_URL= your_backend_server /recipe
  VITE_USER_URL= your_backend_server /user/
  VITE_GOOGLE_CLIENT_ID = your_google_client_id //for google authentication
  ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the local device.<br />
Open http://localhost:5173 to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about deployment for more information.
<br>
<br>
<br>