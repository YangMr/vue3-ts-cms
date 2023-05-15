<template>
  <div class="page-search">
    <BaseForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="button-group">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import BaseForm from '@/baseUI/form'
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formItems = props?.searchFormConfig?.formItems ?? []
const formOriginData: any = {}

// 1. 过滤出表单v-model所绑定的字段
for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)

// 2. 重置表单
const emits = defineEmits(['resetBtnClick', 'queryBtnClick'])

const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  emits('resetBtnClick')
}

// 3. 点击搜索进行查询
const handleQueryClick = () => {
  emits('queryBtnClick', formData.value)
}
</script>

<style scoped lang="less">
.button-group {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
