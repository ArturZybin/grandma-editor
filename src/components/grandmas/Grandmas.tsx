import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { globalStoreContext } from '../../store/GlobalStore'
import { Grandma } from './Grandma'


export const Grandmas: React.FC = observer(() => {
    const grandmas = useContext(globalStoreContext).grandmas

    return (
        <>
            {
                Array.from(grandmas).map(grandma => <Grandma grandma={grandma} />)
            }
        </>
    )
})