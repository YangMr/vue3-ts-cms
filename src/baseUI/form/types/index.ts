type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItems {
  type: IFormType
  label?: string
  placeholder?: string
  options?: any
  otherOptions?: any
  rules?: any[]
  field: string
}

export interface IForm {
  formItems: IFormItems[]
  colLayout?: any
  itemStyle?: any
  labelWidth?: string
}
