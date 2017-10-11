<template>
    <header class="header">
        <div class="navbar">
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
        </div>
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
</style>
