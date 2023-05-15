<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
      </slot>
      <div class="handle">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table
      v-bind="childrenProps"
      @selection-change="handleSelectionChange"
      :data="listData"
      border
      style="width: 100%"
    >
      <el-table-column
        v-if="showExpandColumn"
        align="center"
        type="expand"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showSelectionColumn"
        align="center"
        type="selection"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        label="序号"
        align="center"
        type="index"
        width="60"
      >
      </el-table-column>
      <template v-for="(item, index) in propList" :key="index">
        <el-table-column v-bind="item">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  propList: {
    type: Array,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectionColumn: {
    type: Boolean,
    default: false
  },
  showExpandColumn: {
    type: Boolean,
    default: false
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits(['selectionChange', 'update:page'])
const handleSelectionChange = (data: any) => {
  emits('selectionChange', data)
}

const handleCurrentChange = (currentPage: number | string) => {
  console.log('page=>', currentPage)
  emits('update:page', { ...props.page, currentPage })
}
const handleSizeChange = (pageSize: number | string) => {
  console.log('size=>', pageSize)
  emits('update:page', { ...props.page, pageSize })
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  padding: 0 5px;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  .el-pagination {
    text-align: right;
  }
}
</style>
