<script setup>
import { AppState } from "@/AppState";
import { housesService } from "@/services/HousesService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, ref } from "vue";

const account = computed(()=>AppState.account)

const editableHouseData = ref({
bedrooms: 0,
bathrooms: 0,
levels: 0,
imgUrl: '',
year: new Date().getFullYear(), 
price:0,
description: ''
})

async function createHouse() {
  try {
    await housesService.createHouse(editableHouseData.value)
    editableHouseData.value ={
      bedrooms: 0,
      bathrooms: 0,
      levels: 0,
      imgUrl: '',
      year: new Date().getFullYear(), 
      price:0,
      description: ''
    }
    Pop.success('House successfully listed!')
  }
  catch (error){
    logger.log('creating car', error)
    Pop.meow(error);
  }
}
</script>


<template>
<div v-if="account != null">
  <form @submit.prevent="createHouse()">
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="bedrooms" requrired>
      <label for="bedrooms">Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bathrooms" type="number" class="form-control" id="bathrooms" requrired>
      <label for="bathrooms">Bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.levels" type="number" class="form-control" id="levels" requrired>
      <label for="levels">Levels</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.year" type="number" class="form-control" id="year" requrired>
      <label for="year">Year</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.imgUrl" type="url" class="form-control" id="imgURl" maxlength="500">
      <label for="House Url">House Url</label>
    </div>
    <div class="mb-3">
      <label for="price" class="form-control">House Price: ${{ editableHouseData.price }}</label>
      <input v-model="editableHouseData.price" type="range" id="price" class="form-range" max="500000" min="2500" required>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editableHouseData.description" id="description" class="form-control" placeholder="House Description" maxlength="500"></textarea>
      <label for="description">House Description</label>
    </div>
    <div class="text-end mb-3">
      <button class="btn btn-success" type="submit">Submit</button>
    </div>
  </form>
</div>
</template>


<style lang="scss" scoped>

</style>