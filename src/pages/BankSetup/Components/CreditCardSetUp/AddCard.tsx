import { CheckBox } from 'devextreme-react';
import React from 'react'
import ButtonWrapper from '../../../../components/Form/Buttons/ButtonWrapper'
import DatePicker from '../../../../components/Form/Inputs/DatePicker';
import Input from '../../../../components/Form/Inputs/Input'
import Select from '../../../../components/Form/Inputs/Select'

export interface ISubmitButton {
  onHandleSubmit?: ((e: any) => void);
}
const AddCard = ({
  onHandleSubmit
}: any) => {
  return (
    <form onSubmit={onHandleSubmit}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-7 pt-5'>
        <div className="">
          <Select mode={'static'} label='Account Type' />
        </div>
        <div className="">
          <Input mode={'static'} label='Card Number' placeholder='...' />
        </div>
        <div className="">
          <DatePicker mode={'static'} label='Valid Till' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='First Name' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='Last Name' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='Display Name' placeholder='...' />
        </div>
        <div className="">
          <Input mode={'static'} label='Billing Address' placeholder='...' />
        </div>
        <div className="">
          <Select mode={'static'} label='Billing City' />
        </div>
        <div className="">
          <Select mode={'static'} label='Billing Country' />
        </div>
        <div className="">
          <Select mode={'static'} label='Billing State' />
        </div>
        <div className="">
          <Input mode={'static'} label='Zip Code' placeholder='...' />
        </div>
      </div>
      <div className="px-7 pb-10 pt-5 ">
        <CheckBox text='Inactive' />
      </div>
      <div className="flex border-t px-7 py-8  ">
        <ButtonWrapper type='submit' text='Save' classNames='w-32 bg-purple text-white mr-5' />
        <ButtonWrapper type='button' text='Cancel' classNames='text-purple w-32' onHandleClick={onHandleSubmit} />
      </div>
    </form>
  )
}

export default AddCard