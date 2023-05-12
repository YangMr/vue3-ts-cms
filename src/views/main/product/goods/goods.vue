<template>
  <div class="goods">
    <PageSearch :search-form-config="goodsSearchFormConfig"></PageSearch>
    <div class="content">
      <PageContent
        pageUrl="/goods"
        :contentConfig="contentConfig"
      ></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { goodsSearchFormConfig } from './config/goodsForm.config'
import { contentConfig } from './config/content.config'
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
