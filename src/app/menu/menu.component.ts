import { JsondataService } from './../services/jsondata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuData;
  constructor(public JsonService: JsondataService) {
    this.getMenu();
   }

  ngOnInit() {
  }
  getMenu() {
    // this.common.presentLoading();
    const jsonData: any = this.JsonService.getMenuJson();
    this.menuData = jsonData.menuinfo;
    if (this.menuData) {
      console.log('menuData completed');
    } else {
      console.error('Error : Json not loaded from provider');
      // this.common.closeLoading();
    }
  }

}
