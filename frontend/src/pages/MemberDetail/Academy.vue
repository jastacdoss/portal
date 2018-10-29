<template>
    <div class="dashboard academy">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-graduation-cap"></i> Academy Classes</h4>
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
                                id: 2,
                                name: 'Safety Advocacy Training',
                                location: 'Las Vegas, NV',
                                start: '04/30/2019',
                                end: '05/01/2019',
                                type: 'request',
                                status: 'Requested',
                                description: 'This 3 ½ day course begins at 8:30 a.m. Monday ending at noon on Thursday. The Advanced Representative Training (ART) course, similar to Representative Training I (formerly BRT) is Labor Relations (LR) centric. ART will provide more in-depth instruction on LR related materials covering some of the same modules that are taught in the BRT. Attendee participation is a must. Attendees must also bring a laptop to the class. There are seven (7) LR related modules presented in this class. There will be a question and answer period when the class is completed. Please come prepared to learn.',
                            }
                        ]
                    }, {
                        id: 1,
                        name: 'Available',
                        registrations: [
                            {
                                id: 1,
                                name: 'Representative Training 1',
                                location: 'Las Vegas, NV',
                                start: '01/06/2019',
                                end: '01/10/2019',
                                status: '-',
                                type: 'request',
                                description: 'This 3 ½ day course begins at 8:30 a.m. Monday ending at noon on Thursday. The Advanced Representative Training (ART) course, similar to Representative Training I (formerly BRT) is Labor Relations (LR) centric. ART will provide more in-depth instruction on LR related materials covering some of the same modules that are taught in the BRT. Attendee participation is a must. Attendees must also bring a laptop to the class. There are seven (7) LR related modules presented in this class. There will be a question and answer period when the class is completed. Please come prepared to learn.',
                            },{
                                id: 3,
                                name: 'Secretary Treasurer Training',
                                location: 'Las Vegas, NV',
                                start: '02/20/2019',
                                end: '02/21/2019',
                                type: 'request',
                                status: '-',
                                description: 'This 3 ½ day course begins at 8:30 a.m. Monday ending at noon on Thursday. The Advanced Representative Training (ART) course, similar to Representative Training I (formerly BRT) is Labor Relations (LR) centric. ART will provide more in-depth instruction on LR related materials covering some of the same modules that are taught in the BRT. Attendee participation is a must. Attendees must also bring a laptop to the class. There are seven (7) LR related modules presented in this class. There will be a question and answer period when the class is completed. Please come prepared to learn.',
                            },
                        ]
                    }, {
                        id: 1,
                        name: 'History',
                        registrations: [
                            {
                                id: 1,
                                name: 'LEAP',
                                location: 'Dallas, TX',
                                start: '01/06/2018',
                                end: '01/10/2018',
                                status: 'Attended',
                                type: 'request',
                                description: 'This 3 ½ day course begins at 8:30 a.m. Monday ending at noon on Thursday. The Advanced Representative Training (ART) course, similar to Representative Training I (formerly BRT) is Labor Relations (LR) centric. ART will provide more in-depth instruction on LR related materials covering some of the same modules that are taught in the BRT. Attendee participation is a must. Attendees must also bring a laptop to the class. There are seven (7) LR related modules presented in this class. There will be a question and answer period when the class is completed. Please come prepared to learn.',
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
