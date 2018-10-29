<template>
    <div class="dashboard academy">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-book-reader"></i> Resources</h4>
                    </template>

                    <table class="w-75 mx-auto results">
                        <tbody>
                        <template v-for="r in resources">
                            <tr class="subhead">
                                <td colspan="2">
                                    {{r.name}}
                                </td>
                            </tr>
                            <tr v-for="i in r.items">
                                <td>{{i.name}}</td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
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
            return {
                resources: [
                    {
                        id: 0,
                        name: 'National',
                        items: [
                            {
                                name: 'NATCA Constitution',
                                subscribed: 0
                            },
                            {
                                name: '2016 Slate Book Contract',
                                subscribed: 1
                            },
                            {
                                name: 'MOUs',
                                subscribed: 1
                            },
                        ]
                    },
                    {
                        id: 1,
                        name: 'Local',
                        items: [
                            {
                                name: 'Constitution',
                                subscribed: 1
                            },
                            {
                                name: 'MOUs',
                                subscribed: 1
                            },
                        ],
                    },
                ],
            }
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
