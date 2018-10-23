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
                            <td width="50%">Class Name</td>
                            <td>Dates</td>
                            <td>Location</td>
                            <td>Status</td>
                            <td>&nbsp;</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="c in classes">
                                <td>{{c.name}}</td>
                                <td class="text-center">
                                    {{c.start}} - {{c.end}}
                                </td>
                                <td>
                                    {{c.location}}
                                </td>
                                <td>
                                    {{c.status}}
                                </td>
                                <td>
                                    <i class="fas fa-file mr-1 cursor-pointer" @click="viewClassDescription(c)"></i>
                                    <el-tooltip content="Register">
                                        <i class="fas fa-sign-in-alt text-success"></i>
                                    </el-tooltip>
                                </td>
                            </tr>
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
                classes: [
                    {
                        id: 1,
                        name: 'Representative Training 1',
                        location: 'Las Vegas, NV',
                        start: '01/06/2019 09:00PST',
                        end: '01/10/2019 16:00PST',
                        status: '-',
                        type: 'request',
                        description: 'This 3 ½ day course begins at 8:30 a.m. Monday ending at noon on Thursday. The Advanced Representative Training (ART) course, similar to Representative Training I (formerly BRT) is Labor Relations (LR) centric. ART will provide more in-depth instruction on LR related materials covering some of the same modules that are taught in the BRT. Attendee participation is a must. Attendees must also bring a laptop to the class. There are seven (7) LR related modules presented in this class. There will be a question and answer period when the class is completed. Please come prepared to learn.',
                    },{
                        id: 2,
                        name: 'Safety Advocacy Training',
                        location: 'Las Vegas, NV',
                        start: '04/30/2019 09:00EST',
                        end: '05/01/2019 16:00EST',
                        type: 'request',
                        status: 'Registration Requested',
                        description: 'This 3 ½ day course begins at 8:30 a.m. Monday ending at noon on Thursday. The Advanced Representative Training (ART) course, similar to Representative Training I (formerly BRT) is Labor Relations (LR) centric. ART will provide more in-depth instruction on LR related materials covering some of the same modules that are taught in the BRT. Attendee participation is a must. Attendees must also bring a laptop to the class. There are seven (7) LR related modules presented in this class. There will be a question and answer period when the class is completed. Please come prepared to learn.',
                    },{
                        id: 3,
                        name: 'Secretary Treasurer Training',
                        location: 'Las Vegas, NV',
                        start: '02/20/2019 09:00PST',
                        end: '02/21/2019 16:00PST',
                        type: 'request',
                        status: '-',
                        description: 'This 3 ½ day course begins at 8:30 a.m. Monday ending at noon on Thursday. The Advanced Representative Training (ART) course, similar to Representative Training I (formerly BRT) is Labor Relations (LR) centric. ART will provide more in-depth instruction on LR related materials covering some of the same modules that are taught in the BRT. Attendee participation is a must. Attendees must also bring a laptop to the class. There are seven (7) LR related modules presented in this class. There will be a question and answer period when the class is completed. Please come prepared to learn.',
                    },
                ],
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
