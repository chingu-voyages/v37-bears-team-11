import React from 'react'
import uploadIMG from '../../../assets/images/upload.png'
import AddBusinessForm from './components/AddBusinessForm'

function AddBusiness() {
    return (
        <div className='flex flex-col w-screen px-16'>
            <div className='w-full flex items-center flex-col'>
                <img className='my-10' src={uploadIMG} alt='Upload' />
                <AddBusinessForm />
            </div>
        </div>
    )
}

export default AddBusiness
