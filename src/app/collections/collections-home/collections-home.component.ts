import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 30, job: 'Engineer' },
    { name: 'Elyse', age: 29, job: 'Product Owner' }
  ];

  headers= [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
