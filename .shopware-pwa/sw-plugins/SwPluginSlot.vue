<template>
  <component :is="getComponent" :name="name" :slotContext="slotContext">
    <slot />
  </component>
</template>
<script>
import Vue from "vue"
import { usePlugins } from "./usePlugins";

const pluginsMap = {
  
    "footer-content": () => import("sw-plugins/SwPluginSlotPlaceholderSwitcher.vue"),
  
}

Vue.component("sw-plugin-empty-slot", {
  render: function (createElement) {
    return createElement(
      'div',
      this.$slots.default
    )
  },
})

export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    slotContext: {
      type: Object | Array | String,
      default: null
    }
  },
  setup() {
    const { showPluginSlots } = usePlugins();
    return {
      showPluginSlots,
    };
  },
  computed: {
    getComponent() {
      if (this.showPluginSlots) {
        return () => import("./SwPluginSlotPlaceholder.vue");
      }
      if (pluginsMap[this.name]) {
        return pluginsMap[this.name]
      }
      return "sw-plugin-empty-slot"
    },
  }
};
</script>
