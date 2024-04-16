import { PriceCard } from '@/components/PriceCard';
import { kMaxLength } from 'buffer';
import Image from 'next/image';
import React from 'react';

const ServicesPage = () => {
  const features = [
    'Trimestral biodiversity report',
    'Monthly diversity report',
    'Access to Environmental data',
    'trimestral dive',
    'Monthly report',
    'real-time access',
    'reef named as per sponsor brand',
    'trimestral dive',
    'integrated chatbot to answer directly to any inquiries',
  ];
  return (
    <div className='flex flex-col'>
      <div className=' m-20 flex justify-center'>
        <h1 className='text-white'>Services</h1>
      </div>
      <div className='flex flex-col p-20 items-center font-light bg-white min-h-screen '>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
          <PriceCard
            title='Silver Sponsor'
            price='12K'
            description={[
              'Setup fee : AED 12000',
              'Price per Sqm :AED 7000,',
              'Minimum reef : 10 sqm',
            ]}
          />
          <PriceCard
            title='Gold Sponsor'
            price='36K'
            description={[
              'Setup fee : AED 36000',
              'Price per Sqm :AED 6000,',
              'Minimum reef : 50 sqm',
            ]}
          />

          <PriceCard
            title='Platinum'
            price='96K'
            description={[
              'Setup fee : AED 96000',
              'Price per Sqm :AED 5000,',
              'Minimum reef : 150 sqm,',
            ]}
          />
        </div>
        <div className='w-full flex flex-col mb-10'>
          <h1 className='text-blue-900 mt-20'>Features</h1>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <p className='text-xl font-medium'>- {feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <h1 className='text-blue-900 text-4xl mt-20'>
          "Reviving Oceans, Building Reefs"
        </h1>
        <div className='flex flex-col my-20 gap-10'>
          <h1 className='text-blue-950 md:min-w-[500px]'>Project Benefits</h1>
          <Image
            src={'/benefit.png'}
            alt='benefit'
            width={kMaxLength}
            height={kMaxLength}
            className=' object-cover flex w-full h-full'
          />
        </div>
        <div className='flex flex-col my-20 gap-10'>
          <h1 className='text-blue-950 mt-20'>Gallery</h1>
          <Image
            src={'/fish.png'}
            alt='fish'
            width={kMaxLength}
            height={kMaxLength}
            className=' object-cover flex w-full h-full'
          />
        </div>
        <div className='flex flex-col my-20 gap-10'>
          <h1 className='text-blue-950 mt-20'>3D Designs</h1>
          <Image
            src={'/concrete.png'}
            alt='fish'
            width={kMaxLength}
            height={kMaxLength}
            className=' object-cover flex w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
