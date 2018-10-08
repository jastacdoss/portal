<template>
    <div class="dashboard">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title">Form Elements</h4>
                    </template>
                    <div>
                        <form method="get" action="/" class="form-horizontal">
                            <div class="row">
                                <label class="col-sm-2 col-form-label">With help</label>
                                <div class="col-sm-10">
                                    <fg-input placeholder="Enter email">
                  <span slot="helpBlock" class="form-text">A block of help text that breaks onto a new line.
                  </span>
                                    </fg-input>
                                </div>
                            </div>

                            <div class="row">
                                <label class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <fg-input type="password" value="password">
                                    </fg-input>
                                </div>
                            </div>

                            <div class="row">
                                <label class="col-sm-2 col-form-label">Placeholder</label>
                                <div class="col-sm-10">
                                    <fg-input placeholder="Placeholder">
                                    </fg-input>
                                </div>
                            </div>

                            <div class="row">
                                <label class="col-sm-2 col-form-label">Disabled</label>
                                <div class="col-sm-10">
                                    <fg-input value="Disabled input here.." disabled>
                                    </fg-input>
                                </div>
                            </div>

                            <div class="row">
                                <label class="col-sm-2 col-form-label">Static Control</label>
                                <div class="col-sm-10">
                                    <fg-input>
                                        <p class="form-control-static">hello@creative-tim.com</p>
                                    </fg-input>
                                </div>
                            </div>

                            <div class="row">
                                <label class="col-sm-2 col-form-label">Checkboxes and radios</label>
                                <div class="col-sm-10 checkbox-radios">
                                    <checkbox v-model="checkboxes.first">First checkbox</checkbox>
                                    <checkbox v-model="checkboxes.second">Second checkbox</checkbox>

                                    <radio label="1" v-model="radios.radio1">First Radio</radio>
                                    <radio label="2" v-model="radios.radio1">Second Radio</radio>
                                </div>
                            </div>

                            <div class="row">
                                <label class="col-sm-2 col-form-label">Inline checkboxes</label>
                                <div class="col-sm-10 checkbox-radios">
                                    <checkbox v-model="checkboxes.a" inline>a</checkbox>
                                    <checkbox v-model="checkboxes.b" inline>b</checkbox>
                                    <checkbox v-model="checkboxes.c" inline>c</checkbox>
                                </div>
                            </div>

                        </form>
                    </div>
                </card>  <!-- end card -->
            </div>
            <div class="col">
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
