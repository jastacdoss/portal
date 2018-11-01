<template>
    <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
        <notifications></notifications>
        <side-bar title="NATCA Portal" class="admin" background-color="orange">
            <template slot-scope="props" slot="links">
                <strong class="administering">Administering:</strong>
                <user-menu title="Jason Doss"></user-menu>
                <sidebar-item
                        :link="{name: 'Admin Dashboard', icon: 'fas fa-tachometer-alt', path: '/admin', exact: true}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Member Detail', icon: 'far fa-address-card', path: '/memberdetail'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Grievances', icon: 'fas fa-paperclip', path: '/grievances'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Teams', icon: 'far fa-address-card', path: '/admin/teams'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Email Lists', icon: 'fas fa-mail-bulk', path: '/listserv'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Seniority', icon: 'fas fa-users', path: '/seniority'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'PAC', icon: 'fas fa-dollar-sign', path: '/pac'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Academy', icon: 'fas fa-graduation-cap', path: '/academy'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Registrations', icon: 'far fa-calendar-alt', path: '/registrations'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Resources', icon: 'fas fa-book-reader', path: '/resources'}"></sidebar-item>
                <sidebar-item
                        :link="{name: 'Member Dashboard', icon: 'fas fa-user', path: '/dashboard'}"></sidebar-item>

                <span class="loggedin"><strong>Logged in as Administrator:</strong><br> Jason Doss @ 18:03:23</span>
            </template>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>
            <router-view name="header"></router-view>

            <div :class="{content: !$route.meta.hideContent}" @click="toggleSidebar">
                <zoom-center-transition :duration="200" mode="out-in">
                    <!-- your content here -->
                    <router-view></router-view>
                </zoom-center-transition>
            </div>
            <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        </div>
    </div>
</template>
<script>
    /* eslint-disable no-new */
    import PerfectScrollbar from 'perfect-scrollbar'
    import 'perfect-scrollbar/css/perfect-scrollbar.css'

    function hasElement(className) {
        return document.getElementsByClassName(className).length > 0;
    }

    function initScrollbar(className) {
        if (hasElement(className)) {
            new PerfectScrollbar(`.${className}`);
        } else {
            // try to init it later in case this component is loaded async
            setTimeout(() => {
                initScrollbar(className);
            }, 100);
        }
    }

    import TopNavbar from './TopNavbar.vue'
    import ContentFooter from './ContentFooter.vue'
    import DashboardContent from './Content.vue'
    import MobileMenu from './Extra/MobileMenu.vue'
    import UserMenu from './Extra/UserMenu.vue'
    import {SlideYDownTransition, ZoomCenterTransition} from 'vue2-transitions'

    export default {
        components: {
            TopNavbar,
            ContentFooter,
            DashboardContent,
            MobileMenu,
            UserMenu,
            SlideYDownTransition,
            ZoomCenterTransition
        },
        methods: {
            toggleSidebar() {
                if (this.$sidebar.showSidebar) {
                    this.$sidebar.displaySidebar(false)
                }
            }
        },
        mounted() {
            let docClasses = document.body.classList;
            let isWindows = navigator.platform.startsWith('Win');
            if (isWindows) {
                // if we are on windows OS we activate the perfectScrollbar function
                initScrollbar('sidebar');
                initScrollbar('sidebar-wrapper');

                docClasses.add('perfect-scrollbar-on')
            } else {
                docClasses.add('perfect-scrollbar-off')
            }
        }
    }

</script>
<style lang="scss">
    $scaleSize: .95;
    @keyframes zoomIn95 {
        from {
            opacity: 0;
            transform: scale3d($scaleSize, $scaleSize, $scaleSize);
        }
        to {
            opacity: 1;
        }
    }

    .main-panel .zoomIn {
        animation-name: zoomIn95;
    }

    @keyframes zoomOut95 {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: scale3d($scaleSize, $scaleSize, $scaleSize);
        }
    }

    .main-panel .zoomOut {
        animation-name: zoomOut95;
    }
</style>
