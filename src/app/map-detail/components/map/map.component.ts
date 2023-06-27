import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, icon, marker, tileLayer } from 'leaflet';
import { IpDetailsResponse } from 'src/app/data/interfaces/ip-details.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map!: Map;
  private markerIcon!: any;
  ipDetails: IpDetailsResponse = {};

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.markerIcon = icon({
      iconUrl: './assets/images/icons/icon-location.svg',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });

   this.sharedService.ipDetails$.subscribe(ipDetails => {
      this.ipDetails = ipDetails;
      if (ipDetails.location) {
        if (!this.map) {
          this.createMap(ipDetails.location.lat, ipDetails.location.lng);
        } else {
          this.updateMapMarker(ipDetails.location.lat, ipDetails.location.lng);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  createMap(lat: number, lng: number): void {
    this.map = new Map(this.mapContainer.nativeElement).setView([lat, lng], 16);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);
    this.addMapMarker(lat, lng);
  }

  updateMapMarker(lat: number, lng: number): void {
    this.map.setView([lat, lng], this.map.getZoom());
    this.updateMarkerPosition(lat, lng);
  }

  addMapMarker(lat: number, lng: number): void {
    marker([lat, lng], { icon: this.markerIcon }).addTo(this.map);
  }

  updateMarkerPosition(lat: number, lng: number): void {
    const markerInstance = marker([lat, lng], { icon: this.markerIcon });
    this.map.eachLayer(layer => {
      if (layer instanceof marker) {
        this.map.removeLayer(layer);
      }
    });
    markerInstance.addTo(this.map);
  }
}
