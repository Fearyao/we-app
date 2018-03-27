<template>
  <div class="page">
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" :indicator-active-color="activeColor">
        <div v-for="(item,index) in imgUrls" :key="index" @click="gotoDetail(index)">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
    <div class="navbar">
      <block  v-for="(item,index) in navbar" :key="index">
        <div @click="navGoto(item)" class="navbar-item">
          <img :src="item.img">
          <span>{{item.title}}</span>
        </div>
      </block>
    </div>
    <div class="show">
      div
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // userinfo
      userInfo: {},

      // swiper
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      activeColor:"#ccc",
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],

      //navbar
      navbar:[
        {
          img:"../../static/icons/yifu.png",
          url:"../shake/shake",
          title:"衣服"
        },
        {
          img:"../../static/icons/kuzi.png",
          url:"../shake/shake",
          title:"裤子"
        },
        {
          img:"../../static/icons/xiezi.png",
          url:"../shake/shake",
          title:"鞋子"
        },
        {
          img:"../../static/icons/maozi.png",
          url:"../shake/shake",
          title:"帽子"
        },
      ]
    }
  },
  components: {
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (e) {
      const url = '../home/home';
      wx.navigateTo({url});
    },
    gotoDetail(index){
      console.log(index)
    },
    navGoto(item){
      console.log(item);
      const url = item.url;
      wx.navigateTo({url});
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.page{
  background-color: #eee;
}
.slide-image {
  width: 100%;
  height: 100%;
}
.navbar{
  background-color: white;
  margin: 10px 0;
  padding: 10px;
  height: 15vw;
  display: flex;
  justify-content:space-around;
  font-size: 12px;
  text-align: center;
  color: #999;
}
.navbar-item{
  width:10vw;
  height:10vw;
}

.navbar img{
  width:100%;
  height: 100%;
}
</style>
