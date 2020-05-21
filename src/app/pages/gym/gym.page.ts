import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListGymRecords, selectGymRecordList } from "@app/store/gym/gym-record";
import { ListWorkouts, selectWorkoutList } from "@app/store/gym/workout";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-gym',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {
  userId = '1';
  public gymRecord$: Observable<any> = this.store.pipe(
    select(selectGymRecordList),
    tap(() => {
      if (!!this.ev) {
        this.ev.target.complete();
        this.ev = null;
      }
    })
  );
  // public workout$ = this.store.pipe(select(selectWorkoutList));
  private ev: any;
  constructor(
    private router: Router,
    private store: Store<any>
  ) { }

  public ngOnInit() {
    this.refresh();
  }

  public refresh(ev?) {
    // this.store.dispatch(new ListWorkouts(this.userId));
    this.store.dispatch(new ListGymRecords(this.userId));
    this.ev = ev;
  }

  public selectTreino(cod) {
    this.router.navigate([`gym/workout/${cod}`], {});
  }

  public selectDay(cod, index) {
    this.router.navigate([`gym/training/${cod}/${index}`], {});
  }
}
