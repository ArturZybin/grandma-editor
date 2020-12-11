import React from 'react'
import styled from 'styled-components'

import dragImageSrc from '../images/drag.svg'

const DragInitiatorContainer = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;

    display: flex;

    width: 20px;
    height: 20px;

    border-radius: 10px;
    background-color: #f7db94;

    justify-content: center;
    align-items: center;

    cursor: pointer;
`

const DragInitiatorImage = styled.img`
    width: 50%;
    height: 50%;

    user-drag: none;
`


export const DragInitiator: React.FC = () => (
    <DragInitiatorContainer className="dragInitiator" onClick={e => e.stopPropagation()}>
        <DragInitiatorImage src={dragImageSrc} />
    </DragInitiatorContainer>
)