<template>
    <header class="header">
        <!-- <div class="navbar">
            <div class="navbar-left-container">
                <a href="/">
                    <img class="navbar-brand-logo" src="../../static/ZD_logo.jpg">
                </a>
            </div>
            <div class="navbar-right-container" style="display: flex;">
                <div class="navbar-menu-container">
                    <ul>
                        <a href="javascript:void(0)">
                            <li>首页</li>
                        </a>
                        <a href="javascript:void(0)">
                            <li>关于</li>
                        </a>
                        <a href="javascript:void(0)">
                            <li>理念</li>
                        </a>
                        <a href="javascript:void(0)">
                            <li>案例</li>
                        </a>
                        <a href="javascript:void(0)">
                            <li>产品</li>
                        </a>
                        <a href="javascript:void(0)">
                            <li>联系</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div> -->
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
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
                </MenuItem>
            </div>
        </Menu>
    </header>
</template>
<style>
.header {
    display: -webkit-box;
    display: -moz-box;
    -moz-box-align: center;
    -webkit-box-align: center;
    min-width: 750px;
    position: fixed!important;
    z-index: 1000;
    top: 0;
    height: 88px;
    border-bottom: 1px solid #bbb;
    background-color: #fff;
    width: 100%;
    padding: 2px 0;
}

.navbar {
    padding: 0!important;
}

.navbar-menu-container ul {
    overflow: hidden;
}

.navbar-menu-container ul li {
    float: left;
    margin-right: 20px;
    color: #333;
    font-family: "微软雅黑";
    padding: 3px 10px;
    border-radius: 2px;
}

.navbar-menu-container ul li:hover {
    background-color: #3479df;
    color: #fff;
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
</style>
