export class House {
  constructor(data) {
    this.id = data.id
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.description = data.description
    this.levels = data.levels
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creator = data.creator
    this.creatorId = data.creatorId

  }
}