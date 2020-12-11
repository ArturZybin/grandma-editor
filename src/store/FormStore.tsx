import { makeAutoObservable } from "mobx"
import { GlobalStore } from "./GlobalStore"
import { GrandmaData, GrandmaStore, GrandmaType } from "./GrandmaStore"

const defaultData: GrandmaData = {
    type: 1,
    name: '',
    age: 60,
    hairColor: '#d4dbdb',
    eyesColor: '#000',
    jacketColor: '#ec6f80'
}

export class FormStore {
    globalStore: GlobalStore

    type = defaultData.type
    name = defaultData.name
    age = defaultData.age
    hairColor = defaultData.hairColor
    eyesColor = defaultData.eyesColor
    jacketColor = defaultData.jacketColor
    grandmaToEdit: GrandmaStore | null = null

    isOpen = false
    error: null | string = null

    constructor(globalStore: GlobalStore) {
        makeAutoObservable(this, {
            globalStore: false
        })

        this.globalStore = globalStore
    }

    updateType = (type: GrandmaType) => this.type = type
    updateName = (name: string) => this.name = name
    updateAge = (age: number) => this.age = age
    updateHairColor = (hairColor: string) => this.hairColor = hairColor
    updateEyesColor = (eyesColor: string) => this.eyesColor = eyesColor
    updateJacketColor = (jacketColor: string) => this.jacketColor = jacketColor

    show = (grandmaToEdit?: GrandmaStore) => {
        this.isOpen = true
        this.grandmaToEdit = grandmaToEdit || null

        if (grandmaToEdit) {
            this.setFormData({
                type: grandmaToEdit.type,
                name: grandmaToEdit.name,
                age: grandmaToEdit.age,
                hairColor: grandmaToEdit.hairColor,
                eyesColor: grandmaToEdit.eyesColor,
                jacketColor: grandmaToEdit.jacketColor
            })
        }
    }

    hide = () => {
        this.isOpen = false
        this.hideError()
        this.setFormData(defaultData)
    }

    save = () => {
        if (!this.name) {
            this.showError('Name is required!')
            return
        }

        const data: GrandmaData = {
            type: this.type,
            name: this.name,
            age: this.age,
            hairColor: this.hairColor,
            eyesColor: this.eyesColor,
            jacketColor: this.jacketColor
        }

        if (this.grandmaToEdit) {
            this.grandmaToEdit.update(data)
        } else {
            this.globalStore.createGrandma(data)
        }

        this.hide()
    }

    setFormData = (data: GrandmaData) => {
        this.type = data.type
        this.name = data.name
        this.age = data.age
        this.hairColor = data.hairColor
        this.eyesColor = data.eyesColor
        this.jacketColor = data.jacketColor
    }

    showError = (message: string) => {
        this.error = message
        setTimeout(this.hideError, 5000)
    }

    hideError = () => {
        this.error = null
    }
}