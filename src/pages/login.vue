<template>
    <div id="Login">
        <div class="logo-bg"><div class="logo"></div></div>
        <div class="login-wrap">
            <div class="input-wrap">
                <i class="idr-email"></i>
                <input class="input-user" type="text" placeholder="Email">
            </div>
            <div class="ex-hr"></div>
            <div class="input-wrap">
                <i class="idr-lock"></i>
                <input class="input-password" type="password" placeholder="Password">
            </div>
        </div>
        <div class="login-btn-wrap">
            <a id="btnLogin" class="btn-login" href="#">SIGN IN</a>
        </div>
        <div class="register-wrap">
            <p>Still not register?</p>
            <p>Please <a @click="$goRoute('/register')" class="btn-register">Sing up</a></p>
        </div>
    </div>
</template>

<script>
export default {
    created: function () {
        this.$store.commit('REG_SHOW_TGL',false)
    }
}
</script>

<style lang="scss" scopped>
    .login-wrap{
        border: 1px solid $border;
        @include borderR(5px);
        @include pm(0,vw(68) vw(30) vw(30) vw(30)) ;
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
        @include pm(0,0 vw(30) vw(50) vw(30));
        .btn-login{
            @include btn(100%,vw(88));
            @include borderR(5px);
            background-color: $primaryColor;
            color: $white;
            font-size: vw(28);
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
