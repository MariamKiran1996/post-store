import { Field } from 'formik'
import React from 'react'

export default function input(
  {id,labeltext, type, classes,placeholder, value, onChange, name} ) {
    
    

  return (
    <>
    <label htmlFor={id}>{labeltext}</label>
    <Field type={type} className={classes} id={id} placeholder={placeholder}  name={name} />
    
    </>
  )
}
