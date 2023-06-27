import { Component } from '@angular/core';
import { IpInfoRequestService } from 'src/app/services/ip-info-request/ip-info-request.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private ipInfoRequestService: IpInfoRequestService) {}
  ipValue: string = "";


  onButtonClick() {
    console.log(this.ipValue); // Accede al valor del input
    // Aquí puedes realizar las acciones necesarias con el valor del input
    this.ipInfoRequestService.searchIpAddress(this.ipValue).subscribe(
      ipAddress =>  console.log(ipAddress)
    );
  }
}
