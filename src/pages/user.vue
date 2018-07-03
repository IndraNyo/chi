<template>
    <div id="User">
        <div class="user-header">
            <a class="btn-cancel">Cancel</a>
            <span class="title-wrap">EDIT PROFILE</span>
            <a class="btn-done">Done</a>
        </div>
        <div class="user-avatar-wrap">
            <div class="user-avatar">
                <img src="../assets/user.jpg" >
            </div>
            <a class="btn-blu-txt">CHANGE</a>
        </div>
        <div class="user-info-list">
            <dl>
                <dt>INFO</dt>
                <dd><input type="text" placeholder="Name"></dd>
                <dd><input type="email" placeholder="E-mail"></dd>
                <dd><input type="text" placeholder="Bio"></dd>
            </dl>
            <dl>
                <dt>SOCIAL</dt>
                <dd class="social"><i class="idr-facebookicon"></i><input  type="text" placeholder="Facebook"></dd>
                <dd class="social"><i class="idr-twitter"></i><input type="text" placeholder="Twitter"></dd>
                <dd class="social"><i class="idr-socialinstagram"></i><input type="text" placeholder="Instagram"></dd>
            </dl>
        </div>
        <div>
            <a href="####" class="btn-del-pf"><i class="idr-del"></i>DELETE PROFILE</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scopped>
    body{
        background-color: $grey;
    }
    .user-header{
        position: relative;
        height: vw(90);
        overflow: hidden;
        background-color: $mainColor;
        .btn-cancel{
            position: absolute;
            display: block;
            height: vw(90);
            line-height: vw(90);
            width: vw(160);
            left: 0;
            top: 0;
            font-size: vw(30);
            color: $secondaryTxt;
            text-align: center;
            @include pm(0,0 vw(30));
        }
        .title-wrap{
            display: block;
            height: vw(90);
            line-height: vw(90);
            width: vw(300);
            text-align: center;
            color: $white;
            @include pm(0,0 auto)
        }
        .btn-done{
            @extend .btn-cancel;
            left: auto;
            right: 0;
        }
    }
    .user-avatar-wrap{
        height: vw(300);
        background-color: $grey;
        overflow: hidden;
        .user-avatar{
            height: vw(210);
            width: vw(210);
            overflow: hidden;
            border: vw(2) solid $border-g;
            @include borderR(vw(100));
            @include pm(0,vw(30) auto 0 auto);
            img{
                display: block;
                width: 100%;
                height: auto;
            }
        }
        .btn-blu-txt{
            @include btn(vw(180),vw(30));
            font-size: vw(28);
            font-weight: 600;
            overflow: hidden;
            color: $primaryColor;
            @include pm(0,vw(10) auto 0 auto);
        }
    }
    .user-info-list{
        dl{
            display: block;
            width: 100%;
            dt{
                background-color: $grey;
                color: $secondaryTxt;
                height: vw(90);
                line-height: vw(120);
                font-size: vw(24);
                font-weight: 600;
                @include pm(0 vw(24),0);
            }
            dd{
                height: vw(90);
                background-color: $white;
                border: vw(1) solid $border-g;
                &.social{
                    @include pm(0 0 0 vw(18),0);
                    i{
                        float: left;
                        font-size: vw(46);
                        @include pm(0,vw(18) 0 0 0);
                        &.idr-facebookicon{
                            color: #06c;
                        }
                        &.idr-twitter{
                            color: #01bad4;
                        }
                        &.idr-socialinstagram{
                            color: #999;
                        }
                    }
                    input{
                        float: left;
                        width: vw(680);
                    }
                }
            }
        }
        input{
            border: none;
            height: vw(88);
            width: 100%;
            font-size: vw(28);
            outline:none;
            @include pm(0 vw(20),0);
            
        }
    }
    .btn-del-pf{
        display: block;
        height: vw(88);
        line-height: vw(88);
        width: vw(690);
        font-size: vw(30);
        font-weight: 300;
        background-color: $primaryCur;
        text-align: center;
        color: $white;
        border-radius: vw(10);
        font-family: FjallaOne-Regular;
        letter-spacing: 0;
        @include pm(0,vw(85) auto vw(10) auto);
        i{
            @include pm(0,0 vw(10) 0 0)
        }
    }
</style>
