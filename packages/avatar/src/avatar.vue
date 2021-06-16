<template>
    <span
        class="bs-avatar"
        :class="[
            'bs-avatar--' + shape,
            typeof size === 'string' ? 'bs-avatar--' + size : ''
        ]"
        :style="sizeStyle"
    >
        <template v-if="$slots.default">
            <slot></slot>
        </template>
        <template v-else>
            <img :src="src" style="object-fit: cover;" :alt="alt" v-if="src" />
            <i class="iconfont" :class="`icon-bs-icon-${icon}`" v-if="icon && !src"></i>
        </template>
    </span>
</template>
<script>
  export default {
    name: 'BAvatar',
    props: {
        icon: String,
        shape: {
            type: String,
            default: 'circle',
            validator: function (value) {
                return ['circle', 'square'].indexOf(value) !== -1
            }
        },
        size: {
            type: [Number, String],
            validator: function (value) {
                if (typeof value === 'string') {
                    return ['large', 'small'].indexOf(value) !== -1
                }
                return typeof val === 'number'
            }
        },
        src: String,
        alt: String,
    },
    computed: {
        sizeStyle() {
            console.log(this);
            const { size } = this;
            return typeof size === 'number' ? {
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`
            } : {};
        }
    },
  };
</script>
