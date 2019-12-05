<template>
  <div id="app">
    <input type="button" value="动画" @click="flag = !flag" />
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
    >
      <div class="ball" v-show="flag"></div>
    </transition>

    <img src="@/img/icon-paid.png" id="imgOne" @click="handleRotate" />
    <!-- <div id="app" v-cloak>
      <div
        class="content"
        ref="contaner"
        id="contaner"
        :style="contentStyleObj"
      >
        当前元素
      </div>
      <input type="button" value="动画" @click="test" />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      // current: 0,
      contentStyleObj: {
        height: "",
        width: ""
      }
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(600px, -100px)";
      el.style.transition = "all 1s linear";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },

    //旋转
    handleRotate() {
      let imgOne = document.getElementById("imgOne");
      var speed = 7;
      var deg = 0;
      setInterval(function() {
        imgOne.style.transform = "rotate(" + deg + "deg)";
        deg += 5;
        if (deg >= 360) {
          deg = 0;
        }
      }, speed);
    },

    format_number(n) {
      var b = parseInt(n).toString();
      var len = b.length;
      if (len <= 3) {
        return b;
      }
      var r = len % 3;
      return r > 0
        ? b.slice(0, r) +
            "," +
            b
              .slice(r, len)
              .match(/\d{3}/g)
              .join(",")
        : b
            .slice(r, len)
            .match(/\d{3}/g)
            .join(",");
    },
    



    // getHeight() {
    //   let main = document.getElementById("contaner");

    //   // 获取浏览器高度，减去顶部导航栏的值，70该值也可以动态获取
    //   // this.contentStyleObj.height = window.innerHeight - 70 + "px";
    //   // this.contentStyleObj.width = window.innerWidth - 250 + "px";
    //   // this.contentStyleObj.height = main.offsetHeight + "px";
    //   // this.contentStyleObj.width = main.offsetWidth + "px";
    // },
    // test() {
    //   let container = document.getElementById("contaner");
    //   //console.log(document.getElementById("contaner"));
    //   let Height = container.offsetHeight + "px";
    //   let Width = container.offsetWidth + "px";
    //   console.log(Height, Width);
    // }
  }
  // created() {
  //   window.addEventListener("resize", this.getHeight);
  //   this.getHeight();
  //   console.log(this.contentStyleObj);
  // },

  // destroyed() {
  //   window.removeEventListener("resize", this.getHeight);
  // }
};
</script>

<style scoped lang="less">
// .content {
//   margin: 500px 0 0 400px;
// }
.ball {
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background: red;
}
// input {
//   margin-left: 200px;
// }
</style>
