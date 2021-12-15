import React from 'react';
import './Style.css';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Form</h2>
        <label>Firstname :</label>
        <input type="text" {...register('firstname', {required: true})} />
        {errors.firstname && <p>This is required</p>}
        <label>Lastname :</label>
        <input type="text" {...register('lastname', {required: true, maxLength: 6, minLength: 4})} />
        {errors.lastname?.type === 'required' && <p>This is required</p>}
        {errors.lastname?.type === 'maxLength' && <p>Enter max 6 character</p>}
        {errors.lastname?.type === 'minLength' && <p>Enter min 4 character</p>}
        <label>Age :</label>
        <input type="number" {...register('age', {required: true, min: 18, max: 99})} />
        {errors.age?.type === 'required' && <p>This required</p>}
        {errors.age?.type === 'min' && <p>Enter min 18 y.o</p>}
        {errors.age?.type === 'max' && <p>Enter max 99 y.o</p>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default Form;