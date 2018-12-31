<template>
 <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button v-on:click="toggledata = !toggledata" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {{header}}
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse" v-bind:class="{ show: toggledata }" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <ul>
        <li>{{body}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      toggledata: false
    }
  },
  props:{
    header:{
      type: String
    }, 
    body:{
      type: String
    }
  }
}
</script>
<style>
</style>
