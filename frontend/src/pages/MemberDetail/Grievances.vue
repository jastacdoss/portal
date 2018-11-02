<template>
    <div class="dashboard listserv">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-paperclip"></i> Active Grievances</h4>
                    </template>
                    <table class="w-100 results">
                        <thead>
                        <tr  class="head">
                            <td width="50%">Grievance</td>
                            <td>Violation Date</td>
                            <td>Status</td>
                            <td>&nbsp;</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="g in grievances">
                            <td>{{g.name}}</td>
                            <td>{{g.date}}</td>
                            <td>{{g.status}}</td>
                            <td>
                                <i class="fas fa-file mr-1 cursor-pointer" @click="viewGrievance(g)"></i>
                                <i class="fas fa-edit mr-1"></i>
                                <i class="fas fa-trash text-danger"></i>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <span class="add-details mb-2" @click="addLine(grievances)"><i class="fas fa-plus"></i></span>
                </card><!-- ACTIVE -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-history"></i> Archive</h4>
                    </template>
                    <table class="w-100 results">
                        <thead>
                        <tr class="head">
                            <td width="75%">Grievance</td>
                            <td>Closed Date</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a @click.prevent="viewGrievance(grievances[0])">Overtime Skip</a></td>
                            <td>04/08/2018</td>
                        </tr>
                        </tbody>
                    </table>
                </card><!-- Archive -->
            </div>
        </div>

        <el-dialog
                title="Grievance #85764"
                :visible.sync="showGrievance"
                :close-on-click-modal="false"
                width="80%" custom-class="p-0">
            <div class="">
                <h5 class="card-subtitle text-muted">
                    Name
                </h5>
                <p>{{item.name}}</p>

                <h5 class="card-subtitle text-muted">
                    Violation Date
                </h5>
                <p>{{item.date}}</p>

                <h5 class="card-subtitle text-muted">
                    Nature of Grievance
                </h5>
                <p>{{item.nature}}</p>

                <h5 class="card-subtitle text-muted">
                    Corrective Action Desired
                </h5>
                <p>{{item.action}}</p>
                <!--<div class="card-body">-->
                    <!--<div class="row">-->
                        <!--<div class="col">-->
                            <!--<h4></h4>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>

        </el-dialog>
    </div>
</template>
<script>
    import {Badge, Checkbox, Radio, CeInput} from 'src/components';
    import {Dialog} from 'element-ui';

    export default {
        components: {
            Checkbox,
            Radio,
            Badge,
            CeInput,
            [Dialog.name]: Dialog,
        },

        data() {
            return {
                showGrievance: false,
                item: {},
                grievances: [
                    {
                        name: '2+ Hours on Position',
                        date: '09/08/2018',
                        status: 'Active',
                        nature: 'On September 09, 2018  ZJX management required ATCS Jason T Doss to work an operational position for in excess of two hours. ',
                        action: 'The Union requests that the Agency takes the following actions:\n' +
                            '\n' +
                            '1.  Comply with the CBA.   \n' +
                            '2.  Award 2-hours excused absence to Jason T Doss.  \n' +
                            '3. Please Cease this practice immediately.\n' +
                            '4. Any other remedy deemed appropriate.'
                    }
                ],

            }
        },
        methods: {
            test() {
                console.log(this.item);
            },
            addLine(o) {
                o.push([])
            },
            viewGrievance(g) {
                this.showGrievance = true;
                this.item = g;
            }
        }
    }
</script>
<style>

</style>
