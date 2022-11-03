import React from 'react'
import ButtonWrapper from '../../../../components/Form/Buttons/ButtonWrapper'
import Input from '../../../../components/Form/Inputs/Input'
import Select from '../../../../components/Form/Inputs/Select'

export interface ISubmitButton {
  onHandleSubmit?: ((e: any) => void);
}
const AddBank = ({
  onHandleSubmit
}: any) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 px-7 pt-5 pb-10'>
        <div className="col-span-1 sm:col-span-2">
          <Input mode={'static'} label='Name on Account' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='Bank Name ' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='Routing Number' type='number' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='Account Number' type='number' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='Account Number' type='number' placeholder='...' />
        </div>
        <div className="">
          <Select mode={'static'} label='Account Type' />
        </div>
      </div>
      <div className="flex border-t px-7 py-8  ">
        <ButtonWrapper type='submit' text='Save' classNames='w-32 bg-purple text-white mr-5' />
        <ButtonWrapper type='button' text='Cancel' classNames='text-purple w-32' onHandleClick={onHandleSubmit} />
      </div>
    </form>
  )
}

export default AddBank