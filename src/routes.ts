import fastify, {FastifyInstance,  FastifyPluginOptions,  FastifyRequest,  FastifyReply} from "fastify";
import { CreateCustomersController } from "./controllers/createCustomersController";
import { request } from "http";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/testing", async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    });

  fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomersController().handle(request, reply)
  });

}
