import React from 'react'
import ButtonWrapper from '../../components/Form/Buttons/ButtonWrapper'
import Heading from '../../components/Heading'
import plus from '../../assets/Icons/add.svg'
import DataTable from '../../components/Tables/DataTable'
import { ServiceRequest } from '../../components/Tables/Columns'
import { serviceData } from '../Dashboard/data'
import { useHistory } from 'react-router-dom'

const ServicesRequest = () => {
  const history = useHistory()
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between">
          <Heading text={'service request'} />
          <div className="">
            <ButtonWrapper classNames='bg-purple text-white' text='Create new request' svgIcon={plus} onHandleClick={() => history.push('/create-service-request')} />
          </div>
        </div>
        <div className="pt-10 my-5 shadow-light-gray bg-white rounded-md">
          <DataTable columns={ServiceRequest} dataSource={serviceData} />
        </div>
      </div>
    </>
  )
}

export default ServicesRequest