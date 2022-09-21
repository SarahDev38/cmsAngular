import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function confirmEqualsValidator(reference: string, confirm: string): ValidatorFn {
  return (ctrl: AbstractControl): null | ValidationErrors => {

    if (!ctrl.get(reference) || !ctrl.get(confirm)) {
      return {confirmEquals: 'Invalid control names'};
    }

    const refValue = ctrl.get(reference)!.value;
    const confirmValue = ctrl.get(confirm)!.value;

    if (refValue === confirmValue) {
      return null;
    }

    return {
      confirmEquals: {
        reference: refValue,
        confirm: confirmValue
      }
    }
  }
}
