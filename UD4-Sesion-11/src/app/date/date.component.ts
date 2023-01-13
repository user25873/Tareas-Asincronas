import { Component } from '@angular/core';
import { Data } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  fecha=moment(Date.now()).format("dddd MMMM, D, YYYY");
}
