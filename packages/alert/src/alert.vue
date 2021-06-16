<template>
    <transition :name="transition">
        <div
            class="bs-alert"
            :class="[
                'bs-alert--' + type,
                transition ? 'bs-alert--transition' : '',
                {
                    'bs-alert--showIcon': showIcon,
                    'bs-alert--closable': closable,
                    'bs-alert--dark': dark
                }
                
            ]"
            v-if="visible"
        >
            <div class="bs-alert-icon" :class="'bs-alert-icon--' + type" v-if="showIcon">
                <i class="iconfont" :class="'icon-bs-icon-' + typeIcon"></i>
            </div>
            <span class="bs-alert-title"><slot></slot></span>
            <template v-if="closable">
                <i class="iconfont icon-bs-icon-close bs-alert-closebtn" v-if="!closeText" @click="close"></i>
                <span class="bs-alert-closebtn bs-alert-closeText" v-else @click="close">{{closeText}}</span>
            </template>
        </div>
    </transition>
</template>
<script>
  export default {
    name: 'BAlert',
    props: {
        type: {
            type: String,
            default: 'info',
            validator: function(value) {
                return ['success', 'warning', 'info', 'error'].indexOf(value) !== -1
            }
        },
        showIcon: Boolean,
        closable: Boolean,
        closeText: String,
        dark: Boolean,
        icon: String,
        transition: {
            type: String,
            validator: function(value) {
                return ['fade', 'slide'].indexOf(value) !== -1
            }
        },
    },
    data() {
        return {
            visible: true,
        }
    },
    computed: {
        typeIcon() {
            let icon = '';
            if (this.icon) {
                icon = this.icon;
                return icon;
            }
            switch(this.type) {
                case 'success':
                    icon = 'success';
                break;
                case 'warning':
                    icon = 'warning';
                break;
                case 'info':
                    icon = 'info';
                break;
                case 'error':
                    icon = 'close';
                break;
            }
            return icon;
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('close');
        }
    },
  };
</script>