import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { SliderPicker } from 'react-color'
import Draggable from 'react-draggable'
import styled from 'styled-components'

import { globalStoreContext } from '../store/GlobalStore'
import { DragInitiator } from './DragInitiator'
import { Button } from './Button'
import { GrandmaSVG } from './grandmaSVG'


const FormContainer = styled.div`
    position: absolute;

    width: 500px;
    padding: 20px;

    text-align: center;

    border: 2px solid #f7db94;
    border-radius: 10px;
    background-color: #fdf5e0;
    box-shadow: 1px 4px 10px #f5d177;
`

const FormDivider = styled.div`
    margin: 30px 0;
`

const FormLabel = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

    margin-bottom: 10px;

    text-align: center;
    text-transform: uppercase;

    color: #622c6e;
`

const FormInput = styled.input`
    font-size: 18px;
    line-height: 20px;

    box-sizing: border-box;
    width: 100%;

    text-align: center;

    color: #622c6e;
    border: none;
    border-bottom: 1px solid #622c6e;
    outline: none;
    background-color: transparent;

    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        margin: 0;

        -webkit-appearance: none;
    }
`

const FormGrandmaPreview = styled.div`
    display: flex;

    height: 200px;

    justify-content: center;

    svg {
        height: 100%;
    }
`

const FormArrowButton = styled.button`
    font-size: 40px;
    font-weight: bold;

    cursor: pointer;

    border: none;
    outline: none;
    background: none;
`

const FormCloseButton = styled.button`
    font-size: 20px;

    position: absolute;
    top: 10px;
    left: 10px;

    cursor: pointer;

    border: none;
    outline: none;
    background: none;
`

const FormError = styled.div`
    background-color: #b00020;
    color: #fff;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
`


export const Form: React.FC = observer(() => {
    const form = useContext(globalStoreContext).form

    return form.isOpen ?
        <Draggable
            axis="both"
            handle=".dragInitiator"
        >
            <FormContainer>
                {form.error && <FormError>{form.error}</FormError>}
                <DragInitiator />
                <FormCloseButton onClick={form.hide}>✖</FormCloseButton>


                <FormGrandmaPreview>
                    <FormArrowButton onClick={() => form.updateType(((form.type - 1 < 1) ? 4 : form.type - 1) as any)}>‹</FormArrowButton>
                    <GrandmaSVG type={form.type} hairColor={form.hairColor} eyesColor={form.eyesColor} jacketColor={form.jacketColor} />
                    <FormArrowButton onClick={() => form.updateType(((form.type + 1 > 4) ? 1 : form.type + 1) as any)}>›</FormArrowButton>
                </FormGrandmaPreview>
                <FormDivider />

                <FormLabel>name</FormLabel>
                <FormInput value={form.name} onChange={e => form.updateName(e.target.value)} />
                <FormDivider />

                <FormLabel>age</FormLabel>
                <FormInput value={form.age} type="number" onChange={e => form.updateAge(+e.target.value)} />
                <FormDivider />

                <FormLabel>hair color</FormLabel>
                <SliderPicker
                    color={form.hairColor}
                    onChangeComplete={color => form.updateHairColor(color.hex)}
                />
                <FormDivider />

                <FormLabel>eyes color</FormLabel>
                <SliderPicker
                    color={form.eyesColor}
                    onChangeComplete={color => form.updateEyesColor(color.hex)}
                />
                <FormDivider />

                <FormLabel>jacket color</FormLabel>
                <SliderPicker
                    color={form.jacketColor}
                    onChangeComplete={color => form.updateJacketColor(color.hex)}
                />
                <FormDivider />

                <Button onClick={form.save}>save</Button>
            </FormContainer>
        </Draggable>
        :
        <></>
})