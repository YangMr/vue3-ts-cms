<template>
  <div class="page-search">
    <BaseForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="button-group">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import BaseForm from '@/baseUI/form'
import { ref, defineProps } from 'vue'

defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formData = ref({
  id: '',
  card: '',
  name: '',
  password: '',
  like: '',
  createTime: ''
})
</script>

<style scoped lang="less">
.button-group {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
