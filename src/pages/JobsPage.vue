<script setup>
import { AppState } from "@/AppState";
import { jobsService } from "@/services/JobsService";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";

// const jobs = computed(()=>AppState.jobs)
onMounted(()=>{
  getJobs()
})
async function getJobs(){
  try {
    await jobsService.getJobs()
  }
  catch (error){
    Pop.error(error);
  }
}

</script>


<template>
<div class="container">
  <section class="row mb-3">
      <div class="col-12">
        <h1 class="text-center">Jobs</h1>
      </div>
    </section>
</div>
</template>


<style lang="scss" scoped>

</style>