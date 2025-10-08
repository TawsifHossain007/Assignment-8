import { Link, useLoaderData, useLocation } from "react-router";
import HomeApp from "../../Components/HomeApp/HomeApp";
import { useState } from "react";

const Apps = () => {
  const appsObj = useLoaderData();
  const apps = appsObj.appsData;
  const location = useLocation();

  const [showButton, setShowButton] = useState(location.pathname !== "/apps");

  const hideShowBtn = () => {
    setShowButton(false);
  };

  return (
    <div className="bg-[#f5f5f5]">
      <h1 className="font-bold text-[48px] text-center pt-20">
        Our All Applications
      </h1>
      <p className="font-normal text-[20px] text-[#627382] text-center mt-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 mt-20 gap-6 pb-20">
        {apps.map((app) => (
          <HomeApp hideShowBtn={hideShowBtn} key={app.id} app={app}></HomeApp>
        ))}
      </div>
      {showButton && (
        <div className="flex items-center justify-center pb-20">
          <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-[4px] px-8">
            <Link to={"/apps"}> Show All</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;
