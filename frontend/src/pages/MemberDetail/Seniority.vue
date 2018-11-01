<template>
    <div class="dashboard member-detail">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-users"></i> Seniority</h4>
                    </template>
                    <div class="row text-center">
                        <div class="col ">
                            <h6 class="card-subtitle mb-2 text-muted border w-75 mx-auto">
                                Name
                            </h6>
                            <b>Jason Doss</b>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted border w-75 mx-auto">
                                Facility
                            </h6>
                            <b>ZJX</b>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Area
                            </h6>
                            <ce-input name="Area" value="South" class="font-weight-bold"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted border w-75 mx-auto">
                                Career Level
                            </h6>
                            <b>Certified Professional Controller</b>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted border w-75 mx-auto">
                                Classification
                            </h6>
                            <b>2152</b>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Status
                            </h6>
                            <strong class="text-success">Member</strong> OR <strong class="text-danger">Non-Member</strong>
                        </div>
                    </div>
                    <div class="row mt-1 text-center bg-lightgray py-4 my-3">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted w-75 mx-auto bg-white text-dark">
                                Bargaining Unit
                            </h6>
                            <ce-input name="BargainingUnit" value="04/01/2005"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted w-75 mx-auto bg-white text-dark">
                                NATCA Bargaining Unit
                            </h6>
                            <ce-input name="NatcaBargainingUnit" value="04/01/2005"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted border w-75 mx-auto bg-white text-dark">
                                FAA EOD
                            </h6>
                            <ce-input name="FaaEod" value="01/01/2005"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted border w-75 mx-auto bg-white text-dark">
                                FAA SCD
                            </h6>
                            <ce-input name="FaaScd" value="01/01/2005"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Joined Union Date
                            </h6>
                            <ce-input name="JoinedUnionDate" value="04/01/2005"></ce-input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Other Details
                            </h6>
                            <checkbox v-model="item.DodTime" inline>DOD/FCT Time</checkbox>
                            <checkbox v-model="item.LongTermDisability" inline>Age 56 Waiver</checkbox>
                            <checkbox v-model="item.Veteran" inline>Has Been Supervisor</checkbox>
                            <checkbox v-model="item.RetiredMilitaryController" inline>Tie Breaker
                            </checkbox>
                        </div>
                    </div> <!-- Contact -->
                </card><!-- MEMBER DETAILS -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <card card-body-classes="p-0">
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-history"></i> Job History</h4>
                    </template>
                    <table class="w-100">
                        <thead>
                        <tr>
                            <td >Facility</td>
                            <td>Region</td>
                            <td>ORG Code</td>
                            <td>Unit</td>
                            <td>Start</td>
                            <td>End</td>
                            <td>Area</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="j in jobs">
                            <td>{{j.facility}}</td>
                            <td>{{j.region}}</td>
                            <td>{{j.org}}</td>
                            <td>{{j.unit}}</td>
                            <td>{{j.start}}</td>
                            <td>{{j.end}}</td>
                            <td>{{j.area}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <span class="add-details mb-3" @click="showJobForm = true"><i class="fas fa-plus"></i></span>
                </card><!-- JOB HISTORY -->
            </div>
        </div>
        <el-dialog
                title="New Job Entry"
                :visible.sync="showJobForm"
                width="80%" custom-class="p-0">
            <div class="">
                <fg-input label="Facility"></fg-input>
                <fg-input label="Region"></fg-input>
                <fg-input label="Org Code"></fg-input>
                <fg-input label="Unit"></fg-input>
                <div class="row">
                    <div class="col">
                        <fg-input label="Start"></fg-input>
                    </div>
                    <div class="col">
                        <fg-input label="End"></fg-input>
                    </div>
                </div>
                <checkbox v-model="item.DodTime" inline>DOD/FCT Time</checkbox>
                <div class="row">
                    <div class="col text-center">
                        <n-button type="primary" round="" >Save</n-button>
                        <n-button type="default" round="" class="mr-1">Cancel</n-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {Badge, Checkbox, Radio, CeInput, Button} from 'src/components';
    import {Table, TableColumn, Popover, Dialog} from 'element-ui';

    export default {
        components: {
            Checkbox,
            Radio,
            Badge,
            CeInput,
            Button,
            [Table.name]: Table,
            [TableColumn.name]: TableColumn,
            [Dialog.name]: Dialog,
            Popover
        },

        data() {
            return {
                item: {
                    FirstName: 'Jason',
                    MiddleName: 'Tyler',
                    LastName: 'Doss',
                    Addresses: [
                        {
                            Address: '123 First St',
                            City: 'Fleming Island',
                            State: 'FL',
                            Zip: '32003',
                            Type: 'mail'
                        },
                        {
                            Address: '456 Second St',
                            City: 'Jacksonville',
                            State: 'FL',
                            Zip: '32046',
                            Type: 'bill'
                        }
                    ]
                },
                jobs: [
                    {
                        facility: 'ZJX',
                        region: 'NSO',
                        org: 'SOCC02C',
                        unit: 'ATC-0061',
                        start: '04/12/2012',
                        end: '',
                        area: 'South'
                    },
                    {
                        facility: 'ZID',
                        region: 'NGL',
                        org: 'SOCC02C',
                        unit: 'ATC-0061',
                        start: '01/08/2005',
                        end: '04/12/2012',
                        area: '6'
                    }
                ],
                finances: [
                    {
                        effective: '2011/01/01',
                        salary: '$25.14',
                        dues: '$15.00',
                        pac: '$5.00'
                    },
                    {
                        effective: '2011/01/01',
                        salary: '$25.14',
                        dues: '$15.00',
                        pac: '$5.00'
                    },
                    {
                        effective: '2011/01/01',
                        salary: '$25.14',
                        dues: '$15.00',
                        pac: '$5.00'
                    },
                    {
                        effective: '2011/01/01',
                        salary: '$25.14',
                        dues: '$15.00',
                        pac: '$5.00'
                    },
                ],
                history: [
                    {
                        facility: 'zid',
                        region: 'ngl',
                        unit: '0061',
                        start: '01/01/2001',
                        end: '04/12/2012'
                    },
                    {
                        facility: 'zjx',
                        region: 'nso',
                        unit: '0061',
                        start: '04/12/2012',
                        end: ''
                    }
                ],
                reps: [
                    {
                        title: 'President',
                        name: 'Paul Rinaldi',
                        email: 'pres@natca.net',
                        phone: '123-456-7890'
                    },
                    {
                        title: 'Executive Vice President',
                        name: 'Patricia Gilbert',
                        email: 'evp@gmail.com',
                        phone: '123-456-7890'
                    },
                    {
                        title: 'Regional Vice President',
                        name: 'Jim Marinitti',
                        email: 'rvp@gmail.com',
                        phone: '123-456-7890'
                    },
                    {
                        title: 'Regional Vice President - Alternate',
                        name: 'Jason Arnold',
                        email: 'arvp@gmail.com',
                        phone: '123-456-7890'
                    },
                    {
                        title: 'Facility President',
                        name: 'Chris Crappo',
                        email: 'zjxpres@gmail.com',
                        phone: '123-456-7890'
                    },
                    {
                        title: 'Facility Vice President',
                        name: 'Andrew Day',
                        email: 'zjxvp@gmail.com',
                        phone: '123-456-7890'
                    },
                    {
                        title: 'Safety Representative',
                        name: 'John Doe',
                        email: 'safety@gmail.com',
                        phone: '123-456-7890'
                    },
                    {
                        title: 'OSHA Representative',
                        name: 'Jane Doe',
                        email: 'osha@gmail.com',
                        phone: '123-456-7890'
                    }
                ]
            }
        },
        methods: {
            test() {
                console.log(this.item);
            },
            edit(v) {
                return this.editing == v;
            }
        }
    }
</script>
<style>

</style>
