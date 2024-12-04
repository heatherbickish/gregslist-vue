import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('Got 🏠🏠🏠', response.data)
    const houses = response.data.map(housePojo => new House(housePojo))
    AppState.houses = houses
    logger.log(houses)

  }

}
export const housesService = new HousesService()