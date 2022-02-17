import {configureStore} from '@reduxjs/toolkit'
import InputValue from './reducer/InputValue'


const Store = configureStore({
        reducer: {
            input:InputValue,
        }
})

export default  Store