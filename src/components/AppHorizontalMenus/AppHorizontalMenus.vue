<template>
	<div class="horizontal-menu">
		<ul class="list-unstyled nav">
			<li class="nav-item" v-for="m in menus['menu']" :key="m.title">
        <router-link    
        :to="!m.exact ? `/${getCurrentAppLayoutHandler() + m.path}` : m.path"
                        class="nav-link" 
                        activeClass="active"
                  	>
					<i class="zmdi" :class="m.action"></i>
					<span class="menu-title">{{$t(m.title)}}</span>
				</router-link >
				<ul v-if="m.items" class="sub-menu list-unstyled">
					<template v-for="item in m.items">				
						<app-menu-item
						:menu="item"
						:key="item.title"
						></app-menu-item>
					</template>
        		</ul>
     		</li>
    	</ul>
		<div class="ham-menu-sm d-none">
			<v-btn flat icon class="my-1 mx-3" @click="toggleHorizontalLayoutSidebar">
				<v-icon class="grey--text">menu</v-icon>
			</v-btn>
		</div>
  
  	</div>
</template>

<script>
import AppMenuItem from "./AppMenuItem";
import { mapGetters } from "vuex";
import MobileSearchForm from "../Header/MobileSearchForm";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
  data() {
    return {
      categories: {
        "message.team": "zmdi zmdi-view-dashboard",
        "message.tax": "zmdi zmdi-widgets",
        "message.accountBook": "zmdi zmdi-view-carousel",
        "message.applications": "zmdi zmdi-assignment-check",
        "message.features": "zmdi zmdi-wrench",
        "message.extensions": "zmdi zmdi-file"
      }
    };
  },
  components: {
    AppMenuItem,
    MobileSearchForm
  },
  computed: {
    ...mapGetters(["menus"])
  },
  methods: {
    toggleHorizontalLayoutSidebar() {
      this.$store.dispatch("toggleHorizontalLayoutSidebar", true);
    },
     getCurrentAppLayoutHandler() {
      return getCurrentAppLayout(this.$router);
    }
  },
  mounted() {
    const mainMenu = document.getElementsByClassName("nav-item");
    for (let i = 0; i < mainMenu.length; i++) {
      mainMenu[i].onclick = function() {
        for (let j = 0; j < mainMenu.length; j++) {
          if (mainMenu[j].classList.contains("nav-item-active")) {
            mainMenu[j].classList.remove("nav-item-active");
          }
        }
        this.classList.toggle("nav-item-active");
      };
    }
  }
};
</script>