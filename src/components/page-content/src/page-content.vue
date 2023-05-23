<template>
  <div class="page-content">
    <BaseTable
      :listCount="listCount"
      :listData="listData"
      :title="titleType[pageUrl]"
      v-bind="contentConfig"
      v-model:page="pageInfo"
    >
      <!--      <template #header>-->
      <!--        <h2>用户列表</h2>-->
      <!--      </template>-->
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick">新建数据</el-button>
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
      <template #handles="scope">
        <el-button
          icon="EditPen"
          @click="handleEditClick(scope.row)"
          link
          size="small"
          type="primary"
          >编辑</el-button
        >
        <el-button
          @click="handleDeleteClick(scope.row)"
          icon="Delete"
          link
          size="small"
          type="primary"
          >删除</el-button
        >
      </template>

      <template
        #[item.slotName]="scope"
        v-for="(item, index) in otherPropSlots"
        :key="index"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>

      <!--            <template #productName="scope">-->
      <!--              <div class="product-name">-->
      <!--                <el-tooltip-->
      <!--                  effect="dark"-->
      <!--                  :content="scope.row.name"-->
      <!--                  placement="top-start"-->
      <!--                >-->
      <!--                  {{ scope.row.name }}-->
      <!--                </el-tooltip>-->
      <!--              </div>-->
      <!--            </template>-->
      <!--      <template #productDescription="scope">-->
      <!--        <div class="product-name">-->
      <!--          <el-tooltip-->
      <!--            effect="dark"-->
      <!--            :content="scope.row.desc"-->
      <!--            placement="top-start"-->
      <!--          >-->
      <!--            {{ scope.row.desc }}-->
      <!--          </el-tooltip>-->
      <!--        </div>-->
      <!--      </template>-->
      <!--            <template #img="scope">-->
      <!--              <img :src="scope.row.imgUrl" width="50" height="50" alt="img" />-->
      <!--            </template>-->
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/baseUI/table'
import { ref, defineProps, defineExpose, watch, defineEmits } from 'vue'
import { deletePageData, getPageListData } from '@/api/main/system/system'

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

const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(
  () => pageInfo,
  () => {
    console.log('pageInfo==>', pageInfo.value.currentPage)
    pageParams.queryInfo.offset = (pageInfo.value.currentPage - 1) * 10
    pageParams.queryInfo.size = pageInfo.value.pageSize
    getList()
  },
  {
    deep: true
  }
)

const emits = defineEmits(['newBtnClick', 'editBtnClick'])
// 新增
const handleNewClick = () => {
  emits('newBtnClick')
}

// 编辑
const handleEditClick = (row: any) => {
  emits('editBtnClick', row)
}

// 删除
const handleDeleteClick = async (row: any) => {
  console.log('delete', row)
  try {
    const resultData = await deletePageData(props.pageUrl + '/' + row.id)
    await getList()
  } catch (e) {
    console.log(e)
  }
}

const otherPropSlots = props.contentConfig?.propList?.filter((item: any) => {
  if (item.slotName === 'status') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handles') return false

  return true
})

console.log('otherPropSlots=>', otherPropSlots)

const pageParams = {
  pageUrl: props.pageUrl + '/list',
  queryInfo: {
    // offset 页码  1 0 - 10 2 10- 20 20 -30
    offset: 0,
    size: 10
  }
}

const listData = ref<any[]>([])
const listCount = ref<number>(0)

// 获取用户列表
const getList = async (form?: any) => {
  try {
    const pageResult = await getPageListData(pageParams.pageUrl, {
      ...pageParams.queryInfo,
      ...form
    })

    const { list, totalCount } = pageResult.data
    listData.value = list
    listCount.value = totalCount
  } catch (e) {
    console.log(e)
  }
}
getList()

defineExpose({
  getList
})
</script>

<style scoped></style>
