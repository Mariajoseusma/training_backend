'use strict'

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
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    //USERS 
    Route.post('users/store', 'UserController.store');      
    Route.post('users/edit', 'UserController.edit');      
    Route.get('users/search', 'UserController.search');      
    Route.post('users/delete', 'UserController.delete');      
  }).prefix('api/v1');