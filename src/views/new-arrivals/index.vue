<template>
  <div class="content-box">
    <div class="breadcrumbs">
      Home <span class="current-path">/ New Arrivals</span>
    </div>
    <div class="display-center container-box">
      <div class="left-part">
        <div class="nav display-center">SHOP BY</div>
        <div class="nav display-center">COMPARE PRODUCTS</div>
        <div class="block-compare">You have no items to compare.</div>
      </div>
      <div class="right-part">
        <Pagination v-bind="page" @change="onChangePage"/>
        <h1 class="category-title">NEW ARRIVALS</h1>
        <Products :products="products"/>
        <Pagination v-bind="page" @change="onChangePage"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProducts } from 'apis/index';
import { onMounted, reactive, ref } from 'vue';
import Products from './components/products.vue';
import Pagination from './components/pagination.vue';
import { Product } from 'apis/model/index.model';

const products = ref<Product[]>([]);
const page = reactive({
  current: 1,
  size: 16,
  total: 0,
  pages: 0
});

const loadList = async (current: number, size: number) => {
  const { result, total, total_pages, current_page, page_size} = await getProducts({
    page_no: current,
    limit: size
  })

  products.value = result;
  Object.assign(page, {
    current: current_page,
    size: page_size,
    total,
    pages: total_pages,
  })
};

const onChangePage = (target: number) => loadList(target, page.size);

onMounted(() => loadList(page.current, page.size));
</script>

<style scoped lang="less">
.content-box {
  flex-direction: column;
  justify-content: flex-start;
}

.breadcrumbs {
  width: 1300px;
  padding: 17px 0;
  font-family: 'Segoe UI Symbol';
  font-size: 14px;
  line-height: 24px;
  .current-path {
    color: #942FFB;
  }
}

.container-box {
  align-items: flex-start;
}

.left-part {
  width: 270px;
  .nav {    
    background-color: #942FFB;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    color: #FFF;
    font-family: 'nexa_bold';
    font-size: 17px;
    margin-top: 0px;
    text-transform: uppercase;
    justify-content: flex-start;

    & ~ .nav {
      margin-top: 30px;
    }
  }

  .block-compare {
    color: #626262;
    display: block;
    font-size: 11px;
    font-weight: normal;
    line-height: 18px;
    margin: 2px 0 8px;
    text-transform: none;
  }
}

.right-part {
  width: 939px;
  margin-left: 120px;

  .category-title {
    font-size: 30px;
    color: #626262;
    font-weight: bold;
    font-family: 'nexa_bold';
    text-transform: uppercase;
    margin-bottom: 7px;
  }
}
</style>
