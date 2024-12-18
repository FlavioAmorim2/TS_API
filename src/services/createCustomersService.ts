import prismaClient from "../prisma";

class CreateCustomersService{
    async execute(){
        console.log(" relaxa paizao, ta rodano")

        return {ok: true}
    }
}

export {CreateCustomersService}