import { makeAutoObservable, reaction } from "mobx";
import { createContext } from "react";
import { FormStore } from "./FormStore";
import { GrandmaData, GrandmaStore } from "./GrandmaStore";

export class GlobalStore {
    form = new FormStore(this)
    grandmas = new Set<GrandmaStore>()
    nextGrandmaId = 0
    overlayedGrandma: null | GrandmaStore = null

    constructor() {
        makeAutoObservable(this, {
            nextGrandmaId: false
        })

        this.restoreGrandmas()

        reaction(
            () => this.grandmas.size,
            () => this.storeGrandmas()
        )
    }

    createGrandma = (data: GrandmaData) => {
        this.grandmas.add(new GrandmaStore(this, this.nextGrandmaId++, data))
    }

    deleteGrandma = (grandma: GrandmaStore) => {
        this.grandmas.delete(grandma)
    }

    storeGrandmas = () => {
        const data = Array.from(this.grandmas).map(grandma => grandma.asJSON)
        localStorage.setItem('grandmas', JSON.stringify(data))
    }

    restoreGrandmas = () => {
        const storedData = localStorage.getItem('grandmas')
        if (storedData) {
            const storedGrandmas = JSON.parse(storedData) as GrandmaData[]
            storedGrandmas.forEach(data => this.createGrandma(data))
        }
    }

    setOverlayedGrandma = (grandma: GrandmaStore) => {
        this.overlayedGrandma = grandma
    }
}

export const globalStore = new GlobalStore()
export const globalStoreContext = createContext(globalStore)