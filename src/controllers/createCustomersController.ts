import { FastifyRequest, FastifyReply } from 'fastify'
import {CreateCustomersService} from '../services/createCustomersService'

class CreateCustomersController{
    async handle(response: FastifyRequest, reply: FastifyReply){
        
        const customersService = new CreateCustomersService();
        const customer = await customersService.execute();

        reply.send(customer)
    }
}

export {CreateCustomersController}