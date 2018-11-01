<template>
    <div class="dashboard listserv">
        <div class="row">
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-mail-bulk"></i> {{team.name}}</h4>
                    </template>
                    <h6 class="card-subtitle mb-2 text-muted">
                        Description
                    </h6>
                    <ce-input name="Address" :value="description"></ce-input>

                    <span v-if="isAdmin">
                        <h6 class="card-subtitle  mt-3 mb-2 text-muted">
                        Team Roles and Permissions
                    </h6>
                    <table class="w-100 results">
                        <thead>
                        <tr>
                            <td width="50%">Role</td>
                            <td>Permissions</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="r in roles">
                                <td>{{r.name}}</td>
                                <td class="text-center">
                                    <el-select class="select-danger" placeholder="Single Select" v-model="r.level">
                                        <el-option v-for="(option, idx) in levels" class="select-danger"
                                                   :value="option.name" :label="option.name" :key="idx">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </span>
                </card>
            </div>
            <div class="col">
                <card>
                    <template slot="header">
                        <h4 class="card-title"><i class="fas fa-mail-bulk"></i> Members</h4>
                    </template>
                    <table class="w-100 results">
                        <thead>
                        <tr>
                            <td width="80%">List Name</td>
                            <td>Role</td>
                            <td v-if="isAdmin">Subscribed</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="m in members">
                            <td>{{m.name}}</td>
                            <td>{{m.role}}</td>
                            <td class="text-center" v-if="isAdmin">
                                <el-switch
                                        v-model="m.subscribed"
                                        active-color="#13ce66"
                                        inactive-color="#ff4949"
                                        :active-value="1"
                                        :inactive-value="0">
                                </el-switch>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <span class="add-details mb-2" v-if="isAdmin"><i class="fas fa-plus"></i></span>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import {Badge, Checkbox, Radio, CeInput} from 'src/components/index';
    import {Switch, Select, Option} from 'element-ui';

    export default {
        components: {
            Checkbox,
            Radio,
            Badge,
            CeInput,
            [Switch.name]: Switch,
            [Select.name]: Select,
            [Option.name]: Option
        },

        data() {
            return {
                team: {},
                level: '',
                description: 'This is a description of the team, including responsibilities structure, or other important information',
                grievances: [
                    {
                        name: '2+ Hours on Position',
                        date: '09/08/2018',
                        status: 'Active',
                    }
                ],
                teams: [
                    {
                        listid: '0',
                        name: 'NATCA Charitable Foundation',
                        subscribed: 0
                    },
                    {
                        listid: '1',
                        name: 'National Update',
                        subscribed: 1
                    },
                    {
                        listid: '2',
                        name: 'Committee Members',
                        subscribed: 1
                    },
                    {
                        listid: '3',
                        name: 'Website Workgroup',
                        subscribed: 0
                    },
                    {
                        listid: '4',
                        name: 'Members',
                        subscribed: 1
                    },
                    {
                        listid: '5',
                        name: 'Executive Board',
                        subscribed: 1
                    },
                    {
                        listid: '6',
                        name: 'Members',
                        subscribed: 1
                    }
                ],
                members: [
                    {
                        name: 'Rich Santa',
                        role: 'Lead',
                        subscribed: 1,
                    },
                    {
                        name: 'Jason Doss',
                        role: 'SME',
                        subscribed: 1,
                    },
                    {
                        name: 'Chris Keyes',
                        role: 'SME',
                        subscribed: 0,
                    }
                ],
                roles: [
                    {
                        name: 'Lead',
                        level: 'Admin',
                    },
                    {
                        name: 'SME',
                        level: 'Editor',
                    },
                    {
                        name: 'Viewer',
                        level: 'View Only',
                    }
                ],
                levels: [
                    {name: 'Admin'},
                    {name: 'Editor'},
                    {name: 'View Only'}
                ]
            }
        },
        methods: {
            test() {
                console.log(this.item);
            },
            addLine(o) {
                o.push([])
            }
        },
        computed: {
            isAdmin() {
                return _.startsWith(this.$route.path, '/admin/teams') ? true : false;
            }
        },
        created() {
            this.team = _.find(this.teams, {listid: this.$route.params.team});
            console.log(this.isAdmin)
        }
    }
</script>
<style>

</style>
