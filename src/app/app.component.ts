import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    const promise=new Promise((resolve, reject)=>resolve('promise-->'+1));
    promise.then(v=>console.log(v));

    const obs$=new Observable((observer)=>{
      observer.next(10);
      observer.next(15);
      observer.next(20);
      observer.error('this is an error');
      observer.complete();
      setInterval(()=>{
        observer.next(25);
      }, 1000)

    })

    obs$.subscribe(data=>console.log(data));
    of(1,2,3).pipe(map((x)=>x*2)).subscribe(v=>console.log(v));


  }

  title = 'reactive-app';
}
