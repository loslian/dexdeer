<!-- Header Structure -->
<template>
	<div>
		<!-- <v-navigation-drawer
			v-if="!horizontal"
			app
			fixed
			v-model="drawer"
			:mini-variant="collapseSidebar"
			mini-variant-width="70"
			:width="250"
			class="Vuely-sidebar"
			:style="{backgroundImage: 'url(' + selectedSidebarBgImage.url + ')'}"
			:class="{'background-none': !backgroundImage}"
			:right="rtlLayout"
		> -->
			<!-- App Sidebar 
			<app-sidebar></app-sidebar>
		</v-navigation-drawer>-->
		<v-toolbar 
			class="Vuely-toolbar"
			app
			:color="activeHeaderFilter.class"
			fixed
		>	
			<div class="d-custom-flex align-items-center navbar-left">
				<div class="site-logo-wrap d-custom-flex ">
					<router-link to="/horizontal/dashboard/ecommerce" class="grayish-blue site-logo-img">
						<img src="/static/img/site-dark-logo.png" alt="site logo" width="120" height="36">
					</router-link>
				</div>
			</div>
				<app-horizontal-menus></app-horizontal-menus>
			<div class="navbar-right">
				<v-btn icon large @click="toggleFullScreen" class="full-screen ma-0">
					<v-icon color="grey">fullscreen</v-icon>
				</v-btn>
			</div>
		</v-toolbar>
	</div>
</template>

<script>
import Sidebar from "../Sidebar/Sidebar.vue";
import AppHorizontalMenus from "Components/AppHorizontalMenus/AppHorizontalMenus";
import screenfull from "screenfull";
import { getCurrentAppLayout } from "Helpers/helpers";
import { mapGetters } from "vuex";

export default {
  props: {
    horizontal: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      collapsed: false, // collapse sidebar
      drawer: true, // sidebar drawer default true
      chatSidebar: false, // chat component right sidebar
      sidebarImages: "", // sidebar background images
      enableDefaultSidebar: false
    };
  },
  computed: {
    ...mapGetters([
      "rtlLayout",
      "backgroundImage",
      "backgroundImage",
      "selectedSidebarBgImage",
			"darkMode",
			"collapseSidebar",
			"activeHeaderFilter"
    ])
  },
  methods: {
    // toggle full screen method
    toggleFullScreen() {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
		},
		getMenuLink(link) {
			return '/' + getCurrentAppLayout(this.$router) + link;
		}
  },
  components: {
		appSidebar: Sidebar,
		appHorizontalMenus: AppHorizontalMenus,

  }
};
</script>
