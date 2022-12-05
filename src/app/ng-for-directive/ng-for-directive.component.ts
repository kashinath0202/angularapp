import { Component } from '@angular/core';
import { Course, Movies, Student } from '../models/movies';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent{

  title: string = "Top 3 Movies";
  movies: Movies[] = [
    { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022' },
    { title: 'KGF', director: 'RockBhai', cast: 'Yash', releaseDate: '2019' }
  ]


  infoStudent:string='STUDENT DATA';

  student: Student[]=[
    {studentId:22, studentName:'Sajid',studentClass:'10th',studentMarks:98,studentResult:'Pass'},
    {studentId:33, studentName:'Pankaj',studentClass:'12th',studentMarks:91,studentResult:'Pass'},
    {studentId:44, studentName:'Ajay',studentClass:'10th',studentMarks:90,studentResult:'Pass'},
    {studentId:55, studentName:'Sachin',studentClass:'12th',studentMarks:35,studentResult:'Pass'},
    {studentId:66, studentName:'Sandip',studentClass:'10th',studentMarks:25,studentResult:'fail'}
  ]

  courseTitle:string = 'TOP COURSES'
  course:Course[]=[
    {courseName:'Angular',courseFee:50000, studentIntake:25},
    {courseName:'React',courseFee:40000, studentIntake:25},
    {courseName:'Java',courseFee:50000, studentIntake:25}
  ]



Student:any[]=[
  {name:'Sachin'},
  {name:'Sandip'},
  {name:'Sagar'},
  {name:'Ajay'},
  {name:'Sanjay'}
]



//*ngFor Using TrackBy 

 
  simple:any[];
  constructor() { 
   this.simple=[
      {id:11,
       sName:'Ajay',
       age:23,
     },
     {id:22,
       sName:'Pankaj',
       age:24,
     },
     {id:33,
       sName:'Sajid',
       age:24,
     },
     {id:44,
       sName:'Sachin',
       age:25,
     },
     {id:55,
       sName:'Sandip',
       age:26,
     },
   ]
  }

  addExtraData():void{
    this.simple=[
      {id:11,
       sName:'Ajay',
       age:23,
     },
     {id:22,
       sName:'Pankaj',
       age:24,
     },
     {id:33,
       sName:'Sajid',
       age:24,
     },
     {id:44,
       sName:'Sachin',
       age:25,
     },
     {id:55,
       sName:'Sandip',
       age:26,
     },
     {id:100,
      sName:'Onkar',
      age:50,
    },
    {id:200,
      sName:'Prashant',
      age:60,
    }
   ]
  }

    trackById(index:number,simple:any):string{
       return simple.id
    }
}

// *ngFor Using Grouping  
