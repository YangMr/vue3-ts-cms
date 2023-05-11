<template>
  <div class="category">
    <PageSearch :search-form-config="categorySearchFormConfig"></PageSearch>
  </div>
</template>

<script lang="ts" setup>
import { categorySearchFormConfig } from './config/categoryForm.config'
</script>

<style scoped></style>
