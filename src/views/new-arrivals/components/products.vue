
<template>
  <div class="product-list">
    <div v-if="!products.length" class="empty-results display-center">
      please try again!
    </div>
    <div v-for="product in products" :key="product.entity_id" class="product-unit" @click.stop="onClickProduct(product)">
      <img
        :src="product.gallery[0] || ''"
        width="190"
        height="190"
        :alt="product.title"
      />

      <!-- product Name BOF -->
      <h4 class="product-name">
        <div class="title">{{product.title}}</div>
        <div class="clew-price">
          <RouterLink to="/Login">Login for More Details</RouterLink>
        </div>
      </h4>
      <!-- product Name EOF -->

      <div class="actions">
        <!--Add To Link BOF-->
        <ul class="add-to-links"></ul>
        <!--Add To Link EOF-->

        <!--Discontinued BOF-->
        <!--Discontinued EOF-->
      </div>
      <!--actions EOF -->

      <div class=""></div>
      <div class="product-sale-icon">
        <span class="default"> Free AU Shipping </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "apis/model/index.model";
import { RouterLink } from 'vue-router';

// @ts-ignore
const props = defineProps<{
  products: Product[];
}>();

const onClickProduct = (unit: Product) => {
  alert('click on ' + unit.title)
}
</script>

<style scoped lang="less">
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-unit {
  width: 234px;
  min-height: 300px;
  padding: 0 10px 0 0;
  cursor: pointer;

  .title {
    height: 43px;
    text-decoration: none;
    font-size: 13px;
    line-height: 21px;
    font-family: 'lato-regular';
    color: #535353;
    font-weight: 500;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
  }
}

.empty-results {
  color: #999;
  width: 100%;
  min-height: 200px;
}
</style>
