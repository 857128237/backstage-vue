<template>
    <div
        class="bs-loading-mark" 
        :style="{ backgroundColor: background || '' }"
        v-show="visible" 
    >
        <div class="bs-loading-spinning">
            <i
                class="iconfont bs-new-icon-loading" 
                :class="[icon ? 'icon-bs-icon-' + icon : 'icon-bs-icon-loading']"
                :style="{ color: color || '' }"
            >
            </i>
            <p
                class="bs-loading-text"
                :style="{ color: color || '' }"
            >{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: null,
            color: null,
            background: null,
            icon: null,
            visible: true
        }
    },
    methods: {
        change(data, value) {
            this[data] = value;
        },
    },
}
</script>