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
const { validate } = use('Validator')

Route.on('/').render('welcome')

Route.group(() => {
    //USERS 
    Route.post('users/store', 'UserController.store').validator('StoreUser');
    Route.post('users/edit', 'UserController.edit');      
    Route.post('users/search', 'UserController.search');      
    Route.post('users/delete', 'UserController.delete');     
    Route.get('users/getall', 'UserController.getall');     
  }).prefix('api/v1');