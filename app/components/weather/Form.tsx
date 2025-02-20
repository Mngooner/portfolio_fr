import React from 'react';
import { useLanguage } from '@/app/components/LangaugeContext';
import { FormProps } from './interface';

const Form = ({ getLocData, cityName, dispatch }: FormProps) => {
    const isEnglish = useLanguage()
    return (
    
    <form onSubmit={getLocData} className='flex self-center gap-3 w-full max-w-xs'>
        <input
            type="text"
            name="cityName"
            value={cityName}
            onChange={ e => dispatch({ type: 'field', field: 'cityName', value: e.target.value})}
            placeholder={isEnglish ?"Enter your city name" :"Saisissez le nom de votre ville"}
            className="input input-bordered w-full max-w-xs bg-white"/>
        <button type="submit" className="btn btn-primary">{isEnglish ? "Submit":"Soumettre"}</button>
    </form>
)};

export default Form