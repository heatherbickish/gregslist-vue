import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
    if (houseIndex == -1) {
      throw new Error('You messed up big time on findIndex sucka')
    }
    AppState.houses.splice(houseIndex, 1)
  }
  async createHouse(editableHouseData) {
    const response = await api.post('api/houses', editableHouseData)
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