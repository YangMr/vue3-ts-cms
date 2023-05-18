<template>
  <div>
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <QueryForm v-bind="modalFormConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import QueryForm from '@/baseUI/form'
import { defineProps, ref, defineExpose, watch } from 'vue'

const props = defineProps({
  modalFormConfig: {
    type: Object,
    default: () => ({})
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  }
})

const dialogVisible = ref(false)
const formData = ref<any>({})

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalFormConfig.formItems) {
      console.log('item====>', item)
      if (Object.keys(newValue).length > 0) {
        formData.value[`${item.field}`] = newValue[`${item.field}`]
      } else {
        formData.value[`${item.field}`] = ''
      }
    }
    console.log('1111formData', formData)
  },
  {
    deep: true
  }
)

defineExpose({ dialogVisible })
</script>

<style scoped></style>
