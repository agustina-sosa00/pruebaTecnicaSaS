"use client"
import { validations } from '@/app/helper/validationForm'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import styles from './FormContact.module.css'

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
        Swal.fire({
            title: "¿Estas seguro?",
            text: "Confirmar envio de formulario",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Enviado!",
                text: "Formulario enviado con exito",
                icon: "success"
              });
              setFormState({
                name: '',
                email: '',
                message: '',
              })
            }
          });
    }


  return (
        <form action=""  onSubmit={handleOnSubmit} className={styles.form}>
            <h2 className={styles.titleForm}>Contacto</h2>
            <input type="text" name='name' value={formState.name} onChange={handleOnChange} placeholder='Name' className={styles.inputForm}/>
            {errorState.name ? (<p className={styles.pError}>{errorState.name}</p>)  : (null)} 
            <input type="email" name='email' value={formState.email} onChange={handleOnChange} placeholder='Email' className={styles.inputForm}/>
            {errorState.email ? (<p className={styles.pError}>{errorState.email}</p>)  : (null)} 
            <textarea type="text" name='message' value={formState.message} onChange={handleOnChange} placeholder='Message' className={styles.textareaForm}/>
            {errorState.message ? (<p className={styles.pError}>{errorState.message}</p>)  : (null)} 

            {
                errorState.name || errorState.email || errorState.message ? (<button disabled  className={styles.buttonForm}>Enviar</button>) : (<button  className={styles.buttonForm}>Enviar</button>)
            }
            
        </form>
  )
}
