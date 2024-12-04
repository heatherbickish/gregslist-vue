<script setup>
import { AppState } from "@/AppState";
import HouseForm from "@/components/HouseForm.vue";
import HouseListings from "@/components/HouseListings.vue";
import { housesService } from "@/services/HousesService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";

onMounted(()=>{
  getHouses()
})

const houses = computed(()=>AppState.houses)

async function getHouses(){
  try {
    await housesService.getHouses()
  }
  catch (error){
    Pop.meow(error);
    logger.error('Getting 🏠', error)
  }
}

</script>


<template>
<div class="container">
  <section class="row mb-3">
      <div class="col-12">
        <h1 class="text-center">Houses</h1>
      </div>
    </section>

    <section class="row justify-content-center">
      <div class="col-md-10">
        <HouseForm/>
      </div>
    </section>

    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-12 mb-3">
       <HouseListings :houseProp="house"/>
      </div>

    </section>
</div>
</template>


<style lang="scss" scoped>

</style>