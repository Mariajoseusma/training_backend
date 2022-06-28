'use strict'

class StoreUser {
  get rules () {
    return {
      // validation rules
      name: 'required',
      surname: 'required',
      cellphone: 'required'
    }
  }

  get messages () {
    return {
      'name.required': 'You must provide a name.',
      'surname.required': 'You must provide a surname.',
      'cellphone.required': 'You must provide a cellphone.'
    }
  }

}

module.exports = StoreUser
