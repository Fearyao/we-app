<template>
  <div class="shake-page">
    <button @click="start()">
      开始
    </button>
    <div >
      {{count}}
      <br>123
      {{speedList}}
    </div>
    <div >
      x:{{state.x}} y:{{state.y}} z:{{state.z}} <br>
      
    </div>
    <div class="time">
      {{time}}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      time: 0,
      count: 0,
      state: {},
      speedList: [],
      x : 0,
      y : 0,
      z : 0,
      lastTime:0,
      lastX : 0,
      lastY : 0,
      lastZ : 0, //此组变量分别记录对应x、y、z三轴的数值和上次的数值
      shakeSpeed : 110 //设置阈值
    }
  },

  methods: {
    start(){
      wx.stopAccelerometer()
      console.log('start');
      this.x=this.y=this.z=this.lastX=this.lastY=this.lastZ=0;
      this.time = 0;
      this.count = 0;
      wx.startAccelerometer(); 
      wx.onAccelerometerChange((res)=> {
        console.log('change');
        this.time+=1;
        if(this.time>100){
          wx.stopAccelerometer()
          console.log(this.speedList);
          for(let i=0;i<this.speedList.length;i++){
            if(this.speedList[i]&&this.speedList[i-1]&&this.speedList[i+1]){
              if(this.speedList[i]>this.speedList[i-1]&&this.speedList[i]>this.speedList[i+1]){
                this.count+=1;
              }
            }
          }
        }
        this.test(res)
      })
    },

    test(res) {
      //如果这次摇的时间距离上次摇的时间有一定间隔 才执行
      if (1) {
        var diffTime = 200; //记录时间段
        this.x = res.x; //获取x轴数值，x轴为垂直于北轴，向东为正
        this.y = res.y; //获取y轴数值，y轴向正北为正
        this.z = res.z; //获取z轴数值，z轴垂直于地面，向上为正
        //计算 公式的意思是 单位时间内运动的路程，即为我们想要的速度
        var speed = Math.abs(this.x + this.y + this.z - this.lastX - this.lastY - this.lastZ) / diffTime * 10000;
        console.log(speed)
        if (speed > this.shakeSpeed) { //如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
          
        }
        this.speedList.push(speed);
        this.lastX = this.x; //赋值，为下一次计算做准备
        this.lastY = this.y; //赋值，为下一次计算做准备
        this.lastZ = this.z; //赋值，为下一次计算做准备
      }
    },
  },
  created(){
    console.log('created')
    this.x=this.y=this.z=this.lastX=this.lastY=this.lastZ=0;
    this.time = 0;
    this.count = 0;
  },
  destroyed(){
    console.log('dis');
  }
}

</script>
<style scoped>
.shake-page{
  text-align: center;
}
</style>
