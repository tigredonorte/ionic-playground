import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { take } from 'rxjs/operators';
import { forEachObjIndexed } from 'ramda';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public put(url: string, body: any, header?: any): any {
    const headers = this.parseIHeader(header);
    return this.httpClient.put(this.getUrl(url), body, { headers }).pipe(take(1));
  }

  public post(url: string, body: any, header?: any): any {
    const headers = this.parseIHeader(header);
    return this.httpClient.post(this.getUrl(url), body, { headers }).pipe(take(1));
  }

  public patch(url: string, body: any, header?: any): any {
    const headers = this.parseIHeader(header);
    return this.httpClient.patch(this.getUrl(url), body, { headers }).pipe(take(1));
  }

  public get(url: string, header?: any): any {
    const headers = this.parseIHeader(header);
    return this.httpClient.get(this.getUrl(url), { headers }).pipe(take(1));
  }

  public delete(url: string, header?: any): any {
    const headers = this.parseIHeader(header);
    return this.httpClient.delete(this.getUrl(url), { headers});
  }

  public mountUrl(url: string, options: {[s: string]: any}) {
    const _url = [];
    forEachObjIndexed((value, key) => _url.push(`${key}=${value}`), options);
    return url + (_url.length === 0 ? '' : `?${_url.join('&')}`);
  }

  private getUrl(url: string) {
    return url.startsWith('http') ? url : `${environment.endpoint}/${url}`;
  }

  private parseIHeader(header?: any): HttpHeaders {
    let httpHeader = new HttpHeaders();
    if (!header || header.length === 0) {
      return httpHeader;
    }
    for (const key of Object.keys(header)) {
      httpHeader = httpHeader.append(key, header[key].toString());
    }
    return httpHeader;
  }

}
