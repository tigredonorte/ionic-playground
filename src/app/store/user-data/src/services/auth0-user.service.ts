import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from '@gorila-bot/gorila-base';
import { Observable } from 'rxjs';

@Injectable()
export class Auth0UserService {

  constructor(
    protected apiService: ApiService
  ) { }

  public saveData(userId: string, data: any): Observable<any> {
    const url = `https://${environment.Auth0.domain}/api/v2/users/${userId}`;
    return this.apiService.doPatch(url, { user_metadata: data });
  }
}
