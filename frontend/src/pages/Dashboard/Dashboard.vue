<template>
    <div class="dashboard">
        <div class="alert-container" v-if="alertOne || alertTwo">
            <div class="alert alert-info alert-with-icon" data-notify="container" v-if="alertOne" @click.prevent="alertOne = false">
                <button type="button" aria-hidden="true" class="close">
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <span data-notify="icon" class="now-ui-icons ui-1_bell-53"></span>
                <span data-notify="message">
                        This is a notification about something important. These can be sent to any member when logged in and
                        will appear at the top of the page
                    </span>
            </div>
            <div class="alert alert-danger alert-with-icon" data-notify="container" v-if="alertTwo" @click.prevent="alertTwo = false">
                <button type="button" aria-hidden="true" class="close">
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <span data-notify="icon" class="fas fa-exclamation-triangle"></span>
                <span data-notify="message">
                        This is another notification. They can be any color to specify importance or categories.
                    </span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <card class="stacked-form" title="Profile">
                    <h4 slot="header" class="card-title">
                        <i class="fas fa-user"></i> Profile
                    </h4>
                    <h4 class="mt-0 text-info">Jason Doss</h4>

                    <div class="row">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">Mailing Address</h6>
                            <p class="card-text">
                                12345 Aviation Lane<br>
                                Jacksonville, FL 32046
                            </p>
                            <h6 class="card-subtitle mb-2 text-muted">Phone</h6>
                            <p class="card-text">
                                <b>c:</b> 123-456-7890<br>
                                <b>h:</b> 123-456-7890<br>
                            </p>
                        </div>
                        <div class="col">
                            <div class="row mb-2">
                                <div class="col">
                                    <h6 class="card-subtitle mb-2 text-muted">Facility</h6>
                                    <p class="card-text">
                                        ZJX
                                    </p>
                                </div>
                                <div class="col">
                                    <h6 class="card-subtitle mb-2 text-muted">Region</h6>
                                    <p class="card-text">
                                        NSO
                                    </p>
                                </div>
                                <div class="col">
                                    <h6 class="card-subtitle mb-2 text-muted">Unit</h6>
                                    <p class="card-text">
                                        0061
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h6 class="card-subtitle mb-2 text-muted">Senators</h6>
                                    <p class="card-text">
                                        Bill Nelson - D<br>
                                        Marco Rubio -R<br>
                                    </p>
                                    <h6 class="card-subtitle mb-2 text-muted">Representative</h6>
                                    <p class="card-text">
                                        Ted Yoho - R
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
                <card class="stacked-form" title="Job History">
                    <h4 slot="header" class="card-title">
                        <i class="fas fa-history"></i> Job History
                    </h4>

                    <h4 class="mt-0 text-info">Jason Doss</h4>

                    <el-table class="table-striped" :data="history">
                        <el-table-column prop="region" label="Region" class-name="text-uppercase"></el-table-column>
                        <el-table-column prop="facility" label="Facility" class-name="text-uppercase"></el-table-column>
                        <el-table-column prop="unit" label="Unit"></el-table-column>
                        <el-table-column prop="start" label="Start"></el-table-column>
                        <el-table-column prop="end" label="End"></el-table-column>
                    </el-table>
                </card>
            </div>
            <div class="col-sm-6">
                <card class="stacked-form" title="Facility Info">
                    <h4 slot="header" class="card-title">
                        <i class="far fa-building"></i> Facility Info
                    </h4>
                    <h4 class="mt-0 text-info">Jacksonville ARTCC</h4>
                    <div class="row mb-2">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">Mailing Address</h6>
                            <p class="card-text">
                                1 Aviation Lane<br>
                                Jacksonville, FL 32046
                            </p>
                            <h6 class="card-subtitle mb-2 text-muted">Phone</h6>
                            <p class="card-text">
                                123-456-7890
                            </p>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">Level</h6>
                            <p class="card-text">
                                11
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">Miscellaneous</h6>
                            <p class="card-text">
                                Wifi Password: helloworld!
                                To connect to wifi visit http://natcazjx.org and enter MAC address
                            </p>
                        </div>
                    </div>
                </card>

                <card class="stacked-form" title="Finances">
                    <h4 slot="header" class="card-title">
                        <i class="fas fa-dollar-sign"></i> Finances
                    </h4>
                    <el-table class="table-striped" :data="finances">
                        <el-table-column prop="effective" label="Effective"></el-table-column>
                        <el-table-column prop="salary" label="Salary"></el-table-column>
                        <el-table-column prop="dues" label="Dues"></el-table-column>
                        <el-table-column prop="pac" label="PAC"></el-table-column>
                    </el-table>
                </card>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <card class="stacked-form" title="Representatives">
                    <h4 slot="header" class="card-title">
                        <i class="fas fa-users"></i> Representatives
                    </h4>
                    <el-table class="table-striped" :data="reps">
                        <el-table-column prop="title" label="Title"></el-table-column>
                        <el-table-column prop="name" label="Name"></el-table-column>
                        <el-table-column prop="email" label="Email"></el-table-column>
                        <el-table-column prop="phone" label="Phone"></el-table-column>
                    </el-table>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import {Table, TableColumn} from 'element-ui';

    export default {
        components: {
            [Table.name]: Table,
            [TableColumn.name]: TableColumn
        },

        data() {
            return {
                alertOne: true,
                alertTwo: true,
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
        }
    }
</script>
<style>

</style>
