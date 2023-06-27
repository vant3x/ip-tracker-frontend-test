import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IpDetailsResponse } from 'src/app/data/interfaces/ip-details.interface';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private ipDetailsSubject = new BehaviorSubject<IpDetailsResponse>({} as IpDetailsResponse);
  ipDetails$ = this.ipDetailsSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setIpDetails(ipDetails: IpDetailsResponse) {
    this.ipDetailsSubject.next(ipDetails);
  }

  setLoader(loadingState: boolean) {
    this.loadingSubject.next(loadingState);
  }  
}
