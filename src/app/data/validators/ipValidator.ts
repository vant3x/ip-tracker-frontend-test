import { AbstractControl, ValidatorFn } from '@angular/forms';

const ipDomainRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$/;

export function ipDomainValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value && !ipDomainRegex.test(value)) {
      return { 'ipDomainInvalid': { value: control.value } };
    }
    return null;
  };
}
