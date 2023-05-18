<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form ref="form" :model="formData" :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
              :rules="item.rules"
              :prop="item.field"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :type="item.type"
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.field]"
                  style="width: 100%"
                  :placeholder="item.placeholder"
                >
                  <el-option
                    v-for="(option, index) in item.options"
                    :key="index"
                    :label="option.label"
                    :value="option.value"
                    v-bind="item.otherOptions"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[item.field]"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, watch } from 'vue'
import { IFormItems } from '@/baseUI/form/types'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItems[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '0 0' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 4,
      lg: 6,
      md: 8,
      sm: 12,
      xs: 24
    })
  }
})
// 深拷贝 浅拷贝

console.log('props.modelValue=>', props.modelValue)

const formData = ref({ ...props.modelValue })

console.log('formData=>', formData)

const emits = defineEmits(['update:modelValue'])
watch(
  formData,
  (newValue) => {
    console.log('newValue', newValue)
    console.log('123')
    emits('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
console.log('formData', formData)
</script>

<style scoped lang="less">
.form {
  padding-top: 22px;
}
</style>
