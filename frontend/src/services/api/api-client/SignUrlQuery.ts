import * as Types from '../api-client';

import { useQuery, UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, useMutation, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { QueryMetaContext, QueryMetaContextValue } from 'react-query-swagger';
import { useContext } from 'react';
import { addMetaToOptions,  trimArrayEnd, isParameterObject, getBaseUrl } from './helpers';
export const Client = Types.SignUrlClient;

    
export function getSignatureUrl(): string {
  let url_ = getBaseUrl() + "/api/sign-url/signature";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let getSignatureDefaultOptions: UseQueryOptions<string, unknown, string> = {};
export function getGetSignatureDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return getSignatureDefaultOptions;
};
export function setGetSignatureDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  getSignatureDefaultOptions = options;
}

export function getSignatureQueryKey(): QueryKey;
export function getSignatureQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'SignUrlClient',
      'getSignature',
    ]);
}
function __getSignature() {
  return Types.SignUrlClient.getSignature(
    );
}

export function useGetSignatureQuery<TSelectData = string, TError = unknown>(options?: UseQueryOptions<string, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useGetSignatureQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<string, TError, TSelectData>({
    queryFn: __getSignature,
    queryKey: getSignatureQueryKey(),
    ...getSignatureDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}

export function setGetSignatureData(queryClient: QueryClient, updater: (data: string | undefined) => string, ) {
  queryClient.setQueryData(getSignatureQueryKey(),
    updater
  );
}

export function setGetSignatureDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function setSignatureCookieUrl(): string {
  let url_ = getBaseUrl() + "/api/sign-url/signature/cookie";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let setSignatureCookieDefaultOptions: UseQueryOptions<void, unknown, void> = {};
export function getSetSignatureCookieDefaultOptions(): UseQueryOptions<void, unknown, void> {
  return setSignatureCookieDefaultOptions;
};
export function setSetSignatureCookieDefaultOptions(options: UseQueryOptions<void, unknown, void>) {
  setSignatureCookieDefaultOptions = options;
}

export function setSignatureCookieQueryKey(): QueryKey;
export function setSignatureCookieQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'SignUrlClient',
      'setSignatureCookie',
    ]);
}
function __setSignatureCookie() {
  return Types.SignUrlClient.setSignatureCookie(
    );
}

export function useSetSignatureCookieQuery<TSelectData = void, TError = unknown>(options?: UseQueryOptions<void, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useSetSignatureCookieQuery<TSelectData = void, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined = undefined;
  

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<void, TError, TSelectData>({
    queryFn: __setSignatureCookie,
    queryKey: setSignatureCookieQueryKey(),
    ...setSignatureCookieDefaultOptions as unknown as UseQueryOptions<void, TError, TSelectData>,
    ...options,
  });
}

export function setSetSignatureCookieData(queryClient: QueryClient, updater: (data: void | undefined) => void, ) {
  queryClient.setQueryData(setSignatureCookieQueryKey(),
    updater
  );
}

export function setSetSignatureCookieDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: void | undefined) => void) {
  queryClient.setQueryData(queryKey, updater);
}
    
