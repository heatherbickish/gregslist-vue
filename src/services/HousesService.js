import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
  async createHouse(editableHouseData) {
    const response = await api.post('api/houses', editableHouseData)
    logger.log('created house🌟🏠', response.data)
    const house = new House(response.data)
    AppState.houses.unshift(house)
  }
  async getHouses() {
    const response = await api.get('api/houses')
    const houses = response.data.map(housePojo => new House(housePojo))
    AppState.houses = houses

  }

}
export const housesService = new HousesService()