import { Injectable } from '@angular/core';
import { History } from '../model/history.model';
@Injectable({ providedIn: 'root' })
export class HistoryService {
  public history: History[] = [];
}
