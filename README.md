How to replicate:

```
pnpm i
pnpm tsc
```

```
src/index.ts(11,15): error TS2769: No overload matches this call.
  Overload 1 of 3, '(path: string, handler: RouteHandlerMethod<Http2Server<typeof IncomingMessage, typeof ServerResponse, typeof Http2ServerRequest, typeof Http2ServerResponse>, ... 6 more ..., FastifyBaseLogger>): FastifyInstance<...>', gave the following error.
    Argument of type '(request: FastifyRequest, reply: FastifyReply) => Promise<void>' is not assignable to parameter of type 'RouteHandlerMethod<Http2Server<typeof IncomingMessage, typeof ServerResponse, typeof Http2ServerRequest, typeof Http2ServerResponse>, ... 6 more ..., FastifyBaseLogger>'.
      Types of parameters 'request' and 'request' are incompatible.
        Type 'FastifyRequest<RouteGenericInterface, Http2Server<typeof IncomingMessage, typeof ServerResponse, typeof Http2ServerRequest, typeof Http2ServerResponse>, ... 5 more ..., ResolveFastifyRequestType<...>>' is not assignable to type 'FastifyRequest<RouteGenericInterface, RawServerDefault, IncomingMessage, FastifySchema, FastifyTypeProviderDefault, unknown, FastifyBaseLogger, ResolveFastifyRequestType<...>>'.
          Type 'Http2ServerRequest' is missing the following properties from type 'IncomingMessage': headersDistinct, trailersDistinct
  Overload 2 of 3, '(path: string, opts: RouteShorthandOptionsWithHandler<Http2Server<typeof IncomingMessage, typeof ServerResponse, typeof Http2ServerRequest, typeof Http2ServerResponse>, ... 6 more ..., FastifyBaseLogger>): FastifyInstance<...>', gave the following error.
    Argument of type '(request: FastifyRequest, reply: FastifyReply) => Promise<void>' is not assignable to parameter of type 'RouteShorthandOptionsWithHandler<Http2Server<typeof IncomingMessage, typeof ServerResponse, typeof Http2ServerRequest, typeof Http2ServerResponse>, ... 6 more ..., FastifyBaseLogger>'.
```
