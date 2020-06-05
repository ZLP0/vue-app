<template>
  <body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统注册</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.email" auto-complete="off" placeholder="邮箱账号"></el-input>
    </el-form-item>

    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item>
      <el-input type="password" v-model="loginForm.passwords" auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-col class="line" :span="10">
        <el-input type="text" v-model="loginForm.code" auto-complete="off" placeholder="验证码"></el-input>

      </el-col>
      <el-col :span="5">
        <el-button type="primary" v-on:click="getcode">获取验证码</el-button>
      </el-col>
      <el-col :span="9">
        <span >{{timer}}</span>
      </el-col>
    </el-form-item>

    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%; " v-on:click="register">注册</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>


<script>
  export default {
    name: "Login",
    data() {

      return {
        timer: "",
        loginForm: {
          email: '2323436652@qq.com',
          password: '',
          passwords: '',
          code:''
        },
        responseResult: []
      }
    },
    methods: {

      getcode() {
        //封装参数
        let params = new URLSearchParams();
        params.append('email', this.loginForm.email);
        this.$axios.post('/register/sendVerificationCode', params).then(successResponse => {
          console.dir( successResponse.data.success)
          //获取验证码成功
          if(0==successResponse.data.success){

              this.countSub();

          }

        }).catch(failResponse => {

        })

      },
      countSub() {
        console.log('定时任务')
        var num = 120;
        var t = setInterval(() => {
          num--;
          this.timer = num+"s"
          if (num == 0) {
            this.timer='验证码已过期'
            clearInterval(t);
          }
        }, 1000);

      },

      register(){
        //封装参数
        let params = new URLSearchParams();
        params.append('email', this.loginForm.email);
        params.append('password', this.loginForm.password);
        params.append('passwords', this.loginForm.passwords);
        params.append('code', this.loginForm.code);



        this.$axios.post('/register/doregistering', params).then(successResponse => {
          console.dir( successResponse.data.success)

          if(0==successResponse.data.success){


            sessionStorage.setItem("userInfo", "jack")
            this.$router.push('/');

          }

        }).catch(failResponse => {

        })
      }

    }
  }
</script>

<style>
  #poster {
    background: url("../assets/img/loginDesks.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body {
    margin: 0px;
    padding: 0;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #166478;

  }


</style>

