import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Job } from "@/models/Job.js"
import { AppState } from "@/AppState.js"

class JobsService {
  async getJobs() {
    const response = await api.get('api/jobs')
    const jobs = response.data.map(jobPojo => new Job(jobPojo))
    AppState.jobs = jobs
    logger.log('getting jobs', jobs)
  }

}
export const jobsService = new JobsService()