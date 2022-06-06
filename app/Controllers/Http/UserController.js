'use strict'

const User = use('App/Models/User');
const VerificationService = use('App/Services/VerificationService')

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
        VerificationService.verifyResource(user);
        user.merge({name, surname, cellphone})
        await user.save();
        console.log(user);
        return response.status(206).json({ status: "ok" });
    }

    async search({request}){
        const {id} = request.all();
        const user = await User.find(id);
        VerificationService.verifyResource(user);
        const {name, surname, cellphone} = user;
        // return {name, surname, cellphone};
        return user;
    }

    async delete({ request, response }){
        const {id} = request.all();
        const user = await User.find(id);
        VerificationService.verifyResource(user);
        await user.delete();
        return response.status(206).json({ status: "ok" });
    }
}

module.exports = UserController
