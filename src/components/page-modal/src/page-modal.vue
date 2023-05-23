<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      destroy-on-close
      title="新建用户"
      width="30%"
      center
    >
      <QueryForm v-bind="modalFormConfig" v-model.sync="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import QueryForm from '@/baseUI/form'
import { defineProps, ref, defineExpose, watch, defineEmits } from 'vue'
import { actionPageData } from '@/api/main/system/system'

const props = defineProps({
  modalFormConfig: {
    type: Object,
    default: () => ({})
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageUrl: {
    type: String,
    default: ''
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
        formData.value = newValue
      }
    }
  }
)

const emits = defineEmits(['action'])

const handleConfirmClick = async (url: string) => {
  let method = ''
  // http://localhost:8080/api/users POST
  // http://localhost:8080/api/users/73583 PATCH
  if (Object.keys(props.defaultInfo).length > 0) {
    method = 'PATCH'
    url = props.pageUrl + '/' + props.defaultInfo.id
  } else {
    method = 'POST'
    url = props.pageUrl
  }
  try {
    const resultData = await actionPageData(url, method, formData.value)
  } catch (e) {
    console.log(e)
  }

  dialogVisible.value = false

  emits('action')
}

defineExpose({ dialogVisible })
</script>

<style scoped></style>
