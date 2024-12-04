<script setup>
import { House } from "@/models/House";

defineProps({
  houseProp:{type: House, required: true}
})
</script>


<template>
  <div class="row bg-light shadow">
    <div class="col-md-4 px-0">
      <img :src="houseProp.imgUrl" alt="" class="img-fluid house-img">
    </div>
    <div class="col-md-8">
      <div class="p-2 d-flex flex-column justify-content-between h-100">
          <h4 class="text-center">${{ houseProp.price }}</h4>
        <div class="d-flex justify-content-between">
          <span class="fs-5">Built in: {{ houseProp.year }}</span>
          <span class="fs-5">Bedrooms: {{ houseProp.bedrooms }}</span>
          <span class="fs-5">Bathrooms: {{ houseProp.bathrooms }}</span>
        </div>
        <div> 
          <p>Levels: {{ houseProp.levels }}</p>
          <p>Listing Created on: {{ houseProp.createdAt.toLocaleDateString() }}</p>
          <p>"{{ houseProp.description }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.row{
  border: 2px solid #201f1f;
}

.house-img{
  height: 45dvh;
  width:100%;
  object-fit: cover;
}
</style>