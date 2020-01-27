import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {
  menudata;
  smsdata;
  constructor() { }
  getMenuJson() {
    // return this.http.get('assets/json/amain').map(res => res.json());
    // tslint:disable-next-line:max-line-length
    return this.menudata = {
      menuinfo: [
        {
          title: 'Home',
          url: '/home'
        },
        {
          title: 'Add Mobile',
          url: '/addmobile'
        },
        {
          title: 'Retail',
          url: '/retail'
        }
      ]
    };
  }
}
