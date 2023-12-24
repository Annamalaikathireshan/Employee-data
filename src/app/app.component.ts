import { Component } from '@angular/core';
import employeeData from '../assets/employeeData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'employee-datax';
  empData = employeeData.emp;
}

