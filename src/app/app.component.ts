import { Component } from '@angular/core';
import { IpDetailsResponse } from './data/interfaces/ip-details.interface';
import { IpInfoRequestService } from './services/ip-info-request/ip-info-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ip-address-tracker';
  ipAddress: string = '';
  ipDetails: IpDetailsResponse = {};
  
  constructor(private ipInfoRequestService: IpInfoRequestService) {
  }
  ngOnInit(): void {
    this.ipInfoRequestService.getIpAddress().subscribe(
      ipAddress => this.ipDetails = ipAddress
    );
  }
}
