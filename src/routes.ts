import fastify, {FastifyInstance,  FastifyPluginOptions,  FastifyRequest,  FastifyReply} from "fastify";
import { CreateCustomersController } from "./controllers/createCustomersController";
import { ListCustomercontroller } from "./controllers/ListcustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { request } from "http";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/testing", async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    });

  fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomersController().handle(request, reply)
  });

  fastify.get("/customers", async(request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomercontroller().handle(request, reply)
  });

  fastify.delete("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply)
  });

}
