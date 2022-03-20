import React from 'react'
import { ErrorMessage, Field } from 'formik'

type CategorySelectProps = {
    name: string
    categoryArray: string[]
}

/**
 * Use within Formik "Form" component
 */
const CategorySelect = (props: CategorySelectProps) => {
    return (
        <div>
            <Field name={props.name} type='text' as='select'>
                <option value='' disabled selected>
                    Category
                </option>
                {props.categoryArray.map((category) => (
                    <option value={category}>{category}</option>
                ))}
            </Field>
            <ErrorMessage name={props.name} />
        </div>
    )
}

export default CategorySelect
