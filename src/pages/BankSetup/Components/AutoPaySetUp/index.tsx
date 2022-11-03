import React, { useState } from 'react'
import DataTable from '../../../../components/Tables/DataTable'
import TabPanel from '../../../../components/TabPanel'
import { serviceData } from '../../../Dashboard/data'
import { IDataProps } from '../BankAccountSetUp'
import AddAutoPay from './AddAutoPay'

const AutoPaySetUp = ({ data }: IDataProps) => {
  const [step, setStep] = useState<number>(0)

  const handleChange = (i: any) => {
    setStep(i)
  }
  const ChargesColumn: any[] = [
    {
      dataField: "Date",
      caption: "Payment Name",
      // width: 250,
      cssClass: "px-10",
    },
    {
      dataField: "des",
      caption: "Payement Type",
      width: 250,
      cssClass: "px-10",
    },
    {
      dataField: "Charges",
      caption: "Monthly Payment",
      cssClass: "px-10",
      width: 250,
      cellRender: (cellData: any) => {
        return <div className="flex">$50.00</div>
      }
    },

    {
      dataField: "payment",
      caption: "Payment Amount",
      cssClass: "px-10",
      width: 250,
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },
    {
      dataField: "Concession",
      caption: "Payment Start Date",
      width: 250,
      cssClass: "",
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },

    {
      dataField: "action",
      caption: "Active",
      cssClass: "px-10 flex justify-center",
      width: 100,
      cellRender: (cellData: any) => {
        return (
          <div className="flex">
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="px-4 pt-4">
        <TabPanel
          tabs={data}
          onHandleClick={handleChange}
          step={step}
        />
      </div>
      {
        step === 0 ?
          <DataTable columns={ChargesColumn} dataSource={serviceData} /> :
          <div className="border-t">
            <AddAutoPay />
          </div>
      }</>
  )
}

export default AutoPaySetUp