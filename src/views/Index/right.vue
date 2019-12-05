<template>
  <div class="right-total">
    <div class="right-lists">
      <div class="right-list">
        <ul>
          <li
            v-for="(item, index) in arrs"
            :key="index"
            @click="change(item.id, index)"
            :style="{'color': isColor === index ? 'blue' : 'black' , 'background': isBackColor === index ? 'red' : ''}"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right-content" v-if="index === 0">
        <ul>
          <li v-for="(list, index) in lists" :key="index" @click="handleList(list.id, index)" :style="{'color': isListColor === index ? 'red' : '' , 'border-color' : isBorder === index ? 'red' : '' }">{{list.name}}</li>
        </ul>
        <p v-if="indexA === 0">我是详情页</p>
        <p v-if="indexA === 1">我是home页</p>
        <!-- <div class="right-details">
          详情页
        </div>
        <div class="right-home">
         home页
        </div>-->
      </div>
      <div class="right-contentB" v-if="index === 1">我是二</div>
      <div class="right-contentC" v-if="index === 2">我是三</div>
      <div class="right-contentD" v-if="index === 3">我是四</div>
      <div class="right-contentE" v-if="index === 4">我是五</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      indexA: 0,
      isColor: 0,
      isBackColor: 0,
      isListColor: 0,
      isBorder: 0,
      arrs: [
        { id: 1, name: "我是一" },
        { id: 2, name: "我是二" },
        { id: 3, name: "我是三" },
        { id: 4, name: "我是四" },
        { id: 5, name: "我是五" }
      ],
      lists: [{ id: 1, name: "详情页" }, { id: 2, name: "home页" }]
    };
  },
  methods: {
    change(id, index) {
      this.index = index;
      this.isBackColor = index;
      this.isColor = id - 1;
    },
    handleList(id, index) {
      this.isListColor = index;
      this.isBorder = index;
      this.indexA = index;
    }
  }
};
</script>
<style scoped lang="less">
.right-lists {
  display: flex;
  .right-content {
    width: 200px;
    height: 50px;
    ul {
      list-style: none;
      display: flex;
      li {
        width: 100px;
        height: 50px;
        border-bottom: 2px solid black;
      }
    }
  }
  .right-list {
    ul {
      list-style: none;
      li {
        height: 50px;
        width: 100px;
        background: green;
      }
    }
  }
}
</style>