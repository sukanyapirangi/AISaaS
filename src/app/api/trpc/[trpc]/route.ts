import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createTRPContext } from '@/trpc/init';
import { appRouter } from '@/trpc/routers/_app';

const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: createTRPContext,
    });

export { handler as GET, handler as POST };