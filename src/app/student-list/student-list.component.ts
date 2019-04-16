import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  x = [
    {
      name: 'ჯაბა',
      surname: 'ჯავახიშვილი',
      personalNumber: '12345678910'
    },
    {
      name: 'ჯაბა2',
      surname: 'ჯავახიშვილი2',
      personalNumber: '12345678919'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
