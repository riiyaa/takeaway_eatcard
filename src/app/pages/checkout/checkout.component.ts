import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  count=1;
  actual_price=750;
  price:any
  weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  timezone = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30',
              '16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30']

  current_date = new Date();
  end_date = new Date("2022-09-01");

  deliver_option = false
  gift_option = false

  constructor() { }

  ngOnInit(): void {
    this.price = this.actual_price;
  }

  desc() {
    if(this.count==1){
      return
    }
    this.count--
    this.price = this.actual_price * this.count
  }

  inc() {
    this.count++
    this.price = this.actual_price * this.count
  }

  getDateArray = function(start:any, end:any) {
    let arr = [];
    let  dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }
  dateArray=this.getDateArray(this.current_date,this.end_date);
}
