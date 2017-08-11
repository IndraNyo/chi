<template>
    <div id="register">
        <div class="login-bg"><div class="logo"></div></div>
        <div class="sign-up-wrap">
            <a id="btnSignUp" class="btn-sign-up" href="#">SIGN UP</a>
        </div>
        <div class="register-wrap">
            <p>Still not register?</p>
            <p>Please <a class="btn-register" href="#">Sing up</a></p>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scopped>
    
    .login-bg{
        position: relative;
        width: vw(750);
        height: vw(690);
        z-index: 100;
        background: url('../assets/login-bg.jpg') no-repeat center center;
        background-size: cover;
        @include pm(0,vw(88) 0 0 0);
        .logo{
            position: absolute;
            top: vw(252);
            left: vw(277);
            width: vw(197);
            height: vw(197);
            @include image-2x('../assets/logo.png', vw(197), vw(197));
            z-index: 200;
        }
    }
    .sign-up-wrap{
        @include pm(0,0 vw(30) vw(30) vw(30));
        .btn-sign-up{
            @include btn(100%,vw(88));
            @include borderR(5px);
            background-color: $primaryColor;
            color: $white;
            font-size: vw(32);
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
                font-weight: 800;
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
