import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  studentList: any[] = [];

  getStudentById(studentId: number) {
    let studentObject = null;
    let studentIndex = this.studentList.findIndex(
      (item) => {
        return item.id === studentId;
      }
    );

    if (studentIndex >= 0) {
      studentObject = this.studentList[studentIndex];
    }

    return studentObject;
  }

  getStudentList() {
    this.studentList = JSON.parse(localStorage.getItem('ldrp'));
    if (this.studentList === null) {
      this.studentList = [];
    }
    return this.studentList
  }

  saveStudentList(studentList: any[]) {
    localStorage.setItem('ldrp', JSON.stringify(studentList))
    this.studentList = studentList;
  }
}