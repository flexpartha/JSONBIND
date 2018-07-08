import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ReturnsJsonArrayService {

  constructor(private http: Http) {}

  getPeople(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

        return this.http.get('/data/people.json').map((res:Response) => res.json())
          // ...and calling .json() on the response to return data
          // .map((res:Response) => res.json())
          //...errors if any
          // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

@Injectable()
export class ReturnsCountryService{
  constructor(private http: Http) {}

  getCoutriesInfo():Observable<any>{
    return this.http.get('app/data/countries.json').map((res:Response) => res.json())
    // .map((res:Response) => res.json())
    //...errors if any
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

@Injectable()
export class ReturnsCountryFlagService{
  constructor(private http: Http) {}

  getCoutryFlagInfo():Observable<any>{
    return this.http.get('app/data/countryFlag.json').map((res:Response) => res.json())
    // .map((res:Response) => res.json())
    //...errors if any
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}