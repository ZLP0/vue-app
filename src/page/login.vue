<template>
  <body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>

    <el-form-item style="width: 100%">
      还没有帐号？
      <a href="#" type="primary" style="width: 100%; color: red" v-on:click="toRegister">注册</a>
    </el-form-item>

  </el-form>
  </body>
</template>


<script>
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: '大黄蜂',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login() {
        console.log('登录验证 跳转Home页面');
        //用户信息存储在 session中 用于登录拦截（判断是否已登录）
        sessionStorage.setItem("userInfo", this.loginForm.username);
        //将用户名存储在 store中 主页用来显示用户名
        this.$store.state.user.userinfo = this.loginForm.username;
        this.$router.push('/');

        //封装参数
        let params = new URLSearchParams();
        params.append('username', this.loginForm.username);
        params.append('password', this.loginForm.password);


        /* this.$axios.post('/login', params).then(successResponse => {
           console.log('返回信息：' + successResponse)
         }).catch(failResponse => {
         })*/

      },
      toRegister() {
        console.log('注册跳转')
        this.$router.push('/register');
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

