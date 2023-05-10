<template>
  <div class="user">
    <div class="search">
      <BaseForm v-bind="searchFormConfig" />
    </div>

    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import BaseForm, { IForm } from '@/baseUI/form'
import { searchFormConfig } from './config/form.config'
// import { IFormItems } from '@/baseUI/form/types'

// const labelWidth = '120px'
// const itemStyle = { padding: '10px 40px' }
// const colLayout = { span: 8 }
// const formItems: IFormItems[] = [
//   {
//     type: 'input',
//     label: 'id',
//     placeholder: '请输入id',
//     rules: []
//   },
//   {
//     type: 'input',
//     label: 'card',
//     placeholder: '请输入card',
//     rules: []
//   },
//   {
//     type: 'input',
//     label: '用户名',
//     placeholder: '请输入用户名',
//     rules: []
//   },
//   {
//     type: 'password',
//     label: '密码',
//     placeholder: '请输入密码'
//   },
//   {
//     type: 'select',
//     label: '你喜欢的音乐',
//     placeholder: '请选择音乐',
//     options: [
//       {
//         label: '林俊杰',
//         value: '1'
//       },
//       {
//         label: '周杰伦',
//         value: '2'
//       },
//       {
//         label: '刀郎',
//         value: '3'
//       }
//     ]
//   },
//   {
//     type: 'datepicker',
//     label: '创建时间',
//     otherOptions: {
//       'start-placeholder': '开始时间',
//       'end-placeholder': '结束时间'
//     }
//   }
// ]
</script>

<style scoped></style>
