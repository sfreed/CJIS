class DTO {
  error: {
    number: number;
    title: string;
    displayMessage: string;
    type: string;
    action: number;
    videoLink: string;
    helpLink: string;
    internalMessage: string;
  };
  type: string;

  size: number;

  data: [
    {
      id: string;
      person: Person;
      issueOn: Date;
      expirationOn: Date;
      ownerOrProprietorName: string;
      premisesName: string;
      officer: Person;
      cityName: string;
    }
  ];
}

class Person {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  address: Address;
}

class Address {
  houseNumber: number;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  county?: string;
}
