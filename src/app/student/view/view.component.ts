import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  studentId: number = 9;
  studentName: string = "student 9";

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (item) => {
        let studentId = item['params']['id'];
        let studentObject = this.appService.getStudentById(studentId);
        console.log('route param object: ', studentObject);
        this.studentId = studentObject['id'];
        this.studentName = studentObject['name'];
      }
    );
  }

}