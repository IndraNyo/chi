<template>
    <div id="UserRegister">
        <p class="reg-title">SIGN UP</p>
        <div class="login-wrap">
            <div class="input-wrap">
                <i class="idr-email"></i>
                <input id="UserEmail" class="input-user" type="text" placeholder="Email">
            </div>
            <div class="ex-hr"></div>
            <div class="input-wrap">
                <i class="idr-user"></i>
                <input id="UserName" class="input-user" type="text" placeholder="Username">
            </div>
            <div class="ex-hr"></div>
            <div class="input-wrap">
                <i class="idr-lock"></i>
                <input id="InputPwd" class="input-password" type="password" placeholder="Password">
            </div>
            <div class="ex-hr"></div>
            <div class="input-wrap">
                <i class="idr-lock"></i>
                <input id="InputPwdConfm" class="input-password" type="password" placeholder="Confirm password">
            </div>
        </div>
        <div class="create-btn-wrap">
            <a href="#" id="btnCreate" class="btn-create">CREATE ACCOUNT</a>
        </div>
        <div v-show="regShow" class="register-wrap">
            <p>Or you still can</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name:'userRegister',
    created: function () {
        this.$store.dispatch('regShowTgl',true);
    },
    computed: {
        ...mapGetters({
            regShow:'regShow'
        })
    },
    beforeRouteLeave(to,from,next){
        this.$store.dispatch('regShowTgl',false);
        next();
    }
}
</script>

<style lang="scss" scoped>
    .reg-title{
        text-align: center;
        font-size: vw(42);
        color: $white;
        @include pm(0,0 0 vw(40) 0);
    }
    .login-wrap{
        border: 1px solid $border;
        @include borderR(5px);
        @include pm(0,0 vw(30) vw(30) vw(30));
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
    .create-btn-wrap{
        @include pm(0,0 vw(30) vw(30) vw(30));
        .btn-create{
            @include btn(100%,vw(88));
            @include borderR(5px);
            background-color: $primaryColor;
            color: $white;
            font-size: vw(28);
        }
    }
</style>
