import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IpInfoRequestService } from 'src/app/services/ip-info-request/ip-info-request.service';
import { SharedService } from 'src/app/services/shared.service';
import { ipDomainValidator } from 'src/app/data/validators/ipValidator';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchForm!: FormGroup;
  //ipValue: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private ipInfoRequestService: IpInfoRequestService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      ipValue: ['', [Validators.required, ipDomainValidator()]]
    });
  }
  onButtonClick() {
    if (this.searchForm.invalid) {
      return;
    }

    const ipValue = this.searchForm.value.ipValue;

    this.sharedService.setLoader(true);

    this.ipInfoRequestService.searchIpAddress(ipValue).subscribe({
      next: (ipAddress) => {
        console.log(ipAddress);
      },
      error: (error) => {
        this.sharedService.setLoader(false);
        console.log(error.status);
      },
      complete: () => {
        this.sharedService.setLoader(false);
      },
    });
  }
}
