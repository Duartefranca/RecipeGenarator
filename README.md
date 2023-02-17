# All About Food

<br>

## Description

Simple and easy solutions for the ingredients that you have at home.
Mix them and make a lovely and tasty dish.

<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to see random recipes.(BONUS: have and add button to click that sends me to the login page and adds the recipe to my recipes automaticaly when I log in)
- **sign up** - As a user I want to sign up on the web page so that I can add recipes, see my recipes and search for recipes.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **recipe list** - As a user I want to see the list of my recipes and add, edit or delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of recipe filter by my preferences.
- **recipe listing** - As a user I want to see more details of the recipes or add to my recipes.

<br>

## Server Routes (Back-end):

| **Method** | **Route**               | **Description**                                                              | Request - Body                                                                                     |
| ---------- | ----------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --- | --- |
| `GET`      | `/`                     | Main page route. Renders home `index`                                        | Shows a random recipe in the home page                                                             |     |
| `GET`      | `/blog`                 | Blog page route. Renders blog `blog`, random news about food nutrition (SEO) |
| `GET`      | `/login`                | Renders `login` form view.                                                   |                                                                                                    |
| `POST`     | `/login`                | Sends Login form data to the server.                                         | { email/usename, password }                                                                        |
| `GET`      | `/signup`               | Renders `signup` form view.                                                  |                                                                                                    |
| `POST`     | `/signup`               | Sends Sign Up info to the server and creates user in the DB.                 | { email/username, password }                                                                       |
| `GET`      | `/private/edit-profile` | Private route. Renders `edit-profile` form view.                             |                                                                                                    |
| `PUT`      | `/private/edit-profile` | Private route. Sends edit-profile info to server and updates user in DB.     | { email/username, password, [firstName], [lastName], [imageUrl] }                                  |
| `GET`      | `/private/recipes`      | Private route. Render the recipe view.                                       | Shows our recipes and the favorites recipes from the data base                                     |     |
| `POST`     | `/private/recipes`      | Private route. Adds a new recipe for the current user.                       | [RecipeName], [Ingredients],[MainIngredient], [imageUrl], [Preparation], [Time], [DishType]        |
| `DELETE`   | `/private/recipes/:Id`  | Private route. Deletes the existing recipe from the current user.            |                                                                                                    |
| `GET`      | `/recipes/generator`    | Renders `recipes-generator` view.                                            | Allows to search by main ingredient or all ingredients and ([Suprise Me], renders a random recipe) |     |     |
| `GET`      | `/recipes/details/:id`  | Renders `recipes-details` view for the recipe.                               |
| `POST`     | `/recipes/share/:id`    | Renders `recipes-details` allows you to share your recipes.                  |                                                                                                    |

## Models

User model

```javascript
{
  name: String,
  email: String,
  username: String,
  password: String,
  favorites: [FavoriteId],

}

```

Recipe model

```javascript
{

  name: String,
  ingredients: String,
  mainIngredient: String,
  preparation: String,
  time: Number,
  dishType: String,
  imgURL: String,
  dishCountry: String,
}

```

<!-- Example model

```javascript
{
  placeId: String,
}

``` -->

<br>

## API's

[Edamam API](https://www.edamam.com/)

<br>

## Packages

<br>

## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)

<br>

## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Duartefranca/RecipeGenerator.git)

<!-- [Deploy Link]() -->

<br>

### Slides
