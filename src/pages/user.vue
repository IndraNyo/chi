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
                <dd><input type="text"></dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scopped>
    .user-header{
        position: relative;
        height: vw(90);
        overflow: hidden;
        .btn-cancel{
            position: absolute;
            display: block;
            height: vw(90);
            line-height: vw(90);
            width: vw(160);
            left: 0;
            top: 0;
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
            height: vw(200);
            width: vw(200);
            overflow: hidden;
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
            font-size: vw(30);
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
            }
        }
        input{
            border: none;
        }
    }
</style>
