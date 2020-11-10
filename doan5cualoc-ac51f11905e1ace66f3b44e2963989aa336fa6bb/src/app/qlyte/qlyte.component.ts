import { BaseComponent } from './../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-qlyte',
  templateUrl: './qlyte.component.html',
  styleUrls: ['./qlyte.component.css']
})
export class QlyteComponent extends BaseComponent implements OnInit {

  data:any;
  item:any;
  i = 1
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this._api.get('/get-pro-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.data = res;
    
    }, err => {   });
  }
edit(id:any){
  $('#item').modal('show');
  // let id_1:string;
  // this._api.get('api/item/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
  //   this.item = res;
  //   $('#id').val(this.item.item_id);
  //   $('#ten').val(this.item.item_name);
  //   $('#mn_group').val(this.item.item_group_id);
  //   $('#anh').val(this.item.item_image);
  //   $('#gia').val(this.item.item_price);
  // },err => {});
}
open(){
  $('#').modal('show');
}
add(){
  var id = $('#id').val();
  var ten = $('#ten').val();
  var menu = $('#mn_group').val();
  var anh = $('#anh').val();
  var gia = $('#gia').val();
  let tam = {item_id:id,item_group_id:menu,item_name:ten,item_image:anh,item_price:gia};
  this._api.post('/api/item/create-item',tam).takeUntil(this.unsubscribe).subscribe(res => {
    alert('thành công');
  },err => { });
}
}
