<template>
    <div class="main-header">
        <div class="btn-wrap">
            <a class="btn-menu" @click="showNav()"><i class="idr-menu"></i></a>
            <span v-if="title == undefined" class="logo-wrap"></span>
            <span v-if="title !== undefined" class="title-wrap">{{ title | capitalize }}</span>
            <a class="btn-search"><i class="idr-search"></i></a>
        </div>
        <div v-show="navShow" class="mian-nav">
            <div class="nav-wrap">
                <ul class="nav-bar">
                    <li><a @click="$goRoute('/login')"><i class="idr-ybbcook"></i>RECIPES</a></li>
                    <li><a @click="$goRoute('/main')"><i class="idr-collection"></i>COLLECTIONS</a></li>
                    <li><a @click="$goRoute('/profile')"><i class="idr-filedone"></i>MY MENU</a></li>
                    <li><a @click="$goRoute('/profile')"><i class="idr-shoppingBag"></i>SHOPPING LIST</a></li>
                </ul>
                <div class="profile-wrap-s">
                    <div class="user-avatar-s">
                        <img src="../assets/user.jpg" >
                    </div>
                    <div class="status-wrap-s">
                        <div class="title-wrap-s">
                            <a @click="$goRoute('/profile')">
                                <h6>Sakura PinkSnow</h6>
                                <span>View Profile</span>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="####" class="btn-logout"></a>
                <div class="user-wrap"></div>
            </div>
        </div>
        <div v-show="navShow" class="mask"></div>
    
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name:'mainHeader',
    props: ['title'],
    filters: {
        capitalize: function (value) {
                value = value.toString()
                return value.toUpperCase()
            }
    },
    created: function () {
        this.$store.dispatch('navShowTgl',false);
    },
    computed: {
        ...mapGetters({
            navShow:'navShow'
        })
    },
    methods:  {
        showNav() {
            this.$store.dispatch('navShowTgl',true);
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-header{
        position: relative;
        height: vw(90);
        width: vw(750);
        .btn-wrap{
            height: vw(90);
            width: vw(750);
            top: 0;
            z-index: 999;
            position: absolute;
            background-color: $mainColor;
            @include clearfix;
            .btn-menu{
                position: absolute;
                display: block;
                height: vw(90);
                width: vw(120);
                left: 0;
                top: 0;
                @include pm(vw(25) vw(35) vw(5) vw(35),0);
                i{
                    color: $smoke;
                    font-size: vw(42);
                }
            }
            .title-wrap{
                display: block;
                height: vw(90);
                line-height: vw(90);
                width: vw(300);
                text-align: center;
                color: $white;
                font-family: FjallaOne-Regular, Avenir-Book;
                @include pm(0,0 auto)
            }
            .logo-wrap{
                display: block;
                height: vw(60);
                width: vw(60);
                color: $white;
                background: url('../assets/logo.png') no-repeat center center;
                background-size: cover;
                @include pm(0,vw(15) auto);
            }
            .btn-search{
                display: block;
                position: absolute;
                right: 0;
                top: 0;
                height: vw(90);
                width: vw(100);
                @include pm(vw(25) vw(25) vw(0) vw(25),0);
                    i{
                        color: $smoke;
                        font-size: vw(42);
                        margin: 0 auto;
                    }
                }
            }
            &.fixed{
                position: fixed;
                z-index: 999;
                top: 0;
            }
        }
        
        .mian-nav{
            position: fixed;
            width: vw(457);
            height: 100%;
            z-index: 950;
            background-color: $mainColor;
            @include pm(vw(90) 0 0 0,0);
            .nav-wrap{
                @include clearfix;
                @include pm(0,0 vw(40));
                li{
                    height: vw(100);
                    font-family: FjallaOne-Regular,Avenir-Book;
                    border-bottom: vw(1) solid $border;
                    &:first-child{
                        border-top: vw(1) solid $border;
                    }
                    a{
                        display: block;
                        color: $white;
                        height: vw(100);
                        line-height: vw(100);
                        i{
                            font-size: vw(40);
                            display: block;
                            float: left;
                            @include pm(0,vw(-2) vw(30) 0 0);
                        }
                    }
                }
            }
        }
        .profile-wrap-s{
            $proWidth: 370;
            $userWidth: 70;
            height: vw(100);
            background-color: $mainColor;
            position: absolute;
            bottom: vw(150);
            @include pm(vw(10) 0 0 0,0);
            .user-avatar-s{
                float: left;
                height: vw($userWidth);
                width: vw($userWidth);
                overflow: hidden;
                @include borderR(vw(100));
                @include pm(0,0 vw(16) 0 0);
                img{
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            .status-wrap-s{
                float: right;
                height: vw(100);
                width: vw($proWidth - $userWidth - 16);
                @include pm(0 vw(20) 0 0,0 0 vw(50) 0);
                .title-wrap-s{
                    @include pm(0,0 0 vw(30) 0);
                    h6{
                        color: $white;
                        font-size: vw(28);
                        font-family: Avenir-Black;
                        @include pm;
                    }
                    span{
                        display: block;
                        height: vw(75);
                        line-height: vw(75);
                        @include line-clamp(2);
                        color: $thirdlyTxt;
                        font-family: Avenir-Book;
                        font-size: vw(26);
                        a{
                            color: $thirdlyTxt;
                        }
                    }
                }
            }
        }
        .btn-logout{
            display: block;
            position: absolute;
            bottom: vw(38);
            width: vw(350);
            height: vw(70);
            line-height: vw(70);
            border: vw(2) solid $thirdlyTxt;
            font-family: FjallaOne-Regular ,Avenir-Book;
            color: $d-gray;
            text-align: center;
            border-radius: vw(5);
            &:before{
                content: 'Log Out';
            }
        }
        .mask{
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 900;
            @include my-rgba($white,0.5)
        }
</style>
