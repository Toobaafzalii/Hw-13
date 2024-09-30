export default interface Iprops {
    type: React.HtmlHTMLInputTypeAttribute;
    placeholder: string;
    value?: string;
    validationRule? : IvalidationRule
    name:string
    onChangeText: (value:string, error:boolean, name:string ) => void
  }

  export default  interface IvalidationRule {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    isNumber?: boolean;
    text?: string;
  }

  interface IbuttonProps {
    text: string;
  }