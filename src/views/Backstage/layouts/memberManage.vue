<template>
  qwerwqr
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template #default="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template #default="scope">
          <span>{{ parseTime(scope.row.timestamp, '{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Author">
        <template #default="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template #default="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>

      <el-table-column class="status-col" label="Status" width="110">
        <template #default="{ row }">
          <el-tag :type="statusFilter(row.status)">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template #default="{ row }">
          <router-link :to="'/example/edit/'+row.id" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template #default="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-show="total > 0"
      :total="total"
      :page-size="listQuery.limit"
      :current-page="listQuery.page"
      layout="total, sizes, prev, pager, next, jumper"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElTable, ElTableColumn, ElButton, ElTag, ElPagination } from 'element-plus'
import svgIcon from '@/components/SvgIcon/index.vue' // 假設 svgIcon 組件在這裡

const list = ref([])
const listLoading = ref(true)
const total = ref(0)
const listQuery = ref({
  page: 1,
  limit: 20
})

const router = useRouter()

const fetchData = async () => {
  listLoading.value = true
  try {
    // 模擬 API 請求
    const response = {
      data: {
        items: [
          { id: 1, timestamp: 1388534400000, author: 'Sarah', importance: 2, status: 'published', title: 'Trnvqow Efqiwj Wdqwv Ximkdfgxmx Qobnqhg Beyfc Byetfc Ilgwobzx Zrw' },
          { id: 2, timestamp: 673919940000, author: 'Richard', importance: 2, status: 'published', title: 'Avqqot Xoynsxe Xfhecv Xhbrg Nwlsdgm Wrss' },
          { id: 3, timestamp: 1168041335000, author: 'David', importance: 3, status: 'draft', title: 'Yuorhqqd Nupion Uwmvpn Xwvrnm Zlcjrlyf Xilmvdn Suggo Ikzgcycij Novftkvlwv Drwiqwrm' },
          // 添加更多假數據以填充表格
        ],
        total: 100
      }
    }
    list.value = response.data.items
    total.value = response.data.total
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    listLoading.value = false
  }
}

const handlePageChange = (page) => {
  listQuery.value.page = page
  fetchData()
}

const parseTime = (time, format) => {
  const date = new Date(time)
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds()
  }
  return format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
    let value = formatObj[key]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}

const statusFilter = (status) => {
  const statusMap = {
    published: 'success',
    draft: 'info',
    deleted: 'danger'
  }
  return statusMap[status]
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.app-container {
  padding: 20px;
}
</style>
