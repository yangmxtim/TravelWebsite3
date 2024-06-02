<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(crumb, index) in breadcrumbs" :key="index">
          <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.path">{{ crumb.meta.breadcrumb }}</router-link>
          <span v-else>{{ crumb.meta.breadcrumb }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const breadcrumbs = computed(() => {
    const matchedRoutes = route.matched;
    const crumbs = [];
  
    matchedRoutes.forEach((route, index) => {
      const breadcrumb = {
        path: matchedRoutes.slice(0, index + 1).reduce((acc, cur) => {
          return acc + (cur.path === '/' ? '' : '/' + cur.path);
        }, ''),
        meta: route.meta
      };
      crumbs.push(breadcrumb);
    });
  
    return crumbs;
  });
  </script>
  
  <style scoped>
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.375rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
  </style>