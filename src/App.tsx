import React from 'react';
import styled from 'styled-components';

import { Form } from './components/Form';
import { Grandmas } from './components/grandmas/Grandmas';
import { OpenFormButton } from './components/OpenFormButton';

import './style.css'

const AppContainer = styled.div`
    overflow: hidden;

    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
`


function App() {
    return (
        <AppContainer>
            <OpenFormButton />
            <Form />
            <Grandmas />
        </AppContainer>
    );
}

export default App;
