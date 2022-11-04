import * as Types from '../api-client';

//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.1.0 (NJsonSchema v10.7.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { throwException, isAxiosError } from '../api-client';
import { getAxios, getBaseUrl } from './helpers';

/**
 * Demonstrates an error response.
 */
export function throwError(  cancelToken?: CancelToken | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/error-test";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "GET",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processThrowError(_response);
    });
}

function processThrowError(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        let result400: any = null;
        let resultData400  = _responseText;
        result400 = Types.ValidationProblemDetails.fromJS(resultData400);
        return throwException("A server side error occurred.", status, _responseText, _headers, result400);

    } else if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

/**
 * Sends a dummy email
 */
export function sendEmail(  cancelToken?: CancelToken | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/send-email";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        method: "POST",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processSendEmail(_response);
    });
}

function processSendEmail(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        let result400: any = null;
        let resultData400  = _responseText;
        result400 = Types.ValidationProblemDetails.fromJS(resultData400);
        return throwException("A server side error occurred.", status, _responseText, _headers, result400);

    } else if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

/**
 * Try this in browser with language set to DE
 * @param a (optional) 
 */
export function formData(a?: number | undefined , cancelToken?: CancelToken | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/formdata";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (a === null || a === undefined)
        throw new Error("The parameter 'a' cannot be null.");
    else
        content_.append("A", a.toString());

    let options_: AxiosRequestConfig = {
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Accept": "application/json"
        },
        cancelToken
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processFormData(_response);
    });
}

function processFormData(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 400) {
        const _responseText = response.data;
        let result400: any = null;
        let resultData400  = _responseText;
        result400 = Types.ValidationProblemDetails.fromJS(resultData400);
        return throwException("A server side error occurred.", status, _responseText, _headers, result400);

    } else if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}
