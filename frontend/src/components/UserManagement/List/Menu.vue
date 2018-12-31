<template>
    <div class="boxmenu">
    <div class="innerbox ">
  </div><slot></slot>
    <div class="bottom">
    <h3>Click</h3></div>
</div>
</template>

<script>
export default {};
</script>

<style>
.boxmenu {
  position: relative;
  display: block;
  border-radius: 2px;
  margin-bottom: 20px;
  background-color: #0b3967;
  color: white;
}
.innerbox {
  padding: 20px;
}
</style>
