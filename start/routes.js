"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on('/').render('login')
Route.on('/register').render('register')
Route.post("/users", "UserController.store");
Route.post("/login", "UserController.login");
Route.get("/user", "UserController.show");
Route.get("/logout", "UserController.logout");
Route.put("/edit", "UserController.update");
Route.delete("/delete", "UserController.delete");

/* RECOMMENDATIONS */
Route.post("recommendation", "RecommendationController.store");
Route.put("recommendation/:id", "RecommendationController.update").middleware(
  "auth"
);
Route.delete("/delete/:id", "RecommendationController.delete").middleware(
  "auth"
);
