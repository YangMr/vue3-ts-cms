<template>
  <div class="role">
    <PageSearch :searchFormConfig="roleSearchFormConfig"></PageSearch>
    <div class="content">
      <PageContent pageUrl="/role" :contentConfig="contentConfig"></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { roleSearchFormConfig } from './config/roleForm.config'
import { contentConfig } from './config/content.config'
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
