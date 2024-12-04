<script setup>

</script>


<template>
<div>
  <form>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="bedrooms" requrired>
      <label for="bedrooms">Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="bathrooms" requrired>
      <label for="bathrooms">Bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="levels" requrired>
      <label for="levels">Levels</label>
    </div>
    <div class="form-floating mb-3">
      <input type="url" class="form-control" id="imgURl" maxlength="500">
      <label for="House Url">House Url</label>
    </div>
    <div class="mb-3">
      <label for="price" class="form-control">House Price</label>
      <input type="range" id="price" class="form-range" max="500000" min="2500" required>
    </div>
    <div class="form-floating mb-3">
      <textarea id="description" class="form-control" placeholder="House Description" maxlength="500"></textarea>
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