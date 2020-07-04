<template>
  <div>
    <span style="color: #8cc5ff">选择支付方式</span>
    <el-row>
      <el-col :span="3">
        <img @click="pay" width="80px" height="80px" src="../assets/pay/aliPay.png" class='' alt="支付宝支付">
      </el-col>


    </el-row>

    <el-row>
      <el-col :span="3">
        <img @click="pay2" width="70px" height="70px" src="../assets/pay/wxPay.jpg" class='' alt="微信支付">
      </el-col>
    </el-row>

    <!--支付宝-->
    <div id="pay">
    </div>

    <!--微信二维码-->
    <el-row>

      <el-col :span="6">
        <vue-qr class="vue-qr" :text="config.text" :logoScale="50" :size="300"></vue-qr>
      </el-col>
      <el-col :span="3" style="line-height: 80px;color: #5daf34">
        {{wx}}
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
        wx:'',
        config: {
          logo: require('../assets/img/logo.png') ,//默认二维码中间图片
          text: "" //二维码内容,编码格式默认使用base64
        }

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
        this.$axios.post('/pay', params).then(successResponse => {
          document.getElementById('pay').innerHTML = successResponse.data.body;//此处form就是后台返回接收到的数据

          document.forms[0].target="_blank";//打开新标签页
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
        this.$axios.post('/pay', params).then(successResponse => {
          this.wx='请扫码支付'
          //生成二维码
          this.config.text = successResponse.data.codeUrl;
        }).catch(failResponse => {
        })
      }

    }
  }
</script>


