import * as Types from '../api-client';

import { useQuery, UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, useMutation, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { QueryMetaContext, QueryMetaContextValue } from 'react-query-swagger';
import { useContext } from 'react';
import { addMetaToOptions,  trimArrayEnd, isParameterObject, getBaseUrl } from './helpers';
export const Client = Types.VersionClient;

    
export function versionUrl(): string {
  let url_ = getBaseUrl() + "/api";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let versionDefaultOptions: UseQueryOptions<string, unknown, string> = {};
export function getVersionDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return versionDefaultOptions;
};
export function setVersionDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  versionDefaultOptions = options;
}

export function versionQueryKey(): QueryKey;
export function versionQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'VersionClient',
      'version',
    ]);
}
function __version() {
  return Types.VersionClient.version(
    );
}

/**
 * Gets the version of the service.
 * @return A string representing the version.
 */
export function useVersionQuery<TSelectData = string, TError = unknown>(options?: UseQueryOptions<string, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useVersionQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<string, TError, TSelectData>({
    queryFn: __version,
    queryKey: versionQueryKey(),
    ...versionDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}
/**
 * Gets the version of the service.
 * @return A string representing the version.
 */
export function setVersionData(queryClient: QueryClient, updater: (data: string | undefined) => string, ) {
  queryClient.setQueryData(versionQueryKey(),
    updater
  );
}

/**
 * Gets the version of the service.
 * @return A string representing the version.
 */
export function setVersionDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
