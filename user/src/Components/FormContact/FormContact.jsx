"use client"
import { validations } from '@/app/helper/validationForm'
import React, { useEffect, useState } from 'react'

export const FormContact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [errorState, setErrorState] = useState({
        name: '',
        email: '',
        message: '',
    })

    console.log(formState)

    const handleOnChange = (event) => {
        const {name, value} = event.target

        setFormState({
            ...formState, 
            [name]: value
        })
    }

   useEffect(() => {
    const error = validations(formState)

    setErrorState(error)
   }, [formState])

    const handleOnSubmit = (event) => {
        event.preventDefault()
        alert('Formulario enviado con exito!')
    }


  return (
    <div>
        <form action=""  onSubmit={handleOnSubmit}>
            <input type="text" name='name' value={formState.name} onChange={handleOnChange} placeholder='Name'/>
            {errorState.name ? (<p>{errorState.name}</p>)  : (null)} 
            <input type="email" name='email' value={formState.email} onChange={handleOnChange} placeholder='Email'/>
            {errorState.email ? (<p>{errorState.email}</p>)  : (null)} 
            <textarea type="text" name='message' value={formState.message} onChange={handleOnChange} placeholder='Message'/>
            {errorState.message ? (<p>{errorState.message}</p>)  : (null)} 

            {
                errorState.name || errorState.email || errorState.message ? (<button disabled>Enviar</button>) : (<button>Enviar</button>)
            }
            
        </form>
    </div>
  )
}
