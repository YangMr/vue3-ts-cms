import { IForm } from '@/baseUI/form'

export const modalFormConfig: IForm = {
  labelWidth: '80px',
  itemStyle: {},
  colLayout: { span: 24 },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      rules: [
        {
          required: true,
          message: '真实姓名不能为空',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    }
  ]
}
