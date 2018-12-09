import { SimplePerson } from './person-simple.model';

export class Person extends SimplePerson {
  middleName?: string;
  ssn?: string;
  dob?: string;
  race?: string;
  sex?: string;
  height?: string;
  weight?: string;
  eyes?: string;
  hair?: string;

  constructor(firstName?: string, middleName?: string, lastName?: string, ssn?: string, dob?: string,
  race?: string, sex?: string, height?: string, weight?: string, eyes?: string, hair?: string) {
      super(firstName, lastName);
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.ssn = ssn;
      this.dob = dob;
      this.race = race;
      this.sex = sex;
      this.height = height;
      this.weight = weight;
      this.eyes = eyes;
      this.hair = hair;

  }
}
