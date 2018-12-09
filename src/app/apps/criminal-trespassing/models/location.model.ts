import { Address } from './address.model';

export class Location {
  name?: string;
  address?: Address = new Address();

  constructor(name?: string, address: Address = new Address()) {
    this.name = name;
    this.address = address;
  }
}
