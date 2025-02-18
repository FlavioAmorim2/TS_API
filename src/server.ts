import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";
import { error } from "console";

 const app = fastify({logger: true})

 app.setErrorHandler((error, request, reply) =>{
    reply.code(400).send({message: error.message})
 })

 const start = async () => {

    await app.register(fastifyCors);
    await app.register(routes);

    try{
        await app.listen({port: 3333})
    } catch(err){
        process.exit(1)
    }
 }


 start()