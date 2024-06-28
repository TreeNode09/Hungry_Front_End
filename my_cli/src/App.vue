<template>
<hungry-header></hungry-header>
<hungry-main>
    <router-view/>
</hungry-main>
</template>

<script setup>

</script>

<!--杂项-->
<style>
*
{
    box-sizing: border-box;
}

@font-face
{
    font-family: Oswald;
    src: url("@/assets/Oswald-Regular.ttf") format("opentype");
}

body
{
    color: var(--green-dim);

    margin: 0;
}
</style>

<!--模块-->
<style>
.out
{
    display: flex;

    width: 100%;
}

.in
{
    width: 133vh;
    min-width: calc(var(--min-view-width) * 0.75);
    max-width: calc(var(--max-view-width) * 0.75);
    margin: auto;
}

.left
{
    display: inline-block;

    font-size: 0px;
}

.right
{
    float: right;
}
</style>

<!--文字样式-->
<style>
h2
{
    font-size: 32px;
    font-weight: 600;
    line-height: 50px;

    margin: 0 0 10px 0;
}

/*Logo*/
h3
{
    font-size: 28px;
    font-family: Oswald;
    font-weight: 600;

    margin: 0;
}

h4
{
    font-size: 24px;
    font-weight: 600;

    margin: 0;
}

h5
{
    font-size: 20px;
    font-weight: 600;

    margin: 0;
}

h6
{
    font-size: 20px;
    font-weight: 400;

    margin: 0;
}
</style>

<!--按钮和输入框-->
<style>
button
{
    display: flex;
    overflow: hidden;

    font-size: 20px;
    font-weight: 600;
   
    height: 48px;
    border-radius: 10px;
    border-width: 0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);

    background-color: #fff;

    transition: all 0.2s;
}

button:hover
{
    transition: all 0.2s;
}

input
{
    color: var(--green-dim);
    font-size: 20px;

    width: 100%;
    height: 48px;
    border-radius: 10px;
    border-width: 0;
    padding-left: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);

    background-color: #fff;
}

input::placeholder
{
    color: var(--green-main);
    font-size: 20px;
}

input:focus-visible
{
    outline-color: var(--green-dim);
}
</style>

<!--变量-->
<style>
body
{
    --red-main: #BD3124;

    --orange-pale: #C0AB9A;
    --orange-main: #E99D42;

    --yellow-pale: #FFED85;
    --yellow-main: #F2B800;
    --yellow-dim: #A16222;
    
    --yellow-green-pale: #EAFFA3;
    --yellow-green-main: #97B337;

    --green-pale: #CAE898;
    --green-main: #81B337;
    --green-dim: #335402; 

    --turquoise-main: #62BAA3;

    --pink-main: #DE868F;

    --max-view-width: 3840px;
    --max-view-height: 2160px;
    --min-view-width: 1200px;
    --min-view-height: 675px;

    --bar-height: 50px;
}
</style>

<!--格式控制-->
<style>
.margin-1
{
    margin-top: 10px;
}

.margin-2
{
    margin-top: 20px;
}

.white
{
    color: #fff;
}

.center
{
    margin: auto;
}

.vertical-center
{
    margin: auto 0;
}

.inline
{
    display: inline-block;
}
</style>
