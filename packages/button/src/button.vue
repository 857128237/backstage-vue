<template>
    <button
        class="bs-button"
        :disabled="disabled || loading"
        :type="htmlType"
        :class="[
            shape ? 'bs-button--' + shape : '',
            size ? 'bs-button--' + size : '',
            type ? 'bs-button--' + type : '',
            {
                'bs-button--plain': plain,
                'bs-button--ghost': ghost,
                'bs-button--loading': loading,
                'bs-button--disabled': disabled,
                'bs-button--block': block,
            }
        ]"
        @click="handleClick"
        >
            <i class="iconfont icon-bs-icon-loading bs-icon-loading" v-if="loading"></i>
            <i class="iconfont" :class="buttonIcon" v-if="!loading && icon"></i>
            <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
  export default {
    name: 'BButton',
    props: {
        disabled: Boolean,
        plain: Boolean,
        ghost: Boolean,
        htmlType: {
            type: String,
            default: 'button',
            validator: function (value) {
                return ['button', 'submit', 'reset'].indexOf(value) !== -1
            }
        },
        icon: String,
        loading: Boolean,
        shape: {
            type: String,
            validator: function (value) {
                return ['circle', 'round'].indexOf(value) !== -1
            }
        },
        size: {
            type: String,
            validator: function (value) {
                return ['large', 'small'].indexOf(value) !== -1
            }
        },
        type: {
            type: String,
            validator: function (value) {
                return ['primary', 'success', 'warning', 'danger', 'info', 'dashed', 'link'].indexOf(value) !== -1
            }
        },
        block: Boolean,
        href: String,
        target: Boolean,
    },
    computed: {
        buttonIcon() {
            return {
                ['icon-bs-icon-' + this.icon]: true
            }
        }
    },
    methods: {
        handleClick(evt) {
            if (this.disabled && this.loading) {
                return;
            }
            if (this.href) {
                this.target ?  window.open(this.href) : window.location.href = this.href;
            }
            this.$emit('click', evt);
        }
    },
  };
</script>

<style lang="scss" scoped>
</style>