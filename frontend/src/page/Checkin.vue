<template>
<div>

<Stbar>
    <div slot="context">
    <checkin/>
    </div>
  </Stbar>
  

</div>
</template>

<script>
import Stbar from "@/components/Header/Navbar.vue"
import TableC from "@/components/Coursetable/CourseTable.vue"
import checkin from '@/components/Checkin/Checkin.vue'
export default {
  components: {
    Stbar,TableC,checkin
  }
  }
</script>