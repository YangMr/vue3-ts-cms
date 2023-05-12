<template>
  <div class="department">
    <PageSearch :searchFormConfig="departmentSearchFormConfig"></PageSearch>
    <div class="content">
      <PageContent
        pageUrl="/department"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { departmentSearchFormConfig } from './config/departmentForm.config'
import { contentConfig } from './config/content.config'
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
