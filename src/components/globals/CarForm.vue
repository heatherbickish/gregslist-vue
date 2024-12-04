<script setup>
import { AppState } from '@/AppState.js';
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, ref } from 'vue';

const account = computed(() => AppState.account)

const engineTypes = [
  "unknown",
  "2 stroke",
  "4 cylinder",
  "v6",
  "v8",
  "v10",
  "v12",
  "small",
  "medium",
  "large",
  "chuncko"
]

const editableCarData = ref({
  make: '',
  model: '',
  imgUrl: '',
  year: new Date().getFullYear(),
  price: 0,
  description: '',
  engineType: 'unknown',
  color: '#000000'
})

async function createCar() {
  try {
    await carsService.createCar(editableCarData.value)
    // NOTE clears form!
    editableCarData.value = {
      make: '',
      model: '',
      imgUrl: '',
      year: new Date().getFullYear(),
      price: 0,
      description: '',
      engineType: 'unknown',
      color: '#000000'
    }
    Pop.success('Car successfully listed! 👍')
  } catch (error) {
    logger.error('[CREATING CAR]', error)
    Pop.meow(error)
  }
}

</script>


<template>
  <!-- NOTE only renders if the user is logged in! -->
  <div v-if="account != null">
    <form @submit.prevent="createCar()">
      <div class="form-floating mb-3">
        <input v-model="editableCarData.make" type="text" class="form-control" id="make" placeholder="Car Make..."
          required maxlength="500">
        <label for="make">Car Make</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="editableCarData.model" type="text" class="form-control" id="model" placeholder="Car Model..."
          required maxlength="500">
        <label for="model">Car Model</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="editableCarData.imgUrl" type="url" class="form-control" id="imgUrl" placeholder="Car ImgUrl..."
          required maxlength="500">
        <label for="imgUrl">Car ImgUrl</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="editableCarData.year" type="number" class="form-control" id="year" placeholder="Car Year..."
          required :max="new Date().getFullYear() + 1" min="1875">
        <label for="year">Car Year</label>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Car Price: ${{ editableCarData.price }}</label>
        <input v-model="editableCarData.price" type="range" class="form-range" id="price" max="1000000" min="0"
          required>
      </div>
      <div class="form-floating mb-3">
        <textarea v-model="editableCarData.description" class="form-control" placeholder="Car Description"
          id="description" maxlength="500"></textarea>
        <label for="description">Car Description</label>
      </div>
      <div class="form-floating mb-3">
        <select v-model="editableCarData.engineType" class="form-select" id="engineType"
          aria-label="Select a car engine type">
          <option v-for="engineType in engineTypes" :key="engineType" :value="engineType">
            {{ engineType }}
          </option>
        </select>
        <label for="engineType">Engine Type</label>
      </div>
      <div class="mb-3">
        <label for="color" class="form-label">Car Color</label>
        <input v-model="editableCarData.color" type="color" class="form-control form-control-color" id="color"
          title="Choose your color">
      </div>
      <div class="text-end">
        <button class="btn btn-success" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped></style>