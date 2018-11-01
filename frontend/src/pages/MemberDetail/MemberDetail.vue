<template>
    <div class="dashboard member-detail">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-user"></i> Profile</h4>
                    </template>
                    <h4 class="mt-0 text-info mb-0">Jason Doss</h4>
                    <small class="text-gray font-weight-bold">FAA ID: 0000465000938</small>

                    <div class="row mt-3">
                        <div class="col-sm-6">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Addresses
                                <i class="fas fa-plus ml-2 text-info"></i>
                            </h6>
                            <ul class="list-group my-2 borderless">
                                <li v-for="(ad, idx) in item.Addresses" class="list-group-item py-0">
                                    <i class="fas fa-trash mr-2 text-danger"></i>
                                    <ce-input name="Address" :value="ad.Address"></ce-input>
                                    ,
                                    <ce-input name="City" :value="ad.City" class="ml-1"></ce-input>
                                    ,
                                    <ce-input name="State" :value="ad.State" class="ml-1"></ce-input>
                                    <ce-input name="Zip" :value="ad.Zip" class="ml-1"></ce-input>
                                    ({{ ad.Type }})
                                </li>
                            </ul>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Phones
                                <i class="fas fa-plus ml-2 text-info"></i>
                            </h6>
                            <p class="card-text">
                                <i class="fas fa-trash mr-2 text-danger"></i>
                                <b>c:</b>
                                <ce-input name="phone" value="123-456-7890"></ce-input>
                                <badge type="success" class="ml-1">Primary</badge>
                                <br>
                                <i class="fas fa-trash mr-2 text-danger"></i>
                                <b>h:</b>
                                <ce-input name="phone" value="123-456-7890"></ce-input>
                                <br>
                            </p>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Emails
                                <i class="fas fa-plus ml-2 text-info"></i>
                            </h6>
                            <p class="card-text">
                                <i class="fas fa-trash mr-2 text-danger"></i>
                                <ce-input name="phone" value="jdoss@natca.net"></ce-input>
                                <br>
                                <i class="fas fa-trash mr-2 text-danger"></i>
                                <ce-input name="phone" value="jason@dossweb.com"></ce-input>
                                <badge type="success" class="ml-1">Primary</badge>
                                <br>
                            </p>
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col">
                            Allowed Contact
                            <checkbox v-model="item.MailAllowed" inline>Snail Mail</checkbox>
                            <checkbox v-model="item.CallAllowed" inline>Phone Call</checkbox>
                            <checkbox v-model="item.TextAllowed" inline>Text Message</checkbox>
                            <checkbox v-model="item.EmailAllowed" inline>Email</checkbox>
                        </div>
                    </div> <!-- Contact -->
                    <div class="row mt-3">
                        <div class="col">
                            <b>Shirt Size:</b>
                            <ce-input name="birthday" value="XL" class="ml-1"></ce-input>
                        </div>
                        <div class="col">
                            <b>Birthday:</b>
                            <ce-input name="birthday" value="01/20/1980" class="ml-1"></ce-input>
                        </div>
                        <div class="col">
                            <b>Planned Retirement:</b>
                            <ce-input name="retirement" value="01/30/2030" class="ml-1"></ce-input>
                        </div>
                        <div class="col">
                            <b>Spouses Name:</b>
                            <ce-input name="spouse" value="Stacy" class="ml-1"></ce-input>
                        </div>
                    </div> <!-- Misc -->
                </card><!-- PROFILE -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="far fa-address-card"></i> Member Details</h4>
                    </template>
                    <div class="row text-center">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Status
                            </h6>
                            <strong class="text-success">Member</strong> OR<br>
                            <strong class="text-danger">Non-Member</strong>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Billing Type
                            </h6>
                            <strong>Automatic</strong>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Type
                            </h6>
                            <strong>-----</strong>
                        </div>
                    </div>
                    <div class="row mt-1 text-center bg-lightgray py-2 my-3">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Bargaining Unit
                            </h6>
                            <ce-input name="BargainingUnit" value="04/01/2005"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                NATCA Bargaining Unit
                            </h6>
                            <ce-input name="NatcaBargainingUnit" value="04/01/2005"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                FAA EOD
                            </h6>
                            <ce-input name="FaaEod" value="01/01/2005"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
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
                    <div class="row text-center">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Grade
                            </h6>
                            <ce-input name="Grade" value="KH" class="font-weight-bold"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Career Level
                            </h6>
                            <ce-input name="CareerLevel" value="Certified Professional Controller"
                                      class="font-weight-bold"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Classification
                            </h6>
                            <ce-input name="Classification" value="2152" class="font-weight-bold"></ce-input>
                        </div>
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Salary
                            </h6>
                            <strong class="mr-1">$66.52</strong>
                            <small>($165,143.05)</small>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <h6 class="card-subtitle mb-2 text-muted">
                                Other Details
                            </h6>
                            <checkbox v-model="item.LifeInsurance" inline>Life Insurance</checkbox>
                            <checkbox v-model="item.LongTermDisability" inline>Long Term Disability</checkbox>
                            <checkbox v-model="item.Veteran" inline>Veteran</checkbox>
                            <checkbox v-model="item.RetiredMilitaryController" inline>Retired Military Controller</checkbox>
                        </div>
                    </div> <!-- Contact -->
                </card><!-- MEMBER DETAILS -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <card card-body-classes="p-0">
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-user-clock"></i> NATCA Positions</h4>
                    </template>
                    <table class="w-100 results">
                        <thead>
                        <tr class="head ">
                            <td>Name</td>
                            <td>Level</td>
                            <td>Start</td>
                            <td>End</td>
                            <td width="30%">Notes</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="p in positions">
                            <td>{{p.name}}</td>
                            <td>{{p.level}}</td>
                            <td>{{p.start}}</td>
                            <td>{{p.end}}</td>
                            <td>{{p.notes}}</td>
                        </tr>
                        </tbody>
                    </table>
                </card><!-- NATCA POSITIONS -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <card card-body-classes="p-0">
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-dollar-sign"></i> Finances</h4>
                    </template>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="row text-center">
                                <div class="col">
                                    <h6 class="card-subtitle text-muted">
                                        Total Received
                                    </h6>
                                    <strong class="text-success">$1,865.21</strong>
                                </div>
                                <div class="col">
                                    <h6 class="card-subtitle text-muted">
                                        Dues
                                    </h6>
                                    <strong>$942.51</strong>
                                </div>
                                <div class="col">
                                    <h6 class="card-subtitle text-muted">
                                        Academy
                                    </h6>
                                    <strong>$652.39</strong>
                                </div>
                                <div class="col">
                                    <h6 class="card-subtitle text-muted">
                                        Other
                                    </h6>
                                    <strong>$248.63</strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <table class="w-100 results">
                        <thead>
                        <tr class="head">
                            <td>Pay Period</td>
                            <td>Date</td>
                            <td>Type</td>
                            <td>Amount</td>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="p in periods">
                            <td rowspan="4">{{p.pp}}</td>

                            <tr v-for="l in p.lines">
                                <td>{{l.date}}</td>
                                <td>{{l.type}}</td>
                                <td>{{l.amount}}</td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </card><!-- FINANCES -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <card card-body-classes="p-0">
                    <h4 slot="header" class="card-title">
                        <i class="fas fa-mail-bulk"></i> Communications
                    </h4>
                    <table class="w-100 results">
                        <thead>
                        <tr  class="head">
                            <td>Type</td>
                            <td>Subject</td>
                            <td>Sent</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="c in coms">
                                <td>{{c.type}}</td>
                                <td>
                                    {{c.subject}}
                                    <el-popover class="ml-2"
                                                title="ATS Field Realignment"
                                                trigger="hover" v-if="c.description">
                                        {{c.description}}
                                        <i class="fas fa-info-circle" slot="reference"></i>
                                    </el-popover>
                                </td>
                                <td>{{c.sent}}</td>
                            </tr>
                        </tbody>
                    </table>
                </card> <!-- COMMUNCATIONS -->
            </div>
            <div class="col">
                <card card-body-classes="p-0">
                    <h4 slot="header" class="card-title">
                        <i class="fas fa-file-alt"></i> Documents
                    </h4>
                    <table class="w-100 results">
                        <thead>
                        <tr class="head">
                            <td>Description</td>
                            <td>File Name</td>
                            <td>Uploaded</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="d in docs">
                            <td>{{d.description}}</td>
                            <td>{{d.filename}}</td>
                            <td>{{d.uploaded}}</td>
                        </tr>
                        </tbody>
                    </table>
                </card> <!-- DOCUMENTS -->
            </div>
        </div>
    </div>
