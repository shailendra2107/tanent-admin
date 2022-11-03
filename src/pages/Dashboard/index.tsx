import React from 'react';
import Icon from '../../components/Icon';
import AminityBooking from './Components/AminityBooking';
import CardSection from './Components/CardSection';
import PayOutstanding from './Components/PayOutstanding';
import ServicesRequest from './Components/ServicesRequest';
import Announcement from '../../assets/Icons/announcement-icon.svg'
import { MdClose } from 'react-icons/md'

const Home: React.FC = () => {
  return (
    <main className="">
      <div className="mx-5 mt-5 p-2 border rounded-md flex bg-white justify-between items-center">
        <div className="flex">
          <div className="">
            <Icon src={Announcement} />
          </div>
          <span className='font-light text-black text-md ml-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        </div>
        <div className="">
          <MdClose fontSize={20} color='gray' />
        </div>
      </div>
      <CardSection />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-5 px-5">
        <div className="col-span-1 md:col-span-2 bg-white shadow-light-gray">
          <PayOutstanding />
        </div>
        <div className="col-span-1 md:col-span-5 bg-white shadow-light-gray">
          <ServicesRequest />
        </div>
      </div>
      <div className="p-5">
        <div className="shadow-light-gray bg-white">
          <AminityBooking />
        </div>
      </div>
    </main>
  );
};

export default Home;
