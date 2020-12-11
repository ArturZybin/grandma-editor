import React, { useContext } from 'react'
import Draggable from 'react-draggable'
import { globalStoreContext } from '../store/GlobalStore'
import { Button } from './Button'
import { DragInitiator } from './DragInitiator'


export const OpenFormButton: React.FC = () => {
    const showForm = useContext(globalStoreContext).form.show

    return (
        <Draggable
            axis="both"
            handle=".dragInitiator"
        >
            <Button onClick={() => showForm()}>
                <DragInitiator />
                Create grandma
            </Button>
        </Draggable>
    )
}