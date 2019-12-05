<template>
  <div class="header-total">
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="handleSwitch('cn')">中文</el-dropdown-item>
        <el-dropdown-item @click.native="handleSwitch('en')">english</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: "heade",
  data() {
    return {};
  },
  methods: {
    handleSwitch(lang) {
      console.log(11);
      this.$i18n.locale = lang
      localStorage.setItem("lang", lang)
    }
  }
};
</script>