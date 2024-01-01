import { FaExclamationTriangle } from "react-icons/fa";
import React , {useState} from 'react';

function PopDeleteModer({Close, Delete}) {
  return (
    <div className='h-[100vh] w-[100vw] p-10 bg-black bg-opacity-30 absolute'>
        <div className='lg:h-[250px] h-[210px] w-[450px] bg-white border-none py-2 rounded-[20px] flex flex-col justify-evenly content-center flex-wrap relative top-1/4 left-1/3'>
            <div className='flex justify-center lg:h-16 h-12'>
                <FaExclamationTriangle className="h-16 w-16"/>
            </div>
            <div className='flex justify-center'>
                <p className='lg:text-lg font-poppins font-medium lg:w-96 w-80 lg:px-0 px-2 text-center'>Etes-vous sur de vouloir vouloir supprimer definitivement ce compte ?</p>
            </div>
            <div className='flex justify-between mt-1 px-6'>
                <button onClick={Close} className='lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-6 px-5 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#E87D00]'>Annuler</button>
                <button onClick={Delete} className='lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-6 px-5 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#A7A7A7]'>Oui, Continuer</button>
            </div>
        </div>
    </div>
  )
}

export default PopDeleteModer