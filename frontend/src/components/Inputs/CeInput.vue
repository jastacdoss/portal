<template>
      <span
              v-on="listeners"
              v-bind="$attrs"
              :class="{'test': focused}"
              @focus="focused = true"
              contenteditable>{{ prefix }}{{ value }}</span>
</template>
<script>
    export default {
        inheritAttrs: false,
        name: 'ce-input',
        props: {
            required: Boolean,
            label: String,
            error: String,
            labelClasses: String,
            inputClasses: String,
            value: [String, Number],
            addonRightIcon: String,
            addonLeftIcon: String,
            prefix: String,
        },
        data() {
            return {
                touched: false,
                focused: false,
            }
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: this.updateValue,
                    focus: this.onFocus,
                    blur: this.onBlur
                }
            },
            hasIcon() {
                const {addonRight, addonLeft} = this.$slots
                return addonRight !== undefined || addonLeft !== undefined || this.addonRightIcon !== undefined || this.addonLeftIcon !== undefined
            }
        },
        methods: {
            updateValue(evt) {
                let value = evt.target.value
                if (!this.touched && value) {
                    this.touched = true
                }
                this.$emit('input', value)
            },
            onFocus(value) {
                this.focused = true;
                this.$emit('focus', value);
            },
            onBlur(value) {
                this.focused = false;
                this.$emit('blur', value);
            }
        }
    }
</script>
<style>

</style>
