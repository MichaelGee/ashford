import ProductCard from '@/components/molecules/productCard';
import Status from '@/components/ui/status';
import {ChevronRight} from 'lucide-react';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const products = [
    {
      id: 1,
      tag: 'AIR FREIGHT',
      description:
        'Our comprehensive warehousing services offer secure and organized storage facilities for your goods. With our efficient management and state-of-the-art infrastructure, we ensure optimal handling and timely distribution of your inventory. Check our quote in the form below.',
      Image:
        'https://miro.medium.com/v2/resize:fit:768/1*woToSmhUqSfjQAQ4Hl31Cw.jpeg',
      status: 'quote',
    },
    {
      id: 2,
      tag: 'SEA FREIGHT',
      description:
        'Our comprehensive warehousing services offer secure and organized storage facilities for your goods. With our efficient management and state-of-the-art infrastructure, we ensure optimal handling and timely distribution of your inventory. Check our quote in the form below.',
      Image:
        'https://www.savinodelbene.com/wp-content/uploads/2023/10/ocean-freight-shipping.png',
      status: 'requested',
    },
    {
      id: 3,
      tag: 'CARGO',
      description:
        'Our comprehensive warehousing services offer secure and organized storage facilities for your goods. With our efficient management and state-of-the-art infrastructure, we ensure optimal handling and timely distribution of your inventory. Check our quote in the form below.',
      Image: 'https://rb.gy/8ywh5w',
      status: 'success',
    },
    {
      id: 4,
      tag: 'LAND FREIGHT',
      description:
        'Our comprehensive warehousing services offer secure and organized storage facilities for your goods. With our efficient management and state-of-the-art infrastructure, we ensure optimal handling and timely distribution of your inventory. Check our quote in the form below.',
      Image:
        'https://pics.craiyon.com/2023-10-18/bead3bc68bae4511b66c85b9689a2348.webp',
      status: 'requested',
    },
    {
      id: 5,
      tag: 'WAREHOUSING',
      description:
        'Our comprehensive warehousing services offer secure and organized storage facilities for your goods. With our efficient management and state-of-the-art infrastructure, we ensure optimal handling and timely distribution of your inventory. Check our quote in the form below.',
      Image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UPxSCrKqTzqzd6Z8Uy-UAfsbB6bnPiejFBPsqkiaIQ&s',
      status: 'success',
    },
    {
      id: 6,
      tag: 'PACKAGING',
      description:
        'Our comprehensive warehousing services offer secure and organized storage facilities for your goods. With our efficient management and state-of-the-art infrastructure, we ensure optimal handling and timely distribution of your inventory. Check our quote in the form below.',
      Image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4q83pDSNBlflEInHYq--P3NhovDZsmE5uZTlad4rFEw&s',
      status: 'quote',
    },
  ];
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="text-primary font-medium leading-[28px]">
          Good Afternoon, Raymond
        </h1>
        <p className="text-[0.6rem] leading-[20px]">How are you doing today?</p>
      </div>
      <h1 className="text-blue002 text-[0.8rem] mt-6">
        Welcome to <span className="font-bold">Ashford Express Logistics</span>{' '}
        - Your Trusted Partner in Streamlined Delivery
      </h1>

      {/* Products */}
      <div className="mt-space400">
        <h1 className="text-primary font-bold mb-space200">Our Products</h1>
        <div className="flex flex-wrap gap-y-2 justify-between">
          {products.map(product => (
            <ProductCard
              key={product.id}
              tag={product.tag}
              status={product.status}
              description={product.description}
              image={product.Image}
            />
          ))}
        </div>
      </div>

      {/* Transaction history overview */}
      <div className="flex flex-col mt-space300">
        <div className="flex justify-between items-center">
          <h1 className="text-primary font-bold mb-space200">
            Transaction History
          </h1>{' '}
          <p
            className="text-[0.6rem] text-blue003 cursor-pointer"
            onClick={() => {
              navigate('/transaction-history');
            }}
          >
            View all
          </p>
        </div>

        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="success" />
            <ChevronRight />
          </div>
        </div>
        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="pending" />
            <ChevronRight />
          </div>
        </div>
        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="requested" />
            <ChevronRight />
          </div>
        </div>
        <div className="flex justify-between items-center py-[1rem] border-b-[0.7px] border-[#00000033]">
          <div className="flex">
            <img
              src="https://rb.gy/8ywh5w"
              className="rounded-[8px] w-[48px] h-[48px]"
            />
            <div className="ml-[1rem]">
              <h1 className="text-[0.9rem] mb-[0.4rem]">Warehousing</h1>
              <p className="text-[0.6rem] text-blue004">25 Feb 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <Status variant="success" />
            <ChevronRight />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
