import React from 'react'
import { ServiceRequest } from '../../../../components/Tables/Columns'
import DataTable from '../../../../components/Tables/DataTable'

const ServicesRequest = () => {
  const serviceData = [
    {
      des: " Lorem Ipsum is simply dummy text",
      date: " 10/10/2022",
      status: " completed",
    },
    {
      des: " Lorem Ipsum is simply dummy text",
      date: " 10/10/2022",
      status: " completed",
    },
    {
      des: " Lorem Ipsum is simply dummy text",
      date: " 10/10/2022",
      status: " completed",
    },
  ];

  return (
    <div>
      <div className="text-darkest-blue font-semibold text-md  px-5 pt-5 pb-3">
        Service Request
      </div>
      <div className="">
        <DataTable columns={ServiceRequest} dataSource={serviceData} />
      </div>
    </div>
  )
}

export default ServicesRequest