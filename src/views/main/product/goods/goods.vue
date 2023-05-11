<template>
  <div class="goods">
    <PageSearch :search-form-config="goodsSearchFormConfig"></PageSearch>
  </div>
</template>

<script lang="ts" setup>
import { goodsSearchFormConfig } from './config/goodsForm.config'
</script>

<style scoped></style>
