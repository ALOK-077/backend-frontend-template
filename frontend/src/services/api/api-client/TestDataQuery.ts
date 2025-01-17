import * as Types from '../api-client';

import { useQuery, UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, useMutation, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { QueryMetaContext, QueryMetaContextValue } from 'react-query-swagger';
import { useContext } from 'react';
import { addMetaToOptions,  trimArrayEnd, isParameterObject, getBaseUrl } from './helpers';
export const Client = Types.TestDataClient;

export type FormDataTestDataMutationParameters = {
  a?: number | undefined ; 
};

    
export function throwErrorUrl(): string {
  let url_ = getBaseUrl() + "/error-test";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let throwErrorDefaultOptions: UseQueryOptions<string, unknown, string> = {};
export function getThrowErrorDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return throwErrorDefaultOptions;
};
export function setThrowErrorDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  throwErrorDefaultOptions = options;
}

export function throwErrorQueryKey(): QueryKey;
export function throwErrorQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'TestDataClient',
      'throwError',
    ]);
}
function __throwError() {
  return Types.TestDataClient.throwError(
    );
}

/**
 * Demonstrates an error response.
 */
export function useThrowErrorQuery<TSelectData = string, TError = unknown>(options?: UseQueryOptions<string, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useThrowErrorQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<string, TError, TSelectData>({
    queryFn: __throwError,
    queryKey: throwErrorQueryKey(),
    ...throwErrorDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}
/**
 * Demonstrates an error response.
 */
export function setThrowErrorData(queryClient: QueryClient, updater: (data: string | undefined) => string, ) {
  queryClient.setQueryData(throwErrorQueryKey(),
    updater
  );
}

/**
 * Demonstrates an error response.
 */
export function setThrowErrorDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function sendEmailUrl(): string {
  let url_ = getBaseUrl() + "/send-email";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function sendEmailMutationKey(): MutationKey {
  return trimArrayEnd([
      'TestDataClient',
      'sendEmail',
    ]);
}

/**
 * Sends a dummy email
 */
export function useSendEmailMutation<TContext>(options?: Omit<UseMutationOptions<string, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<string, unknown, void, TContext> {
  const key = sendEmailMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Types.TestDataClient.sendEmail(), {...options, mutationKey: key});
}
  
    
export function formDataUrl(): string {
  let url_ = getBaseUrl() + "/formdata";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function formDataMutationKey(): MutationKey {
  return trimArrayEnd([
      'TestDataClient',
      'formData',
    ]);
}

/**
 * Try this in browser with language set to DE
 * @param a (optional) 
 */
export function useFormDataMutation<TContext>(options?: Omit<UseMutationOptions<string, unknown, FormDataTestDataMutationParameters, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<string, unknown, FormDataTestDataMutationParameters, TContext> {
  const key = formDataMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((formDataTestDataMutationParameters: FormDataTestDataMutationParameters) => Types.TestDataClient.formData(formDataTestDataMutationParameters.a), {...options, mutationKey: key});
}
  
