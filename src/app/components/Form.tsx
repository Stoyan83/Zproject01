'use client'
import React from 'react'

export default function Form() {
  return (
    <div className='flex flex-col items-center text-center py-10 xl:py-12 max-w-[540px] mx-auto'>
      <h2 className='text-white my-10 font-semibold text-heading font-space-grotesk leading-[2.5rem] md:leading-[2.5rem] text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>
        Готoви ли сте да работим заедно?
      </h2>
      <p className='text-white'>
        Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси
      </p>
      <div className='my-16 flex flex-nowrap justify-center'>
        <div className='flex items-center bg-white rounded-l-xl pl-3 xl:pl-5'>
          <input
            className='p-3 w-[12rem] xl:w-auto xl:p-5 xl:text-xl outline-none border-none bg-transparent'
            type='text'
            placeholder='Мобилен телефон'
          />
        </div>
        <button className='p-3 xl:p-5 xl:px-10 bg-button-yellow xl:text-xl rounded-r-xl border-0 font-bold'>
          Изпрати
        </button>
      </div>
    </div>
  )
}
