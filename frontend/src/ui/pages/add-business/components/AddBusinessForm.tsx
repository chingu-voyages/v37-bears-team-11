import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextArea from './TextArea'
import TextInput from './TextInput'
import CategorySelect from './CategorySelect'

type SubmitValues = {
    businessName: string
    address: string
    category: string
    phone: string
    description: string
}

const AddBusinessForm = () => {
    const onSubmit = async (values: SubmitValues) => {
        console.log('values: ', values)
    }

    return (
        <>
            <Formik
                initialValues={{
                    businessName: '',
                    address: '',
                    category: '',
                    phone: '',
                    description: '',
                }}
                validationSchema={Yup.object({
                    businessName: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
                    address: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
                    category: Yup.string()
                        .oneOf(['Restaurant', 'development', 'product', 'other'], 'Invalid Category')
                        .required('Required'),
                    phone: Yup.string().required('Required'),
                    description: Yup.string().max(150, 'Must be 150 characters or less').required('Required'),
                })}
                onSubmit={async (values: SubmitValues, { setSubmitting }) => {
                    await onSubmit(values)
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <TextInput name='businessName' placeholder='Name of your business' type='text' />
                        <TextInput name='address' placeholder='Address' type='text' />
                        <CategorySelect name='category' categoryArray={['Restaurant']} />
                        <TextInput name='phone' placeholder='Phone' type='text' />
                        <TextArea name='description' placeholder='Description' />
                        <button type='submit' disabled={isSubmitting}>
                            Create Listing
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddBusinessForm
