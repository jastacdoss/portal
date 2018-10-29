<template>
    <div class="dashboard pac">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-dollar-sign"></i> PAC Donations</h4>
                    </template>
                    <table class="w-100 results">
                        <thead>
                        <tr>
                            <td>PP</td>
                            <td>Date</td>
                            <td>Amount</td>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="y in years">
                            <tr class="subhead">
                                <td colspan="3">
                                    {{y.year}}
                                </td>
                            </tr>
                            <tr v-for="d in y.donations">
                                <td class="text-center">
                                    {{d.pp}}
                                </td>
                                <td>{{d.date}}</td>
                                <td class="text-center">
                                    {{d.amount}}
                                </td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </card>
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-funnel-dollar"></i> PAC Form</h4>
                    </template>

                    <h5 class="card-header">Current Donation Amount</h5>
                    <h6 class="card-subtitle text-muted ml-3 mt-1">$35.00</h6>

                    <div class="card w-75 mx-auto mt-3 p-3">
                        <div class="row">
                            <div class="col">
                                <p class="text-left">
                                    “I hereby authorize and direct the Federal Aviation Administration to deduct from my bi-weekly pay, the amount
                                    indicated below and forward such amount to the National Air Traffic Controllers Association (NATCA) Political Action
                                    Committee (PAC). This authorization is voluntarily made on my specific understanding: that the signing of this
                                    authorization and the making of these voluntary contributions are not conditions of membership in or employment by
                                    NATCA; that the amounts listed below are only suggestions and that I am free to contribute more, less or not at all
                                    without reprisal; that NATCA PAC will use the voluntary contributions it receives for political purposes, including but not
                                    limited to making contributions to and expenditures on behalf of candidates for federal, state and/or local offices and
                                    addressing political issues of public importance; and that federal law requires political committees to report the name,
                                    mailing address, occupation and name of employee for each individual whose contributions to the PAC aggregate in
                                    excess of $200 per calendar year. This voluntary deduction to contribute to NATCA PAC will remain in force until
                                    revoked by me in writing to the Treasurer of NATCA PAC or I am no longer in NATCA PAC’s eligible class.”
                                    Contributions to the NATCA PAC are not deductible for federal income tax purposes.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <fg-input addon-left-icon="fas fa-dollar-sign" placeholder="New Donation Amount"></fg-input>
                            </div>
                            <div class="col">
                                <checkbox v-model="item.email">Sign up for Grassroots Emails</checkbox>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col small text-left">
                                Privacy Act Statement:
                                Section 5525 of Title 5 United States Code (Allotments and Assignments of Pay) permits Federal Agencies to collect this information. This complete form is used to
                                request that PAC dues be deducted from your pay and to notify your labor organization of the deduction. Completing this form is voluntary, but it may not be processed if
                                all requested information is not provided.
                                This record may be disclosed outside your agency to: 1. the Department of the Treasury to make proper financial adjustments; 2. a Congressional office if you make
                                an inquiry to that office related to this record; 3. a court or an appropriate Government agency if the Government is party to legal suit; 4. an appropriate law enforcement
                                agency if we become aware of a legal violation; 5. an organization which is a designated collection agency of a particular labor organization; and 6. other federal agencies
                                for management, statistical and other official functions (without personal identification).
                                Executive Order 9397 allows Federal agencies to use the social security number (SSN) as an individual identifier to avoid confusion caused by employees with the same
                                or similar names. Supplying your SSN is voluntary, but failure to provide it, when it is used as the employee identification number, may mean that the payroll deductions
                                cannot be processed.
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-center">
                                <n-button type="primary" round="">Save</n-button>
                                <n-button type="default" round="">Cancel</n-button>
                            </div>
                        </div>
                    </div>

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
                item: {},
                years: [
                    {
                        year: 2019,
                        donations: [
                            {
                                amount: '$35.00',
                                date: '03/04/2018',
                                pp: '5',
                            },
                            {
                                amount: '$35.00',
                                date: '02/21/2018',
                                pp: '4',
                            },
                            {
                                amount: '$35.00',
                                date: '02/07/2018',
                                pp: '3',
                            },
                            {
                                amount: '$35.00',
                                date: '01/21/2018',
                                pp: '2',
                            },
                            {
                                amount: '$35.00',
                                date: '01/07/2018',
                                pp: '1',
                            },
                        ]
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
            }
        }
    }
</script>
<style>

</style>
