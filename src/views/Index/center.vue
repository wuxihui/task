<template>
  <div>
    <p>{{$t("center.Home")}}</p>
    <p>{{$t("center.details")}}</p>
    <button @click="getMoney">点击</button>
    <button @click="handleCook">存储</button>
    <button @click="handleGet">获取</button>
    <button @click="handleRemove">删除</button>
    <p>{{resMove}}</p>
    <router-link to="/top" tag="div">点我</router-link>
  </div>
</template>

<script>
import { getLogin, Remove, getItemRes } from "@/untils/auth";
export default {
  name: "center",
  inject:['reload'],
  data() {
    return {
      inputVal: 1,
      resMove: ""
    };
  },
  methods: {
    
    handleCook() {
      getLogin(this.inputVal)
    },
    handleGet() {
      getItemRes()
      this.resMove = getItemRes()
    },
    handleRemove() {
      Remove()
      this.reload()
    },
    //登录
    getMoney() {
      let para = {
        params: {
          type: 2,
          cityId: 440300,
          k: 6151574
        },
        headers: {
          " X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15598127485896990097668"}',
          "X-Host": "mall.cfg.common-banner"
        }
      };
      this.$api.login(para).then(res => {
        console.log(111);
        console.log(res);
      });
    }
  },
  created() {}
};
</script>