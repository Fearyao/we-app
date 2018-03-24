<template>
  <div class="home-page">
    <div class="item" @click="goto('../shake/shake')">
      抖动
    </div>
    <div class="item" @click="goto()">
      出拳
    </div>
    <div class="item" @click="goto()">
      跳高
    </div>
    <div class="item" @click="goto()">
      跳远
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goto(url){
      console.log(url);
      wx.navigateTo({url});
    },
  }
}

</script>
<style scoped>
.item{
  width: 50%;
  height: 50vw;
  float: left;
  line-height: 50vw;
  text-align: center;
}
.item:nth-child(1){
  background-color: rgb(31, 206, 89);
}
.item:nth-child(2){
  background-color: rgb(135, 58, 138);
}
.item:nth-child(3){
  background-color: rgb(238, 255, 0);
}
.item:nth-child(4){
  background-color: rgb(151, 245, 245);
}
</style>
