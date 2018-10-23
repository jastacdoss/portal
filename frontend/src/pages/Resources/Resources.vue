<template>
    <div class="dashboard academy">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-graduation-cap"></i> Academy Classes</h4>
                    </template>

                    <ul class="list-group">
                        <li class="list-group-item">2016 Slate Book Contract</li>
                        <li class="list-group-item">NATCA Constitution</li>
                    </ul>
                </card>
            </div>
        </div>

    </div>
</template>
<script>
    import {Badge, Checkbox, Radio, CeInput} from 'src/components/index';
    import {Switch, Dialog, Tooltip} from 'element-ui';

    export default {
        components: {
            Checkbox,
            Radio,
            Badge,
            CeInput,
            [Switch.name]: Switch,
            [Dialog.name]: Dialog,
            [Tooltip.name]: Tooltip
        },

        data() {
            return {}
        },
        methods: {
            test() {
                console.log(this.item);
            },
        }
    }
</script>
<style>

</style>
