<template>
  <div>
    <button @click="addRow" class="btn btn-success">Add new row</button>
    <div>
      Show
      <select v-model="entriesPerPage" @change="updatePagination">
        <option v-for="n in [10, 25, 50, 100]" :key="n" :value="n">{{ n }}</option>
      </select>
      entries
    </div>
    <input type="text" v-model="searchQuery" placeholder="Search" class="search-input" />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Age</th>
          <th @click="sortTable('startDate')">Start date</th>
          <th @click="sortTable('salary')">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredRows.length === 0">
          <td colspan="5">No data available in table</td>
        </tr>
        <tr v-for="(row, index) in paginatedRows" :key="index">
          <td>{{ row.name }}</td>
          <td>{{ row.position }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.startDate }}</td>
          <td>{{ row.salary }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      Showing {{ startRow }} to {{ endRow }} of {{ filteredRows.length }} entries
    </div>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(1)">First</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(totalPages)">Last</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const rows = ref([]) // 初始為空數據
const searchQuery = ref('')
const entriesPerPage = ref(10)
const currentPage = ref(1)
const sortKey = ref('')
const sortOrder = ref(1)

const filteredRows = computed(() => {
  return rows.value.filter(row => {
    return Object.values(row).some(value => value.toString().toLowerCase().includes(searchQuery.value.toLowerCase()))
  })
})

const sortedRows = computed(() => {
  return [...filteredRows.value].sort((a, b) => {
    if (!sortKey.value) return 0
    const aValue = a[sortKey.value]
    const bValue = b[sortKey.value]
    if (aValue === bValue) return 0
    return (aValue > bValue ? 1 : -1) * sortOrder.value
  })
})

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * entriesPerPage.value
  return sortedRows.value.slice(start, start + entriesPerPage.value)
})

const totalPages = computed(() => {
  return Math.ceil(filteredRows.value.length / entriesPerPage.value)
})

const startRow = computed(() => {
  return (currentPage.value - 1) * entriesPerPage.value + 1
})

const endRow = computed(() => {
  return Math.min(currentPage.value * entriesPerPage.value, filteredRows.value.length)
})

const addRow = () => {
  rows.value.push({
    name: 'John Doe',
    position: 'Developer',
    age: 30,
    startDate: '2021-01-01',
    salary: 50000
  })
}

const sortTable = key => {
  if (sortKey.value === key) {
    sortOrder.value = -sortOrder.value
  } else {
    sortKey.value = key
    sortOrder.value = 1
  }
}

const updatePagination = () => {
  currentPage.value = 1
}

const changePage = page => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.add-row-btn {
  margin-bottom: 10px;
}

.search-input {
  margin-bottom: 10px;
}

.pagination {
  display: flex;
  list-style: none;
  padding-left: 0;
  border-radius: 0.25rem;
}

.page-item {
  margin: 0 2px;
}

.page-item.disabled .page-link {
  pointer-events: none;
  cursor: not-allowed;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
</style>
