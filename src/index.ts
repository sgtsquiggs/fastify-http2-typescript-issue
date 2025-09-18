import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify';

const myHandler = async (request: FastifyRequest, reply: FastifyReply) => {
	request.log.info('Hello from handler');
	reply.send({ hello: 'world' });
}

const buildServer = () => {
	const app = Fastify({ logger: true, http2: true });

	app.get('/', myHandler);

	return app;
}

const start = async () => {
	const app = buildServer();
	try {
		await app.listen({ port: 3000, host: '0.0.0.0' });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
}

start();
