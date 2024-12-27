import { FastifyRequest, FastifyReply } from 'fastify'
import { ListcustomerService } from '../services/ListcustomerService'

class ListCustomercontroller {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomcService = new ListcustomerService();

        const customers = await listCustomcService.execute();

        reply.send(customers)
    } 
}

export {ListCustomercontroller}

 