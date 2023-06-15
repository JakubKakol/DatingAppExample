import { Photo } from "./photo"

export interface Member {
    userName: string
    gender: string
    age: number
    knownAs: string
    created: string
    lastActive: string
    introduction: string
    lookingFor: string
    interests: string
    city: string
    country: string
    photoUrl: string,
    photos: Photo[]
}