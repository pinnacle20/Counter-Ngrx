import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.action';

export interface CounterState {
  count: number;
}

export const initalCounterState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initalCounterState,
  on(increment, (Counterstate) => ({
    ...Counterstate,
    count: Counterstate.count + 1,
  })),
  on(decrement, (Counterstate) => ({
    ...Counterstate,
    count: Counterstate.count - 1,
  })),
  on(reset, (Counterstate) => ({ ...Counterstate, count: 0 }))
);
