<template>
    <i
        class="iconfont bs-icon"
        :class="[
            'icon-bs-icon-' + type,
            size ? 'bs-icon--' + size : '',
            {'bs-icon-loading': spin}
        ]"
        :style="{color: color, transform: rotate ? `rotate(${rotate}deg)` : 'none'}"
    >
    </i>
</template>
<script>
  export default {
    name: 'BIcon',
    props: {
        size: {
            type: String,
            default: 'default',
            validator: function (value) {
                return ['large', 'small', 'default'].indexOf(value) !== -1
            }
        },
        type: String,
        color: String,
        spin: Boolean,
        rotate: String,
    },
  };
</script>
