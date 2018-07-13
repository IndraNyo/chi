<template>
    <div id="addRecipe">
       <div class="user-header">
            <a class="btn-cancel">Cancel</a>
            <span class="title-wrap">EDIT PROFILE</span>
            <a class="btn-done">Done</a>
        </div>
        <ul class="recipe-tab">
            <li class="recipe-item cur"><a href="####">INFORMATION</a></li>
            <li class="recipe-item"><a href="####">INGREDIENTS</a></li>
            <li class="recipe-item"><a href="####">PREPARATION</a></li>
        </ul>
        <div class="upload-photo">
            <div class="fake-box">
                <i class="idr-plus"></i>
                <input id="" class="btn-add-photo" type="file" onchange="" accept="image/*" multiple="">
            </div>
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
            font-family: FjallaOne-Regular, Avenir-Black;
            @include pm(0,0 auto)
        }
        .btn-done{
            @extend .btn-cancel;
            left: auto;
            right: 0;
        }
    }
    .recipe-tab{
        width: vw(750);
        display: flex;
        display: -webkit-flex;
        flex-flow: row nowrap;
        background-color: $border;
        .recipe-item{
            height: vw(86);
            flex-grow: 1;
            background-color: $primaryColor;
            @include pm(0,0 0 0 vw(2));
            a{
                display: block;
                height: vw(86);
                line-height: vw(86);
                text-align: center;
                font-family: Avenir-Black;
                font-size: vw(18);
                color: $gray;
                background-color: $secondaryColor
            }
            &:first-child{
                @include pm;
            }
            &.cur{
                a{
                    color: $white;
                    height: vw(80);
                }
            }
        }
    }
    .upload-photo{
        height: vw(530);
        .fake-box{
            position: relative;
            height: vw(100);
            width: vw(100);
            background-color: $primaryColor;
            i{
                color: $white;
            }
        }
    }
    .btn-add-photo{
            position: absolute;
            height: vw(100);
            width: vw(100);
            top: 0;
            left: 0;
        }
</style>
