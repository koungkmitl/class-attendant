<template>
<div>

<Stbar>
    <div slot="context">
 <div class="text-center">
        <h2>Welcome to IT Check-in</h2>
                <p>ยินดีต้อนรับสู่เวบไซต์ Check in การเข้าเรียนของนักศึกษาเทคโนโลยีสารสนเทศสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>

            <router-link to="/checkin">
            <button type="button" class="btn btn-primary">Get Start</button>
            </router-link>
                <div class="line"></div>
    </div>
    </div>
  </Stbar>
  

</div>
</template>

<script>
import Stbar from "@/components/Header/Navbar.vue";

export default {
  components: {
    Stbar
  }
  }
</script>