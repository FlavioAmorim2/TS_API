import { FastifyRequest, FastifyReply } from 'fastify'
import {CreateCustomersService} from '../services/createCustomersService'

class CreateCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, email} = request.body as { name: string, email: string};

        const customerService = new CreateCustomersService();
        const customer = await customerService.execute({ name, email });

        reply.send(customer)
    }
}

export {CreateCustomersController}