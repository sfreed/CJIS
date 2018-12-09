export class Address {
  street_address?: string;
  city?: string;
  state?: string;
  zip?: string;

  constructor(street_address?: string, city?: string, state?: string, zip?: string ) {
    this.street_address = street_address;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}
