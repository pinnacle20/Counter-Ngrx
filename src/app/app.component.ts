import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from './states/counter/counter.selector';
import { decrement, increment, reset } from './states/counter/counter.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'counter-ngrx';

  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
