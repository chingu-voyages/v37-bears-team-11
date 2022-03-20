import React from 'react'
import { ErrorMessage, Field } from 'formik'

type TextAreaProps = {
    name: string
    placeholder: string
}

/**
 * Use within Formik "Form" component
 */
const TextArea = (props: TextAreaProps) => {
    return (
        <div>
            <Field name={props.name} type='text' placeholder={props.placeholder} as='textarea' />
            <ErrorMessage name={props.name} />
        </div>
    )
}

export default TextArea
