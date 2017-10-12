<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">
                <slot name="title"></slot>
            </p>
            <p>
                <slot name="content"></slot>
            </p>
        </Card>
    </div>
</template>
<script>
    export default {
        
    }
</script>