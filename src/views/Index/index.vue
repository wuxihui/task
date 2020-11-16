<template>
  <div class="total">
  <div class="content">
      <Header />
      <Tabbar />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Tabbar from "@/components/tabbar.vue"
export default {
  name: "index",
  data() {
    return {
      tabs: [
        { id: 1, name: "left", href: "/left" },
        { id: 2, name: "center", href: "/right" },
        { id: 3, name: "right", href: "/center" },
        { id: 4, name: "top", href: "/top" }
      ],
      activeName: "first"
    };
    //     .el-menu-item.is-active {
    //   background: #247bb4 !important;
    // }
  },
  created() {
    console.log(525235);
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    Header,
    Tabbar
  }
};
</script>
<style scoped lang="less">
.total {
  width: 100%;
  
  
}
.content{
border-bottom: 1px solid red;
}
</style>
