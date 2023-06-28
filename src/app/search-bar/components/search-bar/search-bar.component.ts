import { Component } from '@angular/core';
import { IpInfoRequestService } from 'src/app/services/ip-info-request/ip-info-request.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private ipInfoRequestService: IpInfoRequestService, private sharedService: SharedService) {}
  ipValue: string = "";


  onButtonClick() {
    console.log(this.ipValue); 
    this.sharedService.setLoader(true);

    this.ipInfoRequestService.searchIpAddress(this.ipValue).subscribe({
      next: (ipAddress) => {
        console.log(ipAddress)      },
      error: (error) => {
        this.sharedService.setLoader(false);
        console.log(error.status)
      },
      complete: () => {
        this.sharedService.setLoader(false);
      }
    }
    );
  }
}
