import { makeAutoObservable, reaction } from "mobx";
import { GlobalStore } from "./GlobalStore";

export type GrandmaType = 1 | 2 | 3 | 4

export interface GrandmaData {
    type: GrandmaType
    name: string,
    age: number,
    hairColor: string,
    eyesColor: string,
    jacketColor: string
}

export class GrandmaStore {
    globalStore: GlobalStore
    id: number
    type: GrandmaType = 1
    name = ''
    age = 60
    hairColor = ''
    eyesColor = ''
    jacketColor = ''

    constructor(globalStore: GlobalStore, id: number, data: GrandmaData) {
        makeAutoObservable(this, {
            id: false
        })

        this.globalStore = globalStore
        this.id = id
        this.update(data)

        reaction(
            () => this.asJSON,
            () => this.globalStore.storeGrandmas()
        )
    }

    update = (data: GrandmaData) => {
        this.type = data.type
        this.name = data.name
        this.age = data.age
        this.hairColor = data.hairColor
        this.eyesColor = data.eyesColor
        this.jacketColor = data.jacketColor
    }

    startEditing = () => {
        this.globalStore.form.show(this)
    }

    delete = () => {
        this.globalStore.deleteGrandma(this)
    }

    get asJSON(): GrandmaData {
        return {
            type: this.type,
            name: this.name,
            age: this.age,
            hairColor: this.hairColor,
            eyesColor: this.eyesColor,
            jacketColor: this.hairColor
        }
    }
}