import React from 'react'
import InputField from '../../../../components/InputField/InputField'

export default function FormLogin() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <InputField label={'Username'} />
            <InputField type={'password'} label={'Password'} />
        </div>
    )
}
