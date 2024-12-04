<script setup>
import { housesService } from "@/services/HousesService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { onMounted } from "vue";

onMounted(()=>{
  getHouses()
})


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
</div>
</template>


<style lang="scss" scoped>

</style>