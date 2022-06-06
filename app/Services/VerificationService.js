const ResourceNotFoundException = use ('App/Exceptions/ResourceNotFoundException')

class VerificationService{
    verifyResource(resource){

        if(!resource){
            throw new ResourceNotFoundException();
        }
    }
}

module.exports = new VerificationService();