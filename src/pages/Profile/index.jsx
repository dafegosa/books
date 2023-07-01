import React, { useContext } from 'react';
import { GlobalContext } from '../../store/globalContext';

const Profile = () => {
  const {
    state: {
      user: { info },
    },
  } = useContext(GlobalContext);
  return (
    <section>
      <div className="items-center px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36">
        <ul className="w-full border-t divide-y border-mercury-300 divide-mercury-300">
          <li className="py-4 lg:py-8">
            <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-24">
              <div className="lg:col-span-2 lg:order-last">
                <p className="text-base text-gray-500">
                  lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quos quibusdam, quod, quae, quia .
                </p>
              </div>
              <div className="inline-flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    className="object-cover w-10 h-10 rounded-full lg:h-16 lg:w-16"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-medium leading-6 text-black">
                    {info?.name}
                  </p>
                  <p className="text-sm text-gray-500">{info?.email}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
