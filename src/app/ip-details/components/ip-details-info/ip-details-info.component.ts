import { Component } from '@angular/core';
import { IpDetailsResponse } from 'src/app/data/interfaces/ip-details.interface';
import { IpInfoRequestService } from 'src/app/services/ip-info-request/ip-info-request.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ip-details-info',
  templateUrl: './ip-details-info.component.html',
  styleUrls: ['./ip-details-info.component.css'],
})
export class IpDetailsInfoComponent {
  ipDetails: IpDetailsResponse = {};
  loading: boolean = false;

  constructor(
    private ipInfoRequestService: IpInfoRequestService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.ipDetails$.subscribe((ipDetails) => {
      this.ipDetails = ipDetails;
    });

    this.sharedService.loading$.subscribe((loadingValue) => {
      this.loading = loadingValue;
    });
  }
}
