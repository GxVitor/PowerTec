export type pokemonData = {
    sprites: {
        front_default:string
    }
    name:string
    id:number
    types: {
        slot: 2
        type: {
            name: string
            url: string
        }
    }[]
}