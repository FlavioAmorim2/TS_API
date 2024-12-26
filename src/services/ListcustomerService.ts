import prismaClient from "../prisma";

class ListcustomerService{
    async execute(){
        const customers = await prismaClient.customer.findMany() //findmany busca todos os cadastros existentes

        return customers
    }
}

export {ListcustomerService}