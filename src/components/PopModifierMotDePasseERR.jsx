import { FaExclamationTriangle } from "react-icons/fa";
import React from 'react';

function PopModifierMotDePasseERR({Close}) {
  return (
    <div className='h-full w-full bg-black bg-opacity-30 absolute flex justify-center flex-wrap content-center'>
        <div className='lg:h-[250px] h-[230px] w-[450px] bg-white border-none py-2 rounded-[20px] flex flex-col justify-evenly content-center flex-wrap relative'>
            <div className='flex justify-center lg:h-16 h-12'>
                <FaExclamationTriangle className="h-16 w-16"/>
            </div>
            <div className='flex justify-center pt-3'>
                <p className='lg:text-lg font-poppins font-medium lg:w-96 w-96 lg:px-0 px-2 text-center'>Les deux mots de passes entrez ne ne correspondent pas</p>
            </div>
            <div className='flex justify-evenly mt-1 px-6'>
                <button onClick={Close} className='lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-6 px-5 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#E87D00] w-4/5'>Fermer</button>
            </div>
        </div>
    </div>
  )
}

export default PopModifierMotDePasseERR