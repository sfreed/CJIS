import { Person } from './person.model';
import { Location } from './location.model';
import { SimplePerson } from './person-simple.model';

export class TrespasserWarning {
  id: string;
  trespasser?: Person = new Person();
  reportingOfficer?: SimplePerson  = new SimplePerson();
  oln?: string;
  issueDate?: string;
  expirationDate?: string;
  premisis?: Location = new Location();
}
