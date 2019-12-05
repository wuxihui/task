<template>
  <div>
    <ul>
      <li v-for="tab in tabs" :key="tab.id">
        <router-link :to="tab.href" tag="li" active-class="z-act">{{tab.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { id: 1, name: "left", href: "/left" },
        { id: 2, name: "right", href: "/right" },
        { id: 3, name: "center", href: "/center" },
        { id: 4, name: "top", href: "/top" }
      ],
    }
  }
}
</script>
<style scoped lang="less">
ul {
  display: flex;
  list-style: none;
  width: 800px;
  margin: 0 auto;
  .z-act {
    color: red;
    height: 30px;
    text-align: center;
    border-bottom: 2px solid red;
  }
  li {
    margin: 10px;
    text-align: center;
    width: 50px;
  }
}
</style>