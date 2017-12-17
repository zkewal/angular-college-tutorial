import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    {
      'id':1,
      'name':'student 1'
    },
    {
      'id': 2,
      'name':'student 2'
    }
  ];

  constructor(
    private storageService: AppService
  ){}

  ngOnInit(){
    this.fetchStudentList();
  }

  fetchStudentList(){
    this.studentList = this.storageService.getStudentList()
    if(this.studentList === null){
      this.studentList = [];
    }
  }

  addItem(newItem:any){
    this.studentList.push({
      'id':newItem.id,
      'name':newItem.name
    });
    this.storageService.saveStudentList(this.studentList);
  }

}