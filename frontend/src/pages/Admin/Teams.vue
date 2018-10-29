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
                                <td>
                                    <router-link :to="'/admin/teams/' + l.listid" class="text-dark">{{l.name}}</router-link>
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
                                listid: 0,
                                name: 'NATCA Charitable Foundation',
                                subscribed: 0
                            },
                            {
                                listid: 1,
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
                                listid: 2,
                                name: 'Committee Members',
                                subscribed: 1
                            },
                            {
                                listid: 3,
                                name: 'Website Workgroup',
                                subscribed: 0
                            }
                        ],
                    }, {
                        id: 2,
                        name: 'Jacksonville Center',
                        lists: [
                            {
                                listid: 4,
                                name: 'Members',
                                subscribed: 1
                            },
                            {
                                listid: 5,
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
                                listid: 6,
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
