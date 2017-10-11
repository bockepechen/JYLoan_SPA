<template>
  <div>
    <!-- 调用Header组件 20171011 -->
    <nav-header></nav-header>
    <!-- 调用面包屑组件 同时使用slot插槽 -->
    <nav-bread>
      <span slot="bread">Goods</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="sortByPrice" v-bind:class="{'sort-up':sortFlag}">
            Price
            <svg class="icon icon-arrow-short" >
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showPriceFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show':ifshowFilterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <!-- 循环显示价格区间数据 -->
              <dd v-for="(price,index) in priceFilter">
                <a href="javascript:void(0)" @click="choosePrice(index)" :class="{'cur':priceChecked==index}">
                  <div v-if="price.minPrice==99999999">
                    All
                  </div>
                  <div v-else>
                    {{price.minPrice | currency('')}} - {{price.maxPrice | currency('')}}
                  </div>
                </a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <!-- 循环显示商品数据 -->
                <li v-for="item in goodsList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'static/'+item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice | currency('￥')}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCastList(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
              <img src="./../assets/loading-spinning-bubbles.svg" v-show="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="ifshowOverLay" @click="closePriceFilterPop"></div>

    <!--调用模态窗口（购买失败）-->
    <modal-window v-bind:mdShow="mdShow" v-on:close="closeByFather()">
      <span slot="contentSlot">
        不能加入购物车，请登录后操作！
      </span>
      <div slot="buttonSlot">
        <a href="javascript:;" class="btn btn--m" @click="closeByFather">关闭</a>
      </div>
    </modal-window>
    <!--调用模态窗口（购买成功）-->
    <modal-window v-bind:mdShow="mdShowBuy" v-on:close="closeByFather()">
      <p slot="contentSlot">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>购买成功，可继续购买！</span>
      </p>
      <div slot="buttonSlot">
        <a href="javascript:;" class="btn btn--m" @click="closeByFather">继续购买</a>
        <router-link href="javascript:;" class="btn btn--m" to="/cart">查看购物车</router-link>
      </div>
    </modal-window>
    <!-- 调用Footer组件 -->
    <nav-footer></nav-footer>
  </div>
</template>
<style>
  .load-more {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .btn:hover{
    background-color: #ffe5e6;
    transition: all 1s ease-out;
  }
</style>
<script>
   import '@/assets/css/base.css'
   import '@/assets/css/product.css'
   import '@/assets/css/login.css'
   import NavHeader from '@/components/NavHeader.vue'
   import NavFooter from '@/components/NavFooter.vue'
   import NavBread from '@/components/NavBread.vue'
   import ModalWindow from './../components/ModalWindow.vue'
   import axios from 'axios'
  export default {
    data() {
      return {
        goodsList:[],
        priceFilter:[],
        priceChecked:0,
        ifshowFilterBy:false,
        ifshowOverLay:false,
        page:1,
        pageSize:6,
        sortFlag:true,
        busy:true,
        loadingGif:false,
        mdShow:false,
        mdShowBuy:false
      }
    },
    components:{
      NavHeader,
      NavFooter,
      NavBread,
      ModalWindow
    },
    mounted: function() {
      this.getGoodsList(); //页面加载执行
    },
    methods: {
      getGoodsList(refreshData=true) {
          // 访问mock数据文件逻辑（页面属性名称需要根据mock文件中属性名改动）
//        axios.get("/goods").then((res)=>{
//          console.log(`res:${res.data.resData}`);
//          this.goodsList = res.data.result.list;
//          this.priceFilter = res.data.priceRange;
//          console.log(this.goodsList);
//        });
        // 访问nodejs后台数据
        axios.get("/getGoodsList", {
            // 请求参数设置
            params:{
                page:this.page,
                pageSize:this.pageSize,
                sort:this.sortFlag?1:-1, //sortFlag = true时为正序排列（1）；false时为倒序排列（-1）
                priceRange:this.priceChecked
            }
        }).then((res)=>{
          if (refreshData) {
            // 使用请求数据直接赋值
            this.goodsList = res.data.rec_goods.list;
            // 非滚动查询后，要将滚到查询开关打开
            this.busy = false;
          } else {
            // 使用请求数据累加赋值
            this.goodsList = this.goodsList.concat(res.data.rec_goods.list);
            if (res.data.rec_goods.count == 0) {
                this.busy = true;
            } else {
                this.busy = false;
            }
          }

          this.priceFilter = res.data.rec_price_range.list;
        });
      },
      // 排序点击事件
      sortByPrice(){
        this.sortFlag = !this.sortFlag;
        this.page = 1;
        this.getGoodsList();
      },
      showPriceFilterPop() {
        this.ifshowFilterBy = true;
        this.ifshowOverLay = true;
      },
      closePriceFilterPop() {
        this.ifshowFilterBy = false;
        this.ifshowOverLay = false;
      },
      // 价格区间点击事件
      choosePrice(index) {
        this.priceChecked=index;
        this.closePriceFilterPop();
        this.page = 1;
        this.getGoodsList();
      },
      // 页面滚动加载事件
      loadMore() {
        this.busy = true;
        setTimeout(()=>{
           this.page++;
           this.loadingGif = true;
           this.getGoodsList(false);
           this.loadingGif = false;
        },500);
      },
      // 加入购物车事件
      addCastList(productId) {
        axios.post('/getGoodsList/addCart',{
          productId:productId
        }).then((rec)=>{
            if (rec.data.status == 0) {
                //alert("加入购物车成功");
                this.mdShowBuy = true;
                this.$store.commit('updateCartNum', 1);
            } else {
                //alert(rec.data.msg);
              this.mdShow = true; // 该值传递给模态窗口子组件
            }
        });
      },
      // 父组件关闭模态窗口
      closeByFather() {
        this.mdShow = false;
        this.mdShowBuy = false;
      }
    }
  }
</script>
