<template>
<div class="out">
    <div class="center">
        <h2 class="margin-1">登录你的 Hungry? 账户。</h2>
        <div class="identity">
            <option v-for="identity in identities" :identity="identity" @click="updateIdentity(identity.id)"></option>
        </div>
        <input type="text" :placeholder=identities[option].name class="margin-2" v-model="loginInfo.userName">
        <small><span v-if="nameEmpty">请输入{{ identities[option].name }}</span></small>
        <input type="password" placeholder="密码" class="margin-1" v-model="loginInfo.password">
        <small><span v-if="passwordEmpty">请输入密码</span></small>
        <div class="local">
            <input type="checkbox" v-model="local">
            <h5>保持登录</h5>
        </div>
        <button @click="login"><div class="center">确定</div></button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import option from '@/components/OptionButton.vue'


const loginInfo = ref({
    userName: "",
    password: ""
})

const local = ref(false)

const result=ref([])

const nameEmpty = ref(false)
const passwordEmpty = ref(false)
const notFound = ref(false)

const option = ref(0)
const identities = ref([
    {id: 0, buttonName: "用户", name: "用户名", color: "var(--green-main)", isChecked: true},
    {id: 1, buttonName: "商家", name: "店铺名", color: "var(--yellow-green-main)", isChecked: false},
    {id: 2, buttonName: "管理员", name: "管理员编号", color: "var(--yellow-main)", isChecked: false}
])

function updateIdentity(id){
    for(var i = 0; i < 3; i++){
        identities.value[i].isChecked = false
    }
    identities.value[id].isChecked = true
    option.value = id
}

function login(){
    if(loginInfo.value.userName === '') {nameEmpty.value = true}
    else{nameEmpty.value = false}
    
    if(loginInfo.value.password === '') {passwordEmpty.value = true}
    else{passwordEmpty.value = false}

    if(nameEmpty.value === false && passwordEmpty.value === false) {
        if (option.value === 0) {
            //用户登录
            axios({
                method: "post",
                baseURL: "http://localhost:8001",
                url: '/user/login',
                data: loginInfo.value,
            })
            .then(response => {result.value = response})
            .catch(error => {alert(error)})
        }
        else if (option.value === 1) {
        //商家登录
        }
        else if (option.value === 2) {
        //管理员登录
        }
        
        if (isOK.value === true) {
            router.push('/home')
            console.log(userInfo.value, token.value)
        }
    }
}
</script>

<style scoped>
h2
{
    font-family: Oswald;
}

input
{
    margin-bottom: 5px;
}

input[type="text"], input[type="password"]
{
    width: 300px;
}

small
{
    color: var(--red-main);
}

.local
{
    display: flex;

    height: 48px;
    margin-bottom: 10px;
}

.local > *
{
    margin: auto 0;
}

input[type="checkbox"]
{
    width: 30px;
    margin-right: 10px;

    box-shadow: none;
}

button
{
    width: 100px;
}
</style>