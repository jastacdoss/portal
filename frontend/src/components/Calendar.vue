<template>
    <div id="fullCalendar"></div>
</template>
<script>
    import $ from 'jquery'
    import 'fullcalendar'

    var today = new Date()
    var y = today.getFullYear()
    var m = today.getMonth()
    var d = today.getDate()
    export default {
        name: "calendar",
        props: {
            events: {
                type: Array,
                default: []
            },
        },
        data() {
            return {}
        },
        methods: {
            test() {
              console.log(this.defaultDate);
            },
            initCalendar() {
                var self = this
                var $calendar = $('#fullCalendar')
                $calendar.fullCalendar({
                    header: {
                        left: 'title',
                        center: 'month,agendaDay,list',
                        right: 'prev,next'
                    },
                    defaultDate: this.defaultDay,
                    selectable: true,
                    selectHelper: true,
                    height: 500,
                    aspectRatio: 1.3,
                    duration: {months: 3},
                    views: {
                        month: { // name of view
                            titleFormat: 'MMMM YYYY'
                            // other view-specific options here
                        },
                        week: {
                            titleFormat: ' MMMM D YYYY'
                        },
                        day: {
                            titleFormat: 'D MMM, YYYY'
                        }
                    },
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events

                    // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
                    events: this.events,
                })
            }
        },
        created() {},
        mounted() {
            window.$ = window.jQuery = $
            this.initCalendar()

        },
        watch: {
            events: {
                handler(v) {
                    var $calendar = $('#fullCalendar');
                    $calendar.fullCalendar('destroy');
                    this.initCalendar();
                },
                deep: true
            }
        }
    }
</script>
<style>
    #fullCalendar {
        width: 100%;
    }

    .el-loading-spinner .path {
        stroke: #66615B !important;
    }
</style>
