export interface IpDetailsResponse {
    ip?: string;
    location?: {
        city: string;
        country: string;
        timezone: string;
        region: string;
        lat: number;
        lng: number;
    };
    isp?: string;
    as?: {
        domain: string;
    }
  }