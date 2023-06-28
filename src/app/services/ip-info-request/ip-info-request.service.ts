import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IpDetailsResponse } from 'src/app/data/interfaces/ip-details.interface';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root',
})
export class IpInfoRequestService {
  constructor(private http: HttpClient, private sharedService: SharedService) {}

  getIpAddress(): Observable<IpDetailsResponse> {
    return this.http
      .get<IpDetailsResponse>(
        'https://geo.ipify.org/api/v1?apiKey=at_x7TPV77kmdDcj63H4NrmdAW9yLXmF'
      )
      .pipe(
        map((response) => {
          const timezone = response.location?.timezone;
          const offset = Number(timezone?.split(':')[0]);
          response.offset = offset;
          this.sharedService.setIpDetails(response);
          return response;
        })
      );
  }

  searchIpAddress(ipValue: string): Observable<IpDetailsResponse> {
    return this.http
      .get<IpDetailsResponse>(
        `https://geo.ipify.org/api/v1?apiKey=at_x7TPV77kmdDcj63H4NrmdAW9yLXmF&ipAddress=${ipValue}`
      )
      .pipe(
        map((response) => {
          const timezone = response.location?.timezone;
          const offset = Number(timezone?.split(':')[0]);
          response.offset = offset;
          this.sharedService.setIpDetails(response);
          return response;
        })
      );

  }
}
