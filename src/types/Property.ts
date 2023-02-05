export interface Branding {
    brandingColors : { primary: string };
    logo: string
}

export interface PropertyResult {
    price: string;
    agency: Branding;
    id: string;
    mainImage: string;
  }
  