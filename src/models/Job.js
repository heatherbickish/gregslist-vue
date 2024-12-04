export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.description = data.description
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.hours = data.hours
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.updatedAt = data.updatedAt
    this.createdAt = data.createdAt
  }
}