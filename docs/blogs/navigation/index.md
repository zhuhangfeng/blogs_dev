---
layout: page
sidebar: false
---

<script setup>
  import {ref ,reactive,onMounted}from 'vue'

const arrList = ref([
      {
        icon: 'https://www.jyshare.com/wp-content/uploads/2022/04/judge-logo.jpg',
        title: '菜鸟工具包',
        link: 'https://www.jyshare.com/'
      },
])
onMounted(()=>{

})
</script>
  <div class="main">
  <div class="box" v-for="item in arrList">
  <a :href="item.link">
      <div class="box-info">
        <img class="info-icon" alt="" :src="item.icon"/>
        <span class="info-name">{{item.title}}</span>
      </div>
      <div class="box-des" v-if="item.desc">
        {{item.desc}}
      </div>
      </a>
    </div>
</div>

  <style>
    .main{
      width:100%;
      height:100%;
      padding:30px;
      display:grid;
      grid: auto / auto auto auto auto;
      grid-gap: 10px;
    }
.box{
 background-color:#AFEEEE;
 border-radius: 10px;
 padding: 10px;
}
.box:hover{
  background-color:#48D1CC;
}
.box-info{
  display: flex; 
  align-items: center;
  margin-bottom: 10px;
}
.info-icon{
  width: 50px;
  height: 50px;
  background-color:#66ff33;
  margin-right: 10px;
}
.info-name{
  font-size: 20px;
  font-weight: 600;
}
    </style>