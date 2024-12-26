import { FastifyRequest, FastifyReply } from 'fastify'
import { ListcustomerService } from '../services/ListcustomerService'

class ListCustomcontroller {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomcService = new ListcustomerService();

        const customers = await listCustomcService.execute();

        reply.send(customers)
    } 
}

export {ListCustomcontroller}

 