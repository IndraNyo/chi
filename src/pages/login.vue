<template>
    <div id="Login">
        <div class="login-wrap">
            <input class="input-user" type="text">
            <div class="ex-hr"></div>
            <input class="input-password" type="password">
        </div>
        <a id="btnLogin" class="btn-login" href="#">LOG IN</a>
    </div>
</template>

<script>

</script>

<style lang="scss" scopped>
    .login-wrap{
        border: 1px solid $border;
        @include borderR(5px);
        @include pm(0,vw(870) vw(30) 0 vw(30)) ;
        hr{
            background-color:$s-border;
        }
        .input-user{
            width: 100%;
            height: vw(90);
            border: none;
            background-color: $mainColor;
        }
        .input-password{
            @extend .input-user
        }
    }
    .btn-login{
        @include btn(100%,vw(88));
        background-color: $primaryColor;
        color: $white;
        @include pm(0,0 vw(30) 0 vw(30)) ;
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
