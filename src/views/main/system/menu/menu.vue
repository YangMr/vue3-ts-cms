<template>
  <div class="menu">
    <div class="content">
      <PageContent pageUrl="/menu" :contentConfig="contentConfig"></PageContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { contentConfig } from './config/content.config'
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
