import { useState } from "react"

const useForm = <T extends Object > ( initState: T ) => {
    const [state, setstate] = useState(initState)

    const onChange = <K extends Object >( value: K, field: keyof T ) => {
        setstate({
            ...state,
            [field]: value
        })
    }

    return {
        ...state,
        form: state,
        onChange
    }
}

export default useForm
