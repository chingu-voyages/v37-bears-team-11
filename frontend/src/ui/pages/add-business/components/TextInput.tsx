import React, { HTMLInputTypeAttribute } from 'react'
import { ErrorMessage, Field } from 'formik'

type TextInputProps = {
    name: string
    placeholder: string
    type: HTMLInputTypeAttribute
}

/**
 * Use within Formik "Form" component
 */
const TextInput = (props: TextInputProps) => {
    return (
        <div>
            <Field name={props.name} type={props.type} placeholder={props.placeholder} />
            <ErrorMessage name={props.name} />
        </div>
    )
}

export default TextInput
