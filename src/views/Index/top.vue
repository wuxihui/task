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

    <div class="form-group" v-for="(item, i) in goodList" :key="i">
      <select class="form-control" v-model="goodList[i].web">
        <option
          v-for="(option, index) in relationList"
          :key="index"
          :value="option.id"
          >{{ option.typename }}
        </option>
      </select>
      <input type="text" v-model="goodList[i].num" placeholder="请添加数量" />
      <span @click="deletes(i)" style="margin-left: 20px; color: #E53F24;"
        >删除</span
      >
    </div>
    <span @click="add" style="margin-left: 500px;">添加</span>
    <!-- <div v-for="(v, i) in list" :key="i">
      <div
        class="form-group  m-form__group row"
        style="padding-top: 15px;padding-bottom: 15px;"
      >
        <label class="col-form-label col-lg-2 col-sm-12"
          >联系人类型 <span style="color: #F00">*</span>
        </label>
        <div class="col-lg-3">
          <select
            class="form-control m-input&#45;&#45;fixed"
            v-model="list[i].contactType"
          >
            <option
              v-for="(option, index) in contacttype_arr"
              :key="index"
              :value="option.id"
              >{{ option.typename }}
            </option>
          </select>
        </div>
        <label class="col-form-label col-lg-2 col-sm-12">
          数量<span style="color: #F00">*</span></label
        >
        <div class="col-lg-3">
          <input
            type="text"
            v-model="list[i].number"
            class="form-control m-input&#45;&#45;fixed"
            placeholder=""
          />
        </div>
        <div class="col-lg-2">
          <div
            data-repeater-delete=""
            v-on:click="deleteNode(i)"
            style="margin-left: 35px;"
            class="btn-sm btn btn-danger m-btn m-btn&#45;&#45;icon m-btn&#45;&#45;pill"
          >
            <span>
              <span> 删除 </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="m-form__group form-group row">
      <label class="col-lg-4 col-form-label"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
      >
      <div class="col-lg-4" v-on:click="addNode()">
        <div
          data-repeater-create=""
          style="text-align: center"
          class="btn btn btn-sm btn-brand m-btn m-btn--icon m-btn--pill m-btn--wide"
        >
          <span>
            <span> 添加 </span>
          </span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      contentStyleObj: {
        height: "",
        width: ""
      },
      goodList: [{ web: "", num: "" }],
      relationList: [
        { id: 1, typename: "家人" },
        { id: 2, typename: "朋友" },
        { id: 3, typename: "同学" }
      ],
      contacttype_arr: [
        { id: 1, typename: "家人" },
        { id: 2, typename: "朋友" },
        { id: 3, typename: "同事" }
      ],
      //联系人类型数组
      list: [{ contactType: "", number: "" }]
    };
  },
  methods: {
    //添加标本div
    addNode: function() {
      this.list.push({ contactType: "", number: "" });
    },
    //删除样本div
    deleteNode: function(i) {
      this.list.splice(i, 1); //删除index为i,位置的数组元素
    },

    //删除
    deletes(i) {
      this.goodList.splice(i, 1);
    },

    //增加
    add() {
      this.goodList.push({ web: "", num: "" });
    },

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
    }
  }
};
</script>

<style scoped lang="less">
.ball {
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background: red;
}
</style>
