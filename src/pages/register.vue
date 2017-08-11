<template>
    <div id="Register">
        <div :style="{height: propsHeight}" class="logo-bg" ref="logoBox"><div class="logo"></div></div>
        <transition name="fade"><router-view></router-view></transition>
        <div class="sign-up-wrap">
            <a @click="$goRoute('/userRegister')" id="btnSignUp" class="btn-sign-up">SIGN UP</a>
        </div>
        <div class="facebook-wrap">
            <a id="btnFacebook" class="btn-facebook" href="#"><i class="idr-facebookicon"></i> SIGN IN WITH FACEBOOK</a>
        </div>
        <div class="register-wrap">
            <p>Already have account?</p>
            <p>Please <a @click="$goRoute('/login')" class="btn-register">Sing in</a></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        propsHeight: { type: Number }
    }

//   show: true,
//   data() {
//     return {
//       username: '',
//       password: '',
//       email: '',
//       loginTab: true,
//       error: false,
//       permanent: true
//     };
//   },
//   methods: {
//     boom() {
//       this.$refs.logoBox.style.height = '66vw';
//       $goRoute('/userRegister');
//     }
//   }

}
</script>


<style lang="scss" scopped>
    .sign-up-wrap{
        @include pm(0,vw(68) vw(30) vw(30) vw(30));
        .btn-sign-up{
            @include btn(100%,vw(88));
            @include borderR(5px);
            background-color: $primaryColor;
            color: $white;
            font-size: vw(28);
            letter-spacing: vw(-1);
        }
    }
    .facebook-wrap{
        @extend .sign-up-wrap;
        @include pm(0,vw(30) vw(30) vw(30) vw(30));
        .btn-facebook{
            @extend .btn-sign-up;
            background-color: $facbook;
        }

    }
    .register-wrap{
        @include pm(0,0 vw(30) vw(30) vw(30));
        p{
            text-align: center;
            color: $secondaryTxt;
            font-size: vw(28);
            @include pm(0,0 0 vw(5) 0);
            .btn-register{
                color: $white;
            }
        }
    }
</style>
<style lang="postcss" scoped>
    @svg 1px-border{
        height:2px;
        @rect{
            fill:var(--color,black);
            width:100%;
        }
    }
    .ex-hr{
        border: 1px solid #414050;
        border-image: svg(1px-border param(--color #00b1ff)) 1 1 stretch;
    }
</style>
