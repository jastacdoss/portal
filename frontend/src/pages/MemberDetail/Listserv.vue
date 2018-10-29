<template>
    <div class="dashboard listserv">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-mail-bulk"></i> Team Lists</h4>
                    </template>
                    <table class="w-100 results">
                        <thead>
                        <tr>
                            <td width="80%">List Name</td>
                            <td>Subscribe</td>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="t in teams">
                            <tr class="subhead">
                                <td colspan="2">
                                    {{t.name}}
                                </td>
                            </tr>
                            <tr v-for="l in t.lists">
                                <td>{{l.name}}</td>
                                <td class="text-center">
                                    <el-switch
                                            v-model="l.subscribed"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949"
                                            :active-value="1"
                                            :inactive-value="0">
                                    </el-switch>
                                </td>
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
    import {Switch} from 'element-ui';

    export default {
        components: {
            Checkbox,
            Radio,
            Badge,
            CeInput,
            [Switch.name]: Switch,
        },

        data() {
            return {
                grievances: [
                    {
                        name: '2+ Hours on Position',
                        date: '09/08/2018',
                        status: 'Active',
                    }
                ],
                teams: [
                    {
                        id: 0,
                        name: 'Global',
                        lists: [
                            {
                                name: 'NATCA Charitable Foundation',
                                subscribed: 0
                            },
                            {
                                name: 'National Update',
                                subscribed: 1
                            },
                        ]
                    },
                    {
                        id: 1,
                        name: 'Internet Technology Committee',
                        lists: [
                            {
                                name: 'Committee Members',
                                subscribed: 1
                            },
                            {
                                name: 'Website Workgroup',
                                subscribed: 0
                            }
                        ],
                    }, {
                        id: 2,
                        name: 'Jacksonville Center',
                        lists: [
                            {
                                name: 'Members',
                                subscribed: 1
                            },
                            {
                                name: 'Executive Board',
                                subscribed: 1
                            }
                        ],
                    },
                    {
                        id: 3,
                        name: 'National',
                        lists: [
                            {
                                name: 'Members',
                                subscribed: 1
                            }
                        ],
                    },
                ],
            }
        },
        methods: {
            test() {
                console.log(this.item);
            },
            addLine(o) {
                o.push([])
            }
        }
    }
</script>
<style>

</style>
