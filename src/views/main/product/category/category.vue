<template>
  <div class="category">
    <PageSearch :search-form-config="categorySearchFormConfig"></PageSearch>
    <div class="content">
      <PageContent
        pageUrl="/category"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { categorySearchFormConfig } from './config/categoryForm.config'
import { contentConfig } from './config/content.config'
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
