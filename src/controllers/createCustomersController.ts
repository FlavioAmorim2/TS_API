import { FastifyRequest, FastifyReply } from 'fastify'
import {CreateCustomersService} from '../services/createCustomersService'

class CreateCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const customerService = new CreateCustomersService();
        const customer = await customerService.execute();

        reply.send(customer)
    }
}

export {CreateCustomersController}