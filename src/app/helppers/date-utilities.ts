import {of} from 'rxjs';
import { delay } from 'rxjs/operators';

export const newDateNow = () => {
  return new Date();
};

export const numberSecondsOfDate = (value: Date) => {
  return value ? value.getSeconds() : 0;
};


export const delayFunc = (ms: number): Promise<any> => {
  const dummyObservable = of();
  return dummyObservable.pipe(delay(ms)).toPromise();
};
