import * as Types from '../api-client';

import { useQuery, UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, useMutation, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { QueryMetaContext, QueryMetaContextValue } from 'react-query-swagger';
import { useContext } from 'react';
import { addMetaToOptions,  trimArrayEnd, isParameterObject, getBaseUrl } from './helpers';
export const Client = Types.ProductClient;

export type SearchProductQueryParameters = {
  search?: string | null | null;
  productType?: Types.ProductType | null | null;
  lastStockUpdatedAt?: Date | null | null;
  offset?: number | null | null;
  limit?: number | null | null;
  sortBy?: string | null | null;
  sortOrder?: Types.SortOrder | null;
};

export type GetProductQueryParameters = {
  id: number;
};

    
export function createUrl(): string {
  let url_ = getBaseUrl() + "/api/products";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function createMutationKey(): MutationKey {
  return trimArrayEnd([
      'ProductClient',
      'create',
    ]);
}

export function useCreateMutation<TContext>(options?: Omit<UseMutationOptions<Types.ProductDto, unknown, Types.CreateProductDto, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.ProductDto, unknown, Types.CreateProductDto, TContext> {
  const key = createMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((dto: Types.CreateProductDto) => Types.ProductClient.create(dto), {...options, mutationKey: key});
}
  
    
export function deleteUrl(id?: number | undefined): string {
  let url_ = getBaseUrl() + "/api/products?";
if (id === null)
    throw new Error("The parameter 'id' cannot be null.");
else if (id !== undefined)
    url_ += "id=" + encodeURIComponent("" + id) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function deleteMutationKey(id?: number | undefined): MutationKey {
  return trimArrayEnd([
      'ProductClient',
      'delete',
      id as any,
    ]);
}

export function useDeleteMutation<TContext>(id?: number | undefined, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = deleteMutationKey(id);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Types.ProductClient.delete_(id), {...options, mutationKey: key});
}
  
    
export function searchUrl(search?: string | null | undefined, productType?: Types.ProductType | null | undefined, lastStockUpdatedAt?: Date | null | undefined, offset?: number | null | undefined, limit?: number | null | undefined, sortBy?: string | null | undefined, sortOrder?: Types.SortOrder | undefined): string {
  let url_ = getBaseUrl() + "/api/products?";
if (search !== undefined && search !== null)
    url_ += "Search=" + encodeURIComponent("" + search) + "&";
if (productType !== undefined && productType !== null)
    url_ += "ProductType=" + encodeURIComponent("" + productType) + "&";
if (lastStockUpdatedAt !== undefined && lastStockUpdatedAt !== null)
    url_ += "LastStockUpdatedAt=" + encodeURIComponent(lastStockUpdatedAt ? "" + Types.formatDate(lastStockUpdatedAt) : "") + "&";
if (offset !== undefined && offset !== null)
    url_ += "Offset=" + encodeURIComponent("" + offset) + "&";
if (limit !== undefined && limit !== null)
    url_ += "Limit=" + encodeURIComponent("" + limit) + "&";
if (sortBy !== undefined && sortBy !== null)
    url_ += "SortBy=" + encodeURIComponent("" + sortBy) + "&";
if (sortOrder === null)
    throw new Error("The parameter 'sortOrder' cannot be null.");
else if (sortOrder !== undefined)
    url_ += "SortOrder=" + encodeURIComponent("" + sortOrder) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let searchDefaultOptions: UseQueryOptions<Types.PagedResultOfProductListItemDto, unknown, Types.PagedResultOfProductListItemDto> = {};
export function getSearchDefaultOptions(): UseQueryOptions<Types.PagedResultOfProductListItemDto, unknown, Types.PagedResultOfProductListItemDto> {
  return searchDefaultOptions;
};
export function setSearchDefaultOptions(options: UseQueryOptions<Types.PagedResultOfProductListItemDto, unknown, Types.PagedResultOfProductListItemDto>) {
  searchDefaultOptions = options;
}

export function searchQueryKey(dto: SearchProductQueryParameters): QueryKey;
export function searchQueryKey(search?: string | null | undefined, productType?: Types.ProductType | null | undefined, lastStockUpdatedAt?: Date | null | undefined, offset?: number | null | undefined, limit?: number | null | undefined, sortBy?: string | null | undefined, sortOrder?: Types.SortOrder | undefined): QueryKey;
export function searchQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { search, productType, lastStockUpdatedAt, offset, limit, sortBy, sortOrder,  } = params[0] as SearchProductQueryParameters;

    return trimArrayEnd([
        'ProductClient',
        'search',
        search as any,
        productType as any,
        lastStockUpdatedAt as any,
        offset as any,
        limit as any,
        sortBy as any,
        sortOrder as any,
      ]);
  } else {
    return trimArrayEnd([
        'ProductClient',
        'search',
        ...params
      ]);
  }
}
function __search(context: QueryFunctionContext) {
  return Types.ProductClient.search(
      context.queryKey[2] as string | null | undefined,       context.queryKey[3] as Types.ProductType | null | undefined,       context.queryKey[4] as Date | null | undefined,       context.queryKey[5] as number | null | undefined,       context.queryKey[6] as number | null | undefined,       context.queryKey[7] as string | null | undefined,       context.queryKey[8] as Types.SortOrder | undefined    );
}

export function useSearchQuery<TSelectData = Types.PagedResultOfProductListItemDto, TError = unknown>(dto: SearchProductQueryParameters, options?: UseQueryOptions<Types.PagedResultOfProductListItemDto, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
/**
 * @param search (optional) 
 * @param productType (optional) 
 * @param lastStockUpdatedAt (optional) 
 * @param offset (optional) Offset of list.
 * @param limit (optional) Number of requested records.
 * @param sortBy (optional) Field name for sorting in DB.
 * @param sortOrder (optional) Sort direction. Ascending or Descending.
 */
export function useSearchQuery<TSelectData = Types.PagedResultOfProductListItemDto, TError = unknown>(search?: string | null | undefined, productType?: Types.ProductType | null | undefined, lastStockUpdatedAt?: Date | null | undefined, offset?: number | null | undefined, limit?: number | null | undefined, sortBy?: string | null | undefined, sortOrder?: Types.SortOrder | undefined, options?: UseQueryOptions<Types.PagedResultOfProductListItemDto, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useSearchQuery<TSelectData = Types.PagedResultOfProductListItemDto, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.PagedResultOfProductListItemDto, TError, TSelectData> | undefined = undefined;
  let search: any = undefined;
  let productType: any = undefined;
  let lastStockUpdatedAt: any = undefined;
  let offset: any = undefined;
  let limit: any = undefined;
  let sortBy: any = undefined;
  let sortOrder: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ search, productType, lastStockUpdatedAt, offset, limit, sortBy, sortOrder,  } = params[0] as SearchProductQueryParameters);
      options = params[1];
    } else {
      [search, productType, lastStockUpdatedAt, offset, limit, sortBy, sortOrder,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.PagedResultOfProductListItemDto, TError, TSelectData>({
    queryFn: __search,
    queryKey: searchQueryKey(search, productType, lastStockUpdatedAt, offset, limit, sortBy, sortOrder),
    ...searchDefaultOptions as unknown as UseQueryOptions<Types.PagedResultOfProductListItemDto, TError, TSelectData>,
    ...options,
  });
}
/**
 * @param search (optional) 
 * @param productType (optional) 
 * @param lastStockUpdatedAt (optional) 
 * @param offset (optional) Offset of list.
 * @param limit (optional) Number of requested records.
 * @param sortBy (optional) Field name for sorting in DB.
 * @param sortOrder (optional) Sort direction. Ascending or Descending.
 */
export function setSearchData(queryClient: QueryClient, updater: (data: Types.PagedResultOfProductListItemDto | undefined) => Types.PagedResultOfProductListItemDto, search?: string | null | undefined, productType?: Types.ProductType | null | undefined, lastStockUpdatedAt?: Date | null | undefined, offset?: number | null | undefined, limit?: number | null | undefined, sortBy?: string | null | undefined, sortOrder?: Types.SortOrder | undefined) {
  queryClient.setQueryData(searchQueryKey(search, productType, lastStockUpdatedAt, offset, limit, sortBy, sortOrder),
    updater
  );
}

/**
 * @param search (optional) 
 * @param productType (optional) 
 * @param lastStockUpdatedAt (optional) 
 * @param offset (optional) Offset of list.
 * @param limit (optional) Number of requested records.
 * @param sortBy (optional) Field name for sorting in DB.
 * @param sortOrder (optional) Sort direction. Ascending or Descending.
 */
export function setSearchDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.PagedResultOfProductListItemDto | undefined) => Types.PagedResultOfProductListItemDto) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function patchUrl(id: number): string {
  let url_ = getBaseUrl() + "/api/products/{id}";

if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function patchMutationKey(id: number): MutationKey {
  return trimArrayEnd([
      'ProductClient',
      'patch',
      id as any,
    ]);
}

export function usePatchMutation<TContext>(id: number, options?: Omit<UseMutationOptions<Types.ProductDto, unknown, Types.PatchProductDto, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.ProductDto, unknown, Types.PatchProductDto, TContext> {
  const key = patchMutationKey(id);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((dto: Types.PatchProductDto) => Types.ProductClient.patch(id, dto), {...options, mutationKey: key});
}
  
    
export function getUrl(id: number): string {
  let url_ = getBaseUrl() + "/api/products/{id}";

if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let getDefaultOptions: UseQueryOptions<Types.ProductDto, unknown, Types.ProductDto> = {};
export function getGetDefaultOptions(): UseQueryOptions<Types.ProductDto, unknown, Types.ProductDto> {
  return getDefaultOptions;
};
export function setGetDefaultOptions(options: UseQueryOptions<Types.ProductDto, unknown, Types.ProductDto>) {
  getDefaultOptions = options;
}

export function getQueryKey(id: number): QueryKey;
export function getQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { id,  } = params[0] as GetProductQueryParameters;

    return trimArrayEnd([
        'ProductClient',
        'get',
        id as any,
      ]);
  } else {
    return trimArrayEnd([
        'ProductClient',
        'get',
        ...params
      ]);
  }
}
function __get(context: QueryFunctionContext) {
  return Types.ProductClient.get(
      context.queryKey[2] as number    );
}

export function useGetQuery<TSelectData = Types.ProductDto, TError = unknown>(dto: GetProductQueryParameters, options?: UseQueryOptions<Types.ProductDto, TError, TSelectData>): UseQueryResult<TSelectData, TError>;

export function useGetQuery<TSelectData = Types.ProductDto, TError = unknown>(id: number, options?: UseQueryOptions<Types.ProductDto, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useGetQuery<TSelectData = Types.ProductDto, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.ProductDto, TError, TSelectData> | undefined = undefined;
  let id: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ id,  } = params[0] as GetProductQueryParameters);
      options = params[1];
    } else {
      [id,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.ProductDto, TError, TSelectData>({
    queryFn: __get,
    queryKey: getQueryKey(id),
    ...getDefaultOptions as unknown as UseQueryOptions<Types.ProductDto, TError, TSelectData>,
    ...options,
  });
}

export function setGetData(queryClient: QueryClient, updater: (data: Types.ProductDto | undefined) => Types.ProductDto, id: number) {
  queryClient.setQueryData(getQueryKey(id),
    updater
  );
}

export function setGetDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.ProductDto | undefined) => Types.ProductDto) {
  queryClient.setQueryData(queryKey, updater);
}
    
