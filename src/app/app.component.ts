import { Component } from '@angular/core';
import { AppService } from './abs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: any = new Date();
  months: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  currentMonth: any = this.months[this.date.getMonth()]; //get current month
  currentYear: any = this.date.getFullYear(); //get current year
  currentDate: any = new Date().toDateString(); //get current date

  title: any;
  eventTitle: any;
  event: any = false; //hide the event class
  list: any = true;  //show the list class
  saveEventList: any = [];
  eventList: any = [];

  constructor(
    private api: AppService
  ) {
    this.load();
  }
  dates: any;
  active(i:any) {
    if(i === this.eventList.dates) {
      let result = this.eventList.filter((e: any) => e.dates === this.dates);
      console.log(result);
    }
  }
  getValue(event: any) {
    //get the table cell value
    let value = event.target.innerHTML;
    
    this.event = true;
    const nDate = new Date();//get current date

    const year = nDate.getFullYear(); //get current year
    const month = nDate.getMonth() + 1; //get current month
    this.dates = `${year}-${month}-${value}`; //assign the date
    console.log(this.dates);
  }

  submit() {
    this.api.post('http://localhost/calendar/save.php', {
      dates: this.dates,
      title: this.eventTitle
    });
    this.load();
    // this.dates = '';
    // this.eventTitle = '';
  }
  async load() {
    let result: any = await this.api.get('http://localhost/calendar/view.php');
    this.saveEventList = result.data;
    this.eventList = this.saveEventList;
  }
  cancel() {
    this.event = false;
    let obj: any = this.eventList.filter((o: any) => o.dates);
    console.log(obj);
    let result = obj.reduce((a: any, b: any) => {
      a[b.dates] = (a[b.dates] || 0) + b.title;
      return a;
    }, {});
    console.log(result);
  }
  delete(i: any) {
    this.api.post('http://localhost/calendar/delete.php', i);
    this.load();
  }

}
