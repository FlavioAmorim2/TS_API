import { error } from "console";
import prismaClient from "../prisma";

interface createCustomersProps{
    name: string,
    email: string
}

class CreateCustomersService{
    async execute({name, email}: createCustomersProps ){

        if (!name || !email){
            throw new Error ('Preencha todos os campos ')
        }

        const customer = await prismaClient.customer.create({ // create user
            data: {
                name,
                email,
                status:true
            }
        })

        return customer
    }
}

export {CreateCustomersService}