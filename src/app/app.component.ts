import { Component } from '@angular/core';
import { IpDetailsResponse } from './data/interfaces/ip-details.interface';
import { IpInfoRequestService } from './services/ip-info-request/ip-info-request.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ip-address-tracker';
  ipAddress: string = '';
  ipDetails: IpDetailsResponse = {};

  constructor(
    private ipInfoRequestService: IpInfoRequestService,
    private sharedService: SharedService
  ) {}


  ngOnInit(): void {
    this.sharedService.setLoader(true);

    this.ipInfoRequestService.getIpAddress().subscribe({
      next: (ipAddress) => {
        this.ipDetails = ipAddress;
      },
      error: (error) => {
        this.sharedService.setLoader(false);
      },
      complete: () => {
        this.sharedService.setLoader(false);
      }
    });
  }
}