<template>
    <div class="layout">

        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <li v-for="(item,index) in menuItem">
                    <MenuItem name="1">
                    <Icon type="ios-keypad"></Icon>
                    {{item.name}}
                    </MenuItem>
                </li>
                <!-- <MenuItem name="1">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="ios-paper"></Icon>
                                导航四
                            </MenuItem> -->
            </div>
        </Menu>
        <!-- <Menu mode="horizontal" active-name="1">
                        <div class="layout-assistant">
                            <MenuItem name="1">二级导航</MenuItem>
                            <MenuItem name="2">二级导航</MenuItem>
                            <MenuItem name="3">二级导航</MenuItem>
                        </div>
                    </Menu> -->
        <div>
            <Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :trigger="setting.trigger" :arrow="setting.arrow">
                <CarouselItem>
                    <div class="demo-carousel">
                        <div style="height: 200px; background: #5b62d5;">1</div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <div style="height: 200px; background: #5b62d5;">2</div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <div style="height: 200px; background: #5b62d5;">3</div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <div style="height: 200px; background: #5b62d5;">4</div>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
        <div class="layout-content">
            <Row>
                <Col span="5">
                <Menu active-name="1-2" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            导航一
                        </template>
                        <MenuItem name="1-1">选项 1</MenuItem>
                        <MenuItem name="1-2">选项 2</MenuItem>
                        <MenuItem name="1-3">选项 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            导航二
                        </template>
                        <MenuItem name="2-1">选项 1</MenuItem>
                        <MenuItem name="2-2">选项 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <MenuItem name="3-1">选项 1</MenuItem>
                        <MenuItem name="3-2">选项 2</MenuItem>
                    </Submenu>
                </Menu>
                </Col>
                <Col span="19">
                <div class="layout-content-main">
                    <div style="width: 500px;">
                        <simple-card>
                            <span slot="title">展示卡片</span>
                            <span slot="content">这是一段文本内容！</span>
                        </simple-card>
                    </div>
                    <div style="width: 200px; top: 20px; position: relative;">
                        <Cascader :data="data" v-model="value"></Cascader>
                        <span>{{value}}</span>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
        <!-- <div class="layout-copy">
                        2011-2016 &copy; TalkingData
                    </div> -->
        <common-footer></common-footer>
    </div>
</template>
<style scoped>
.layout {
    /* border: 1px solid #d7dde4; */
    background: #f5f7f9;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
}

.layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>
<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
import SimpleCard from '@/components/SimpleCard'
export default {
    data() {
        return {
            menuItem: [
                {
                    name: '菜单一'
                },
                {
                    name: '菜单二'
                },
                {
                    name: '菜单三'
                },
                {
                    name: '菜单四'
                }
            ],
            data: [{
                value: 'beijing',
                label: '北京',
                children: [
                    {
                        value: 'gugong',
                        label: '故宫'
                    },
                    {
                        value: 'tiantan',
                        label: '天坛'
                    },
                    {
                        value: 'wangfujing',
                        label: '王府井'
                    }
                ]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'fuzimiao',
                                label: '夫子庙',
                            }
                        ]
                    },
                    {
                        value: 'suzhou',
                        label: '苏州',
                        children: [
                            {
                                value: 'zhuozhengyuan',
                                label: '拙政园',
                            },
                            {
                                value: 'shizilin',
                                label: '狮子林',
                            }
                        ]
                    }
                ],
            }],
            value: [

            ],
            value3: 0,
            setting: {
                autoplay: false,
                autoplaySpeed: 2000,
                dots: 'inside',
                trigger: 'click',
                arrow: 'hover'
            }
        }
    },
    components: {
        CommonFooter,
        SimpleCard
    }
}
</script>

