import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { makeQueryClient } from './query-client';
import { appRouter } from './routers/_app';

import { dehydrate, HydrationBoundary, QueryClient, FetchQueryOptions } from '@tanstack/react-query';

export const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy({
    ctx: createTRPCContext,
    router: appRouter,
    queryClient: getQueryClient,

});

export function HydrateClient(props: {
    children: React.ReactNode;
}) {
    const queryClient = getQueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {props.children}
        </HydrationBoundary>
    );
};

export async function prefetch<
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
    TQueryKey extends readonly unknown[] = readonly unknown[],
>(
    queryOptions: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
) {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(queryOptions);
    return dehydrate(queryClient);
}