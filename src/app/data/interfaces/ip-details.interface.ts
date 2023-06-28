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
    offset?: number;
    isp?: string;
    as?: {
        domain: string;
    }
  }