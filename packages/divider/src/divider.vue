<template>
    <div
        class="bs-divider"
        :class="[
            'bs-divider--' + direction,
        ]"
        :style="{margin: margin ? margin : ''}"
    >
        <div class="bs-divider-title" :class="'bs-divider-title--' + position" :style="{color: color ? color : '', fontSize: fontSize ? fontSize + 'px' : ''}" v-if="$slots.default"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'BDivider',
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator: function(value) {
                return ['horizontal', 'vertical'].indexOf(value) !== -1
            }
        },
        position: {
            type: String,
            default: 'center',
            validator: function(value) {
                return ['center', 'left', 'right'].indexOf(value) !== -1
            }
        },
        margin: String,
        color: String,
        fontSize: String,
    },
}
</script>