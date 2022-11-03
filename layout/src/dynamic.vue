<template>
  <div>
    <component :is="componentInstance" />
  </div>
</template>

<script>
export default {
  props: {
    isCompany: { type: Boolean, default: false },
  },
  computed: {
    componentInstance () {
      const name = this.isCompany ? 'axonius/Dashboard' : 'axonius/Dashboard'
      return () => import("./Sidebar.vue")
    }
  }
}
</script>