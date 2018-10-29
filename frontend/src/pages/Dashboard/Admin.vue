<template>
    <div class="dashboard">
        <div class="alert-container" v-if="alertOne || alertTwo">
            <div class="alert alert-info alert-with-icon" data-notify="container" v-if="alertOne" @click.prevent="alertOne = false">
                <button type="button" aria-hidden="true" class="close">
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <span data-notify="icon" class="now-ui-icons ui-1_bell-53"></span>
                <span data-notify="message">
                        This is a notification about something important. These will indicate when action needs to be
                    taken by a member to validate or correct information in the program.
                    </span>
            </div>
            <div class="alert alert-danger alert-with-icon" data-notify="container" v-if="alertTwo" @click.prevent="alertTwo = false">
                <button type="button" aria-hidden="true" class="close">
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <span data-notify="icon" class="fas fa-comment"></span>
                <span data-notify="message">
                        This is a leadership message. NATCA leaders can communicate directly through this notification panel
                    to individuals or groups of individuals.
                    </span>
            </div>
        </div>
        <div class="row">
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
