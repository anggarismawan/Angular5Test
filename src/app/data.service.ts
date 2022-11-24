import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private goals = new BehaviorSubject<any>([
    "The initial goal",
    "The initial goals",
  ]);
  goal = this.goals.asObservable();

  constructor() {}

  changeGoal(goal) {
    console.log(goal);
    this.goals.next(goal);
  }
}
