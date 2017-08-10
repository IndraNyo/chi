<template>
    <div id="Login">
        <div class="logo"></div>
        <div class="login-bg-1"></div>
        <div class="login-bg-2"></div>
        <div class="login-wrap">
            <div class="input-wrap">
                <i class="indrafont i-email"></i>
                <input class="input-user" type="text" placeholder="Email">
            </div>
            <div class="ex-hr"></div>
            <div class="input-wrap">
                <i class="indrafont i-lock"></i>
                <input class="input-password" type="password" placeholder="Password">
            </div>
        </div>
        <div class="login-btn-wrap">
            <a id="btnLogin" class="btn-login" href="#">SIGN IN</a>
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
    .logo{
        position: absolute;
        top: vw(340);
        left: vw(277);
        width: vw(197);
        height: vw(197);
        @include image-2x('../assets/logo.png', vw(197), vw(197));
        z-index: 300;
    }
    .login-bg-1{
        position: absolute;
        top: vw(90);
        left: vw(301);
        width: vw(449);
        height: vw(494);
        @include image-2x('../assets/login-bg1.png', vw(449), vw(494));
        z-index: 200;
    }
    .login-bg-2{
        position: absolute;
        top: vw(412);
        right: vw(350);
        width: vw(400);
        height: vw(442);
        @include image-2x('../assets/login-bg2.png', vw(400), vw(442));
        z-index: 100;
    }
    .login-wrap{
        border: 1px solid $border;
        @include borderR(5px);
        @include pm(0,vw(870) vw(30) vw(30) vw(30)) ;
        hr{
            background-color:$s-border;
        }
        .input-wrap{
            i{
                display: inline-block;
                border: none;
                height: vw(90);
                line-height: vw(90);
                text-align: center;
                width: vw(74);
                font-size: vw(42);
                color: $gray;
            }
            .input-user{
                float:right;
                height: vw(40);
                line-height: vw(40);
                width: vw(610);
                font-size: vw(32);
                border: none;
                color: $white;
                background-color: $mainColor;
                @include pm(0 vw(10) 0 0,vw(24) 0 0 0);
                @include placeholder($gray);
            }
            .input-password{
                @extend .input-user;
            }
        }
        
    }
    .login-btn-wrap{
        @include pm(0,0 vw(30) vw(30) vw(30));
        .btn-login{
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
