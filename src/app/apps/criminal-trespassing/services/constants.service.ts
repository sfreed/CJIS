import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Injectable()
export class Constants {
  public race: SelectItem[] = [
    {label: 'Select Race', value: null},
    {label: 'Caucasian', value: 'Caucasian'},
    {label: 'African American', value: 'African American'},
    {label: 'Hispanic', value: 'Hispanic'},
    {label: 'Asian American', value: 'Asian American'},
    {label: 'American Indian', value: 'American Indian'},
    {label: 'Other', value: 'Other'}
  ];

  public sex: SelectItem[] = [
    {label: 'Select Gender', value: null},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'}
  ];

  public eyes: SelectItem[] = [
    {label: 'Select Eyes', value: null},
    {label: 'Blue', value: 'Blue'},
    {label: 'Brown', value: 'Brown'},
    {label: 'Green', value: 'Green'},
    {label: 'Hazel', value: 'Haze\''}
  ];

  public hair: SelectItem[] = [
    {label: 'Select Hair', value: null},
    {label: 'None', value: 'None'},
    {label: 'Blond', value: 'Blond'},
    {label: 'Brown', value: 'Brown'},
    {label: 'Black', value: 'Black'},
    {label: 'Red', value: 'Red'}
  ];
}
