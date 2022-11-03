import { Popup, Position } from 'devextreme-react/popup';
import React from 'react'
import { useDispatch } from 'react-redux';
import { IModalProps } from '../../models/interface'
import { setOpen } from '../../store/ValidationSlice';
import ButtonWrapper from '../Form/Buttons/ButtonWrapper';
import DatePicker from '../Form/Inputs/DatePicker';
import Input from '../Form/Inputs/Input';
import Select from '../Form/Inputs/Select';
import TextAreaInput from '../Form/Inputs/TextAreaInput';



const DeliveriesModal = ({
  visible,
  showCloseButton,
  title,
  width,
  height,
  isShow,
  text
}: IModalProps) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Popup
        visible={visible}
        // onHiding={() => dispatch(setOpen(false))}
        dragEnabled={false}
        // hideOnOutsideClick={true}
        showCloseButton={showCloseButton}
        showTitle={false}
        // title={title}
        className='p-0'
        // container=".dx-viewport"
        width={width}
        height={height}
      >
        <Position
          at="center"
          my="center"
          of={''}
        />
        {/* <div className="">hhhhhhh</div> */}

        <div className="">
          <div className="p-8 border-b">
            <div className="text-dark-purple font-normal text-[22px] pb-5">{title}</div>
            <div className="text-dark-purple font-normal text-sm">{text}</div>
          </div>
          <div className="px-8 py-6">
            {
              isShow === 'hold' &&
              <>
                <div className="mb-9">
                  <DatePicker mode={'static'} label='Hold until date' />
                </div>
                <div className="">
                  <TextAreaInput mode={'static'} label='Description' height={100} />
                </div>
              </>

            }
            {
              isShow === 'return' &&
              <div className="">
                <TextAreaInput mode={'static'} label='Hold' height={200} />
              </div>
            }
            {
              isShow === 'forword' &&
              <div className="">
                <div className="grid grid-cols-2 gap-5">
                  <Input mode={'static'} label='Address Line 1' />
                  <Input mode={'static'} label='Address Line 2' />
                </div>
                <div className="grid grid-cols-2 gap-5 my-6">
                  <Select mode={'static'} label='Country' />
                  <Select mode={'static'} label='State' />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <Input mode={'static'} label='City' />
                  <Input mode={'static'} label='Zip Code' />
                </div>
              </div>
            }
          </div>
        </div>



        <div className="p-5 border-t flex justify-between">
          <ButtonWrapper text='Cancel' classNames='text-purple bg-white w-48' onHandleClick={() => dispatch(setOpen(false))} />
          <ButtonWrapper text='Submit' classNames='text-white bg-purple w-48' onHandleClick={() => dispatch(setOpen(false))} />
        </div>
      </Popup>
    </div>
  )
}

export default DeliveriesModal