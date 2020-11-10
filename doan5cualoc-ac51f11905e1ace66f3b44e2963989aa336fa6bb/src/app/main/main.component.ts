import { Component, OnInit, Injector } from '@angular/core';
import {BaseComponent} from './../lib/base-component';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  list_item:any;
  constructor(injector: Injector) { 
    super(injector);
  }


ngOnInit(): void {
  Observable.combineLatest(
    this._api.get('/get-prod-all'),
  ).takeUntil(this.unsubscribe).subscribe(res => {
    this.list_item = res[0];
    setTimeout(() => {
      this.loadScripts();
    });
  }, err => { });
}


}

