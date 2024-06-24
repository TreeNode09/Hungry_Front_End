<template>
<hungry-header></hungry-header>
<hungry-main>
    <router-view/>
</hungry-main>
</template>

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
</style>

<!--模块-->
<style>
body
{
    color: var(--green-dim);

    margin: 0;
}

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
    line-height: 50px;
    font-weight: 600;

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
    font-size: 22px;
    font-weight: 400;

    margin: 0;
}

h5
{
    font-size: 20px;
    font-weight: 400;

    margin: 0;
}

.white
{
    color: #fff;
}
</style>

<!--按钮和输入框-->
<style>
button
{
    display: flex;
    
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

.center
{
    margin: auto;
}

input
{
    height: 50px;
    border-radius: 10px;
    border-width: 0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);

    background-color: #fff;
}

input::placeholder
{
    color: var(--green-main);
    font-size: 22px;
}
</style>

<!--变量-->
<style>
body
{
    --red-main: #BD3124;

    --orange-pale: #C0AB9A;
    --orange-main: #E99D42;

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
