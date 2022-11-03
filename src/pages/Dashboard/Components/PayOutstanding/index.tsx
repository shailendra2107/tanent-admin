import React from 'react'
import ButtonWrapper from '../../../../components/Form/Buttons/ButtonWrapper'
import DatePicker from '../../../../components/Form/Inputs/DatePicker'
import Input from '../../../../components/Form/Inputs/Input'
import Select from '../../../../components/Form/Inputs/Select'

const PayOutstanding = () => {
  return (
    <div>
      <div className="text-darkest-blue font-semibold text-md  border-b px-5 pt-5 pb-3">
        Pay Outstandings
      </div>
      <div className="p-5">
        <div className="">
          <Select classNames='col-span-1 md:col-span-2' mode={'static'} label='Profile' />
        </div>
        <div className=" my-4">
          <Input classNames="col-span-1 md:col-span-2" mode={'static'} label='Amount' />
        </div>
        <div className=" my-4">
          <DatePicker classNames="col-span-1 md:col-span-2" mode={'static'} label='Due Date' />
        </div>
        <div className="grid grid-cols-1">
          <ButtonWrapper type='button' text='Pay Now' classNames='bg-purple  mt-7 text-white shadow-light-purple' />
        </div>
      </div>
    </div>
  )
}

export default PayOutstanding