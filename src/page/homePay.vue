<template>
  <div>

    <el-row>
      <el-col :span="8">
        <el-card  >
          <img style="width:220px;height:100px" src="../assets/img/fruit.jpg" class="image">
          <div style="padding: 14px; text-align: left"  >
            <span>新鲜的水果</span>
            <div class="bottom clearfix">
              <time class="time">2020-07-05</time>
              <div align="right" >
                <span style="color:rgb(140, 197, 255)">$6.6</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>


    <el-popover
      ref="popover1"
      placement="right-start"
      title="支付宝支付"
      width="650"
      trigger="hover"
      content="">
    </el-popover>

    <el-popover
      ref="popover2"
      placement="right-start"
      title="微信支付"
      width="650"
      trigger="hover"
      content="">
    </el-popover>

    <el-popover
      ref="popover3"
      placement="top-start"
      title="打开微信扫码支付"
      width="300"
      trigger="hover"
      content="">
    </el-popover>
    <span style="color: #8cc5ff">选择支付方式</span>
    <el-row align="middle">

      <el-col :span="3">
        <el-button  v-popover:popover1>
          <img @click="pay" width="80px" height="80px" src="../assets/pay/aliPay.png" class='' alt="支付宝支付">
        </el-button>
      </el-col>
    </el-row>


    <el-row>
      <el-col :span="3">
        <el-button v-popover:popover2>
          <img @click="pay2" width="80px" height="80px" src="../assets/pay/wxPay.jpg" class='' alt="微信支付">
        </el-button>
      </el-col>

    </el-row>

    <!--支付宝-->
    <div id="pay">
    </div>

    <!--微信二维码-->
    <el-row>
      <el-col :span="24" style="text-align: center">
        <el-button :style="{display:show}" v-popover:popover3>
          <vue-qr class="vue-qr" :text="config.text" :logoScale="50" :size="300"></vue-qr>
        </el-button>
      </el-col>
    </el-row>



  </div>
</template>

<script>
  import VueQr from 'vue-qr'

  export default {
    name: "homePay",
    components: {
      VueQr: VueQr
    },
    data() {
      return {
        config: {
          logo: require('../assets/img/logo.png'),//默认二维码中间图片
          text: "" //二维码内容,编码格式默认使用base64
        },
        show:'none'

      }
    },
    methods: {
      //支付宝支付
      pay: function () {
        //封装参数
        let params = new URLSearchParams();
        var orderId = new Date().getTime() + String(Math.floor(Math.random() * (999999 - 100000 + 1) + 100000));
        params.append('payType', 'ALIPAY_PC');
        params.append('orderId', orderId);
        params.append('amount', '6.6');
        this.$axios.post('/api/pay', params).then(successResponse => {
          document.getElementById('pay').innerHTML = successResponse.data.body;//此处form就是后台返回接收到的数据

          document.forms[0].target = "_blank";//打开新标签页
          document.forms[0].submit();// 默认vue 不会解析 <script> 所以手动提交表单
        }).catch(failResponse => {
        })
      },
      //微信支付
      pay2: function () {
        //封装参数
        let params = new URLSearchParams();
        var orderId = new Date().getTime() + String(Math.floor(Math.random() * (999999 - 100000 + 1) + 100000));
        params.append('payType', 'WXPAY_NATIVE');
        params.append('orderId', orderId);
        params.append('amount', '0.01');
        this.$axios.post('/api/pay', params).then(successResponse => {
          this.wx = '请扫码支付'
          //生成二维码
          this.config.text = successResponse.data.codeUrl;
          //显示二维码
          this.show='inline-block';

        }).catch(failResponse => {
        })
      }

    }
  }
</script>


<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

