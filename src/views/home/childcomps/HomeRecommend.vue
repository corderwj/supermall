<template>
  <div class="recommend">
     <div v-for="item in recommends" class="recommend-item">
         <a :href="item.link">
             <img :src="item.image" alt="item.title">
             <span>{{item.title}}</span>
         </a>
     </div>
 </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
      recommends: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() { 
    return {

    }
  },
  components:{
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style scoped>
    .recommend {
        display: flex;
        padding: 10px 0px 20px;
        border-bottom: 8px solid #eee;
    }
    .recommend-item {
        flex: 1;
        font-size: 12px;
        text-align: center;
        
    }
    .recommend-item img {
        width: 70px;
        height: 70px;
    }
    .recommend-item span {
        height: 24px;
        line-height: 24px;
    }
</style>