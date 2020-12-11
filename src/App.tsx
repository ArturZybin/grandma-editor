import React from 'react';
import { Form } from './components/Form';
import { Grandmas } from './components/grandmas/Grandmas';
import { OpenFormButton } from './components/OpenFormButton';


function App() {
    return (
        <>
            <OpenFormButton />
            <Form />
            <Grandmas />
        </>
    );
}

export default App;
