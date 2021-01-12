<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    


  </div>
</template>

<script type="text/ecmascript-6">
import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommend from './childcomps/HomeRecommend'
import FeatureView from './childcomps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import {getHomeMultidata, getHomeGoods} from 'network/home';


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop' : {page: 0, list: []},
        'new' : {page: 0, list: []},
        'sell': {page: 0, list: []},
      } 
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,

    
  },
  created () {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
        getHomeMultidata(){
              getHomeMultidata().then(res => {
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
              })
         },
         getHomeGoods(type) {
           const page = this.goods[type].page + 1;
              getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.data.list);
                this.goods[type].page += 1;
              })
        },
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
