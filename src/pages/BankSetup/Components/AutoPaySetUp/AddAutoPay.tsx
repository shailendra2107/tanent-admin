import React, { useState } from 'react'
import Accordion from '../../../../components/Accordion'
import { FaChevronDown } from 'react-icons/fa'
import ButtonWrapper from '../../../../components/Form/Buttons/ButtonWrapper'
import Input from '../../../../components/Form/Inputs/Input'
import Select from '../../../../components/Form/Inputs/Select'
import DatePicker from '../../../../components/Form/Inputs/DatePicker'
import { CheckBox } from 'devextreme-react'

const AddAutoPay = () => {
  const [show, setShow] = useState<boolean>(true)
  const [show1, setShow1] = useState<boolean>(true)
  return (
    <>
      <Accordion text='Credit or debit card' icon={<FaChevronDown />} onHandleClick={() => setShow(!show)} open={show}>
        <div className="px-7 pt-5 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="">
              <Input mode={'static'} label='Payment Name*' placeholder='...' />
            </div>
            <div className="">
              <Select mode={'static'} label='Monthly Payment' />
            </div>
            <div className="">
              <Input mode={'static'} label='Payment Amount*' placeholder='...' />
            </div>
            <div className="">
              <DatePicker mode={'static'} label='Payment State Date*' placeholder='...' />
            </div>
            <div className="">
              <Select mode={'static'} label='Select Card Setup*' />
            </div>
          </div>
          <div className="pb-10 pt-5 ">
            <CheckBox text='Inactive' />
          </div>
          <div className="flex ">
            <ButtonWrapper type='submit' text='Save' classNames='w-32 bg-purple text-white mr-5' />
            <ButtonWrapper type='button' text='Cancel' classNames='text-purple w-32' />
          </div>
        </div>
      </Accordion>
      <Accordion text='E-Check' icon={<FaChevronDown />} onHandleClick={() => setShow1(!show1)} open={show1}>
        <div className="px-7 pt-5 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="">
              <Input mode={'static'} label='Payment Name*' placeholder='...' />
            </div>
            <div className="">
              <Select mode={'static'} label='Monthly Payment' />
            </div>
            <div className="">
              <Input mode={'static'} label='Payment Amount*' placeholder='...' />
            </div>
            <div className="">
              <DatePicker mode={'static'} label='Payment State Date*' placeholder='...' />
            </div>
            <div className="">
              <Select mode={'static'} label='Select Bank Account*' />
            </div>
          </div>
          <div className="pb-10 pt-5 ">
            <CheckBox text='Inactive' />
          </div>
          <div className="flex ">
            <ButtonWrapper type='submit' text='Save' classNames='w-32 bg-purple text-white mr-5' />
            <ButtonWrapper type='button' text='Cancel' classNames='text-purple w-32' />
          </div>
        </div>
      </Accordion>
    </>
  )
}

export default AddAutoPay