<template>
  <div class="page-content">
    <BaseTable
      :listData="userList"
      :title="titleType[pageUrl]"
      v-bind="contentConfig"
    >
      <!--      <template #header>-->
      <!--        <h2>用户列表</h2>-->
      <!--      </template>-->
      <template #headerHandler>
        <el-button type="primary">新建数据</el-button>
      </template>
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        {{ $filter.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filter.formatTime(scope.row.updateAt) }}
      </template>
      <template #handles>
        <el-button icon="EditPen" link size="small" type="primary"
          >编辑</el-button
        >
        <el-button icon="Delete" link size="small" type="primary"
          >删除</el-button
        >
      </template>
      <template #productName="scope">
        <div class="product-name">
          <el-tooltip
            effect="dark"
            :content="scope.row.name"
            placement="top-start"
          >
            {{ scope.row.name }}
          </el-tooltip>
        </div>
      </template>
      <template #productDescription="scope">
        <div class="product-name">
          <el-tooltip
            effect="dark"
            :content="scope.row.desc"
            placement="top-start"
          >
            {{ scope.row.desc }}
          </el-tooltip>
        </div>
      </template>
      <template #img="scope">
        <img :src="scope.row.imgUrl" width="50" height="50" alt="img" />
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/baseUI/table'
import { ref, defineProps } from 'vue'
import { getPageListData } from '@/api/main/system/system'

const props = defineProps({
  contentConfig: {
    type: Object,
    required: true
  },
  pageUrl: {
    type: String,
    default: ''
  }
})

const titleType = {
  '/users': '用户列表',
  '/role': '角色列表',
  '/department': '部门列表',
  '/menu': '菜单列表',
  '/category': '类别列表',
  '/goods': '商品列表'
}

const pageParams = {
  pageUrl: props.pageUrl + '/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
}

const userList = ref<any[]>([])
const userCount = ref<number>(0)

// 获取用户列表
const getUserList = async () => {
  try {
    const pageResult = await getPageListData(
      pageParams.pageUrl,
      pageParams.queryInfo
    )

    console.log('pageResult', pageResult)
    const { list, totalCount } = pageResult.data
    userList.value = list
    userCount.value = totalCount
  } catch (e) {
    console.log(e)
  }
}
getUserList()
</script>

<style scoped>
.product-name {
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
