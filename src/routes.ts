import fastify, {FastifyInstance,  FastifyPluginOptions,  FastifyRequest,  FastifyReply} from "fastify";
import { request } from "http";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/testing", async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    });

    

}
