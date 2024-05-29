import { ChevronDown } from 'lucide-react';
import React, {useState} from 'react';

export default function Faq() {
  const [activeTab, setActiveTab] = useState('');

  const toggleTab = (tabName: string) => {
    setActiveTab(prevTab => (prevTab === tabName ? '' : tabName));
  };

  return (
    <div className="my-4">
      <div className="mb-[2.1875rem]">
        <h1 className="text-primary text-[1.125rem] text-center font-medium leading-[28px] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-sm leading-[20px]">
          Looking for help? Here are our most frequently asked questions
        </p>
      </div>
      <div className="bg-[#E7F4F8] p-2  h-screen">
        <div className="flex flex-col gap-2">
          <div
            className={` ${activeTab === 'tab1' ? 'bg-white rounded shadow ' : 'bg-white rounded shadow'}`}
          >
            <div
              className={` ${activeTab === 'tab1' ? ' border-b p-2 flex justify-between ' : ' border p-2 flex justify-between'}`}
              onClick={() => toggleTab('tab1')}
            >
              Where are your coverage areas?
              <ChevronDown
                className={` ${activeTab === 'tab1' ? 'transform rotate-180 ' : ' '}`}
                color="#B9C4D7"
              />
            </div>
            <div className={` ${activeTab === 'tab1' ? ' p-2 ' : 'hidden'}`}>
              Content for Tab 1
            </div>
          </div>

          <div
            className={` ${activeTab === 'tab2' ? 'bg-white rounded shadow ' : 'bg-white rounded shadow'}`}
          >
            <div
              className={` ${activeTab === 'tab2' ? ' border-b p-2 flex justify-between ' : 'shadow border p-2 flex justify-between'}`}
              onClick={() => toggleTab('tab2')}
            >
              How can I request quote for a product?
              <ChevronDown
                className={` ${activeTab === 'tab2' ? 'transform rotate-180 ' : ' '}`}
                color="#B9C4D7"
              />
            </div>
            <div className={` ${activeTab === 'tab2' ? ' p-2 ' : 'hidden'}`}>
              Content for Tab 2
            </div>
          </div>

          <div
            className={` ${activeTab === 'tab3' ? 'bg-white rounded shadow ' : 'bg-white rounded shadow'}`}
          >
            <div
              className={` ${activeTab === 'tab3' ? ' border-b p-2 flex justify-between ' : 'shadow border p-2 flex justify-between'}`}
              onClick={() => toggleTab('tab3')}
            >
              How do i create an account?
              <ChevronDown
                className={` ${activeTab === 'tab3' ? 'transform rotate-180 ' : ' '}`}
                color="#B9C4D7"
              />
            </div>
            <div className={` ${activeTab === 'tab3' ? ' p-2 ' : 'hidden'}`}>
              Content for Tab 1
            </div>
          </div>

          <div
            className={` ${activeTab === 'tab4' ? 'bg-white rounded shadow ' : 'bg-white rounded shadow'}`}
          >
            <div
              className={` ${activeTab === 'tab4' ? ' border-b p-2 flex justify-between ' : 'shadow border p-2 flex justify-between'}`}
              onClick={() => toggleTab('tab4')}
            >
              Where are your coverage areas?
              <ChevronDown
                className={` ${activeTab === 'tab4' ? 'transform rotate-180 ' : ' '}`}
                color="#B9C4D7"
              />
            </div>
            <div className={` ${activeTab === 'tab4' ? ' p-2 ' : 'hidden'}`}>
              Content for Tab 1
            </div>
          </div>

          <div
            className={` ${activeTab === 'tab5' ? 'bg-white rounded shadow ' : 'bg-white rounded shadow'}`}
          >
            <div
              className={` ${activeTab === 'tab5' ? ' border-b p-2 flex justify-between ' : 'shadow border p-2 flex justify-between'}`}
              onClick={() => toggleTab('tab5')}
            >
              Where are your coverage areas?
              <ChevronDown
                className={` ${activeTab === 'tab5' ? 'transform rotate-180 ' : ' '}`}
                color="#B9C4D7"
              />
            </div>
            <div className={` ${activeTab === 'tab5' ? ' p-2 ' : 'hidden'}`}>
              Content for Tab 1
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
