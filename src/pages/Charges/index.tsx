import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ButtonWrapper from '../../components/Form/Buttons/ButtonWrapper';
import Heading from '../../components/Heading'
import DataTable from '../../components/Tables/DataTable'
import TabPanel from '../../components/TabPanel';
import { serviceData } from '../Dashboard/data';

const Charges = () => {
  const history = useHistory()
  const [step, setStep] = useState<number>(0)
  const tabs = [
    {
      title: "Outstanding Charges",
      id: 1
    },
    {
      title: "Payment History",
      id: 2
    },
  ]
  const ChargesColumn: any[] = [
    {
      dataField: "Date",
      caption: "Date",
      width: 150,
      cssClass: "px-10",
    },
    {
      dataField: "des",
      caption: "Document",
      // width: ,

      cssClass: "px-10",
    },
    {
      dataField: "Charges",
      caption: "Charges",
      cssClass: "px-10",
      width: 150,
      cellRender: (cellData: any) => {
        return <div className="flex">$50.00</div>
      }
    },

    {
      dataField: "payment",
      caption: "Payment",
      cssClass: "px-10",
      width: 150,
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },
    {
      dataField: "Concession",
      caption: "Concession",
      width: 130,
      cssClass: "",
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },

    {
      dataField: "action",
      caption: "Action",
      cssClass: "px-10 flex justify-center",
      width: 100,
      cellRender: (cellData: any) => {
        return (
          <div className="flex">
            <ButtonWrapper text='Pay Now' onHandleClick={() => history.push('/pay')} classNames='text-purple bg-white py-1' />
          </div>
        );
      },
    },
  ];
  const ChargesHistoryColumn: any[] = [
    {
      dataField: "Date",
      caption: "Date",
      width: 150,
      cssClass: "px-10",
    },
    {
      dataField: "des",
      caption: "Document",
      // width: ,

      cssClass: "px-10",
    },
    {
      dataField: "Check",
      caption: "Check",
      cssClass: "px-10",
      width: 150,
      cellRender: (cellData: any) => {
        return <div className="flex">$50.00</div>
      }
    },

    {
      dataField: "payment",
      caption: "Payment",
      cssClass: "px-10",
      width: 150,
      cellRender: (cellData: any) => {
        return <div className="flex ">-</div>;
      },
    },

  ];
  const handleChange = (i: any) => {
    setStep(i)
  }
  return (
    <div className='p-5'>
      <div className="pb-5">
        <Heading text="Charges" />
      </div>
      <div className="shadow-light-gray bg-white rounded-md">
        <div className="px-4 pt-4">
          <TabPanel tabs={tabs} onHandleClick={handleChange} step={step} />
        </div>
        {
          step === 0 ?
            <DataTable columns={ChargesColumn} dataSource={serviceData} /> :
            <DataTable columns={ChargesHistoryColumn} dataSource={serviceData} />
        }
      </div>
    </div>
  )
}

export default Charges