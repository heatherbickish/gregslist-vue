<script setup>
import { AppState } from "@/AppState";
import { House } from "@/models/House";
import { housesService } from "@/services/HousesService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed } from "vue";

const props = defineProps({
  houseProp: {type: House, required: true}
})

const account = computed(()=> AppState.account)

async function deleteHouse(){
  try {
    const message =  `Are you sure you want to delete this house from ${props.houseProp.year}?`
    const confirmed = await Pop.confirm(message)
    if(!confirmed){return}
    const houseId = props.houseProp.id
    await housesService.deleteHouse(houseId)
  }
  catch (error){
    Pop.meow(error);
    logger.log('deleting house', error)
  }
}


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
        <div class="mt-3"> 
          <p>Levels: {{ houseProp.levels }}</p>
          <p>Listing Created on: {{ houseProp.createdAt.toLocaleDateString() }}</p>
          <p>"{{ houseProp.description }}"</p>
        </div>
        <div class="d-flex justify-content-end gap-3 align-items-center">
          <button v-if="account?.id == houseProp.creatorId" @click="deleteHouse()" class="btn btn-danger" type="button" title="Delete House">
            <i class="mdi mdi-delete"></i>
          </button>
          <span>{{ houseProp.creator.name }}</span>
          <img :src="houseProp.creator.picture" :alt="houseProp.creator.name" class="creator-img ms-3">
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

.creator-img{
  height:10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>