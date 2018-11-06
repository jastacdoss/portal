<template>
    <div class="dashboard calendar">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-calendar"></i> Calendar</h4>
                    </template>
                    <calendar :events="events"></calendar>
                </card><!-- ACTIVE -->
            </div>
        </div>
    </div>
</template>
<script>
    import {Calendar} from 'src/components';

    export default {
        components: {
            Calendar
        },

        data() {
            return {
                events: [
                    {
                        title: 'ZJX Membership Meeting',
                        start: '2018/11/10 17:00',
                        end: '2018/11/10 19:00',
                        backgroundColor: 'red'
                    },
                    {
                        title: 'NSO FacRep Telcon',
                        start: '2018/11/15 11:00',
                        end: '2018/11/15 13:00',
                        backgroundColor: 'green'
                    },
                    {
                        title: 'NEB Meeting',
                        start: '2018/11/05 08:00',
                        end: '2018/11/08 17:00',
                        allDay: true,
                        backgroundColor: 'black'
                    },
                    {
                        title: 'NSO Legislative Telcon',
                        start: '2018/11/05 11:00',
                        end: '2018/11/05 13:00',
                        backgroundColor: 'green'
                    },
                    {
                        title: 'BRT 1',
                        start: '2018/11/06 08:00',
                        end: '2018/11/06 17:00',
                        backgroundColor: 'green'
                    },
                    {
                        title: 'Metroplex Training',
                        start: '2018/11/06 08:00',
                        end: '2018/11/06 10:00',
                        backgroundColor: 'red'
                    },
                    {
                        title: 'EWR Facility Visit',
                        start: '2018/11/07 11:00',
                        end: '2018/11/07 13:00',
                        backgroundColor: 'red'
                    },
                ],
            }
        },
        methods: {
        }
    }
</script>
<style>

</style>
