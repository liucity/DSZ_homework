<template>
  <div class="layout">
    <div class="header display-center">
      <div class="header-row display-center">
        <ul class="site-menu flex-sm-4 display-center">
          <li class="link-item">
            <RouterLink to="/SELL" class="link">SELL</RouterLink>
          </li>
          <li class="link-item">
            <RouterLink to="/SUPPLY" class="link">SUPPLY</RouterLink>
          </li>
          <li class="link-item">
            <RouterLink to="/LEARN" class="link">LEARN</RouterLink>
          </li>
          <li class="link-item">
            <RouterLink to="/SUPPORT" class="link">SUPPORT</RouterLink>
          </li>
        </ul>

        <div class="logo flex-sm-4 display-center">
          <img class="logo-img" :src="LogoSource" />
        </div>

        <ul class="top-links flex-sm-4 display-center">
          <li class="link-item" v-if="!store.isLogin">
            <RouterLink to="/Login" class="link">LOG IN</RouterLink>
          </li>
          <li class="link-item" v-else>
            <a class="link" @click="onLogout">LOG OUT</a>
          </li>
          <li class="link-item start">
            <RouterLink to="/START" class="link">GET STARTED -></RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="sub-header display-center">
      <div class="header-row display-center">
        <div class="flex-sm-6 display-center category-mega-menu">
          <div class="link-item categories">CATEGORIES</div>
          <div class="link-item">New arrivals</div>
          <div class="link-item">Promotions</div>
        </div>
        <div class="flex-sm-6 display-center search">
          <input class="search-input" type="text" placeholder="Search for products or suppliers..." />
        </div>
      </div>
    </div>
    <RouterView  class="content display-center"/>
  </div>
</template>

<script setup lang="ts">
import LogoSource from 'assets/logo-wb.png'
import { useGlobalStore } from 'store/index';
import router from 'router/index'

const store = useGlobalStore();

const onLogout = () => {
  store.setToken()
  router.push('Login');
}
</script>

<style scoped lang="less">
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    height: 75px;
    background-color: #942FFB;
    font-size: 18px;

    .site-menu {
      padding: 0;
      justify-content: flex-start;
      .link-item {
        padding: 0.7rem 0.8rem;
        line-height: 18px;
      }
    }

    .top-links {
      padding: 0;
      justify-content: flex-end;
      .link-item {
        padding: 0 0.7rem;
        line-height: 18px;
        height: 45px;
        .link {
          color: #fff;
          font-size: 14px;
        }
      }
    }

    .link-item {
      border-radius: 2rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 2px;
      font-weight: bold;

      &:hover{
        background: #9e3ef7;
      }
      .link {
        color: #fff;
        font-size: 12px;
      }
    }

    .logo {
      .logo-img {
        height: 75px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }

    .start {
      grid-column-gap: 6px;
      grid-row-gap: 6px;
      text-transform: uppercase;
      background-color: #591c97;
      height: 32px !important;
      &:hover {
        background-color: #591c97;
      }
    }
  }

  .sub-header {
    height: 64px;
    background-color: #3B1364;
    .category-mega-menu {
      justify-content: flex-start;
    }

    .link-item {
      font-weight: 500;
      font-size: 14px;
      color: #FFF;
      width: 100px;
      text-align: center;
      cursor: pointer;
    }

    .categories {
      position: relative;
      background-color: #7626C9;
      padding: 0 36px 0 20px;
      line-height: 40px;
      color: #ffffff;
      border-radius: 3px;
      width: auto;
      &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        margin-top: -1px;
        height: 2px;
        width: 9px;
        background: #ffffff;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      &::before {
        right: 22px;
        transform: rotate(45deg);
      }
      &::after {
        right: 17px;
        transform: rotate(-45deg);
      }
    }

    .search {
      justify-content: flex-end;
      .search-input {
        height: 44px;
        text-indent: 39px;
        background-color: #591C97;
        color: #fff;
        font-family: 'Scto Grotesk A';
        font-weight: 400;
        border: none;
        width: 100%;
        border-radius: 5px;
        vertical-align: baseline;
        font-size: 14px!important;
        margin: 10px 0;
        width: 66.666666%;
        &::placeholder {
          color: #FFF;
        }
      }
    }
  }

  .header-row {
    width:900px;
    height: 100%;
  }

  .content {
    flex: 1;
  }

  .flex-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .flex-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 720px) {
    .sub-header {
      display: none;
    }
  }
}
</style>
