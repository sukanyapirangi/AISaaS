'use client';

import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { getQueryClient } from './query-client';
import { type appRouter } from './routers/_app';

export const { TRPCProvider, useTRPC } = createTRPCContext<appRouter>();

export function TRPCReactProvider({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient();
    const [trpcClient] = useState(() =>
        createTRPCClient<appRouter>({
            links: [
                httpBatchLink({
                    url: '/api/trpc',
                }),
            ],
        })
    );

    return (
        <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </TRPCProvider>
    );
}