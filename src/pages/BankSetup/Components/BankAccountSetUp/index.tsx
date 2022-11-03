import React, { useState } from 'react'
import DataTable from '../../../../components/Tables/DataTable'
import TabPanel from '../../../../components/TabPanel'
import { serviceData } from '../../../Dashboard/data'
import AddBank from './AddBank'
interface Data {
  title?: string,
  id?: number
}
export interface IDataProps {
  data: Data[]
}

const BankAccountSetUp = ({ data }: IDataProps) => {
  const [step, setStep] = useState<number>(0)

  const handleChange = (i: any) => {
    setStep(i)
  }
  const accountColumn: any[] = [
    {
      dataField: "Account Number",
      caption: "Account Number",
      // width: 200,
      cssClass: "px-10",
    },
    {
      dataField: "des",
      caption: "Account Holder Name",
      // width: 200,
      cssClass: "px-10",
    },
    {
      dataField: "Charges",
      caption: "Bank Name",
      cssClass: "px-10",
      width: 200,
      cellRender: (cellData: any) => {
        return <div className="flex">$50.00</div>
      }
    },

    {
      dataField: "payment",
      caption: "Rounting Number",
      cssClass: "px-10",
      width: 200,
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },
    {
      dataField: "Concession",
      caption: "Account Type",
      width: 200,
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStep(0)
  }
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
          <DataTable columns={accountColumn} dataSource={serviceData} /> :
          <div className="border-t ">
            <AddBank onHandleSubmit={handleSubmit} />
          </div>
      }</>
  )
}

export default BankAccountSetUp