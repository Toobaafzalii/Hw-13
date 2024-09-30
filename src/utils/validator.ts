import IvalidationRule from "../interface/interface"

export default function validateInput(value: string,validationRule: IvalidationRule): string {
    if (validationRule.required && !value) {
      return "Field is required";
    }
  
    if (validationRule.minLength && value.length < validationRule.minLength) {
      return `Field must be at least ${validationRule.minLength} characters`;
    }
  
    if (validationRule.maxLength && value.length > validationRule.maxLength) {
      return `Field cannot be more than ${validationRule.maxLength} characters`;
    }

    if (validationRule.isNumber && isNaN(Number(value))){
        return `Field must be filled with numbers`
    }

    if(validationRule.text && !value.includes(validationRule.text)){
        return `Field must contain "${validationRule.text}"`;
    }
    return '';
  }

