<template>
    <div class="dashboard events">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="far fa-calendar-alt"></i> Registrations</h4>
                    </template>
                    <table class="w-100 results">
                        <thead>
                        <tr>
                            <td width="50%">Event Name</td>
                            <td>Dates</td>
                            <td>Location</td>
                            <td>Status</td>
                            <td>&nbsp;</td>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="t in types">
                            <tr class="subhead">
                                <td colspan="5">
                                    {{t.name}}
                                </td>
                            </tr>
                            <tr v-for="r in t.registrations">
                                <td>{{r.name}}</td>
                                <td class="text-center">
                                    {{r.start}} - {{r.end}}
                                </td>
                                <td>
                                    {{r.location}}
                                </td>
                                <td>
                                    {{r.status}}
                                </td>
                                <td>
                                    <i class="fas fa-file mr-1 cursor-pointer" @click="viewClassDescription(r)"></i>
                                    <el-tooltip content="Register">
                                        <i class="fas fa-sign-in-alt text-success"></i>
                                    </el-tooltip>
                                </td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </card>
            </div>
        </div>
        <el-dialog
                :title="item.name"
                :visible.sync="showClass"
                :close-on-click-modal="false"
                width="80%" custom-class="p-0">
            <p v-html="item.description"></p>
        </el-dialog>
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
                item: {},
                showClass: false,
                types: [
                    {
                        id: 0,
                        name: 'Registered',
                        registrations: [
                            {
                                id: 1,
                                name: 'Eastern Region FacRep Meeting',
                                location: 'Providence, RI',
                                start: '01/06/2019',
                                end: '01/10/2019',
                                type: 'request',
                                status: 'Registered',
                                description: 'World\'s premiere aviation safety conference...',
                            },
                        ]
                    }, {
                        id: 1,
                        name: 'Available',
                        registrations: [
                            {
                                id: 2,
                                name: 'Convention',
                                location: 'Houston, TX',
                                start: '04/30/2020',
                                end: '05/01/2020',
                                type: 'request',
                                status: '-',
                                description: 'NATCA biannual convention.',
                            }
                        ]
                    }, {
                        id: 1,
                        name: 'History',
                        registrations: [
                            {
                                id: 1,
                                name: 'Communicating For Safety 2018',
                                location: 'Las Vegas, NV',
                                start: '01/06/2018',
                                end: '01/10/2018',
                                type: 'request',
                                status: 'Attended',
                                description: 'World\'s premiere aviation safety conference...',
                            }, {
                                id: 2,
                                name: 'Convention 2018',
                                location: 'Philadelphia, PA',
                                start: '04/30/2018',
                                end: '05/01/2018',
                                type: 'request',
                                status: 'Cancelled',
                                description: 'NATCA biannual convention.',
                            }
                        ]
                    }

                ]
            }
        },
        methods: {
            test() {
                console.log(this.item);
            },
            viewClassDescription(c) {
                this.showClass = true;
                this.item = c;
            }
        }
    }
</script>
<style>

</style>
