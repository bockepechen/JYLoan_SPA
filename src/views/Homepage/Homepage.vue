<template>
    <div>
        <common-header></common-header>
        <div class="bodyContent">
            <nav class="nav-leftBody">
                左边
                <slot name="left" class="bodyLift"></slot>
            </nav>
            <nav class="nav-rightBody">
                右边
                <slot name="right" class="bodyRight"></slot>
            </nav>
        </div>
        <common-footer></common-footer>
    </div>
</template>
<style >
.bodyContent {
    width: 70%;
    margin: 120px auto auto auto;
    min-height: 540px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    overflow: hidden;
}

.nav-leftBody,
.nav-rightBody {
    text-align: center;
    float: left;
}

.nav-leftBody {
    position: fixed;
    margin-left: 20px;
    list-style: none;
    width: 12%;
    margin-top: 10px;
    text-align: right;
    left: 2px;
}

.nav-rightBody {
    min-width: 83%;
    max-width: 100%;
    padding-left: 5%;
    margin-bottom: 50px;
    padding-bottom: 20px;
    border-left: 1px solid #bbb;
}
</style>
<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
export default {
    data() {

    },
    components: {
        CommonHeader,
        CommonFooter
    }
}
</script>
