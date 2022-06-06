'use strict'

const User = use('App/Models/User');

class UserController {
    async store({request, response}){
        const { name, surname, cellphone } = request.all();
        const user = await User.create({
            name,
            surname,
            cellphone
        });
        // return response.send("ok")
        return response.status(206).json({ status: "ok" });
    }

    async edit({request, response}){
        const { id, name, surname, cellphone } = request.all();
        const user = await User.find(id);
        user.merge({name, surname, cellphone})
        await user.save();
        console.log(user);
        return response.status(206).json({ status: "ok" });
    }

    async search({request}){
        const {id} = request.all();
        const user = await User.find(id);
        const {name, surname, cellphone} = user;
        // return {name, surname, cellphone};
        return user;
    }

    async delete({ request, response }){
        const {id} = request.all();
        const user = await User.find(id);
        await user.delete();
        return response.status(206).json({ status: "ok" });
    }
}

module.exports = UserController
