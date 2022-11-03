import React, { useState } from 'react'
import DataTable from '../../../../components/Tables/DataTable'
import TabPanel from '../../../../components/TabPanel'
import { serviceData } from '../../../Dashboard/data'
import { IDataProps } from '../BankAccountSetUp'
import AddCard from './AddCard'

const CreditCardSetUp = ({ data }: IDataProps) => {
  const [step, setStep] = useState<number>(0)

  const handleChange = (i: any) => {
    setStep(i)
  }
  const ChargesColumn: any[] = [
    {
      dataField: "Date",
      caption: "Card Number",
      width: 150,
      cssClass: "px-10",
    },
    {
      dataField: "des",
      caption: "Card Type",
      width: 150,
      cssClass: "px-10",
    },
    {
      dataField: "Charges",
      caption: "Name",
      cssClass: "px-10",
      width: 150,
      cellRender: (cellData: any) => {
        return <div className="flex">$50.00</div>
      }
    },

    {
      dataField: "payment",
      caption: "Display Name",
      cssClass: "px-10",
      width: 150,
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },
    {
      dataField: "Concession",
      caption: "Billing Address",
      // width: 150,
      cssClass: "",
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },

    {
      dataField: "",
      caption: "Billing City",
      cssClass: "",
      width: 150,
      cellRender: (cellData: any) => {
        return (
          <div className="flex">
          </div>
        );
      },
    },
    {
      dataField: "",
      caption: "Billing State ",
      cssClass: "",
      width: 150,
      cellRender: (cellData: any) => {
        return (
          <div className="flex">
          </div>
        );
      },
    },
    {
      dataField: "",
      caption: "Zip Code",
      cssClass: "",
      width: 150,
      cellRender: (cellData: any) => {
        return (
          <div className="flex">
          </div>
        );
      },
    },
    {
      dataField: "",
      caption: "Valid Till",
      cssClass: "",
      width: 150,
      cellRender: (cellData: any) => {
        return (
          <div className="flex">
          </div>
        );
      },
    },
    {
      dataField: "action",
      caption: "Active",
      cssClass: "",
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
          <DataTable columns={ChargesColumn} dataSource={serviceData} /> :
          <div className="border-t ">
            <AddCard onHandleSubmit={handleSubmit} />
          </div>
      }</>
  )
}

export default CreditCardSetUp