<template>
   <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :style="activeStyle" :class="{active : isActive}"><slot name="item-text"></slot></div>
       
   </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() { 
    return {
      // isActive: true
    }
  },
  components:{
  },
    computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) == 0
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
      
    }
  },

  mounted() {

  },
 }
</script>

<style scoped>
    .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

    .tab-bar-item img{
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-top: 3px;
    }

    .active {
      color: red;
    }
</style>