import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  constructor() { }

  ngOnInit(): void {
    let intervalObservable = new Observable<number>(subscriber => {
      let counter = 0;
      let intervalTimer = setInterval(() => subscriber.next(counter++), 500);
      setTimeout(() => clearInterval(intervalTimer), 5000);
    });
    setTimeout(() =>
      this.subscription = intervalObservable.subscribe(data => console.log(data + " First")),
      1000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