</template>
<script>
    import {Badge, Checkbox, Radio, CeInput} from 'src/components/index';
    import {Table, TableColumn, Popover} from 'element-ui';

    export default {
        components: {
            Checkbox,
            Radio,
            Badge,
            CeInput,
            [Table.name]: Table,
            [TableColumn.name]: TableColumn,
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
                coms: [
                    {
                        type: 'email',
                        subject: 'ATS Field Realignment',
                        sent: '09/24/2018 14:22:08',
                        description: 'Brothers and Sisters,\n' +
                            '\n' +
                            '                                        Attached to this message, you will find the Memorandum of Understanding (MOU) between NATCA and the Agency regarding the implementation of the Agency’s Air Traffic Services Field Realignment (ATS Field Realignment or GM Realignment).\n' +
                            '\n' +
                            '                                        The MOU covers the Air Traffic Control (ATC), Traffic Management Unit (TMU), NOTAM, FSS, and Staff Support Specialist (SSS) bargaining units. We ask that you thoroughly review the MOU, so you are familiar with the relevant provisions of the agreement before the Agency’s implementation of the ATS Field Realignment presently scheduled for October 14, 2018.\n' +
                            '\n' +
                            '                                        The implementation of the ATS Field Realignment will have virtually no direct affect on members of the ATC/NOTAM and FSS bargaining units. For members working in ATC facilities that are part of the SSS and TMU bargaining units, the ATS Field Realignment will likely represent a change from current practices and may result in the identification of issues that were not initially contemplated. Both NATCA and the Agency have committed to addressing identified problems and concerns in a timely manner.\n' +
                            '\n' +
                            '                                        We have included a summary of the more relevant provisions of the MOU below:\n' +
                            '\n' +
                            '                                        • No change to the normal points of contact (e.g., communication, bargaining, and collaboration) between the Agency and Union for NATCA Representatives at the facility level.\n' +
                            '                                        • Clarifies the procedures for the submittal and approval of leave for SSS.\n' +
                            '                                        • Provides clarification and protection for SSS work assignments.\n' +
                            '                                        • Ensures BUEs will not have their facility of record changed as a result of the Air Traffic Services Field Realignment and will continue to receive Controller Incentive Pay (CIP) and all other premiums, differentials, and allowances associated with their facility of record.\n' +
                            '                                        • Addresses SSS performance ratings, feedback sessions, and Article 8/Article 9 meetings and the manner in which they may be conducted.\n' +
                            '                                        • Expands “other facility duties” to include duties within a BUE’s District when such duties are assigned in accordance with Article 45 for the ATC and TMU bargaining units.\n' +
                            '                                        • Ensures SSS can continue to maintain operational currency.\n' +
                            '\n' +
                            '                                        We understand the uncertainty associated with this change and have included as many protections as possible in the MOU. To assist us in addressing problems or issues arising from the implementation of the ATS Field Realignment, we are asking that you forward identified issues/ problems to your RVP.\n' +
                            '\n' +
                            '                                        Additionally, to help members better understand the MOU, we have established an email address at gm-questions@natcadc.org for questions regarding the MOU or implementation of the ATS Field Realignment.'
                    },
                    {
                        type: 'email',
                        subject: 'Request Volunteer: National Validation Team',
                        sent: '09/24/2018 14:22:08',
                    }
                ],
                docs: [
                    {
                        description: 'Membership Application',
                        filename: '080412-doss-jason-member-app',
                        uploaded: '04/12/2018'
                    },
                    {
                        description: 'PAC Form',
                        filename: '090622-doss-jason-pac-form',
                        uploaded: '06/22/2009'
                    },
                ],
                positions: [
                    {
                        name: 'IT Committee',
                        level: 'Member',
                        start: '10/06/2015',
                        end: '',
                        notes: ''
                    },
                    {
                        name: 'Pay Committee',
                        level: 'Member',
                        start: '08/13/2018',
                        end: '',
                        notes: ''
                    },
                    {
                        name: 'Vice President',
                        level: 'ZJX',
                        start: '08/31/2014',
                        end: '08/31/2015',
                        notes: 'A note about this item'
                    },
                ],
                periods: [
                    {
                        pp: 19,
                        lines: [
                            {
                                date: '09/11/2018',
                                type: 'Dues',
                                amount: '$74.49'
                            },
                            {
                                date: '09/11/2018',
                                type: 'PAC',
                                amount: '$35.00'
                            },
                            {
                                date: '09/11/2018',
                                type: 'Disaster Relief',
                                amount: '$50.00'
                            },
                        ]
                    },
                    {
                        pp: 18,
                        lines: [
                            {
                                date: '09/11/2018',
                                type: 'Dues',
                                amount: '$74.49'
                            },
                            {
                                date: '09/11/2018',
                                type: 'PAC',
                                amount: '$35.00'
                            },
                            {
                                date: '09/11/2018',
                                type: 'Disaster Relief',
                                amount: '$50.00'
                            },
                        ]
                    }
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
