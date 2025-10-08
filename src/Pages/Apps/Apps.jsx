import { Link, useLoaderData, useLocation } from "react-router";
import HomeApp from "../../Components/HomeApp/HomeApp";
import { useState } from "react";
import ErrorApps from "../../Components/ErrorApps/ErrorApps";

const Apps = () => {
  const appsObj = useLoaderData();
  const apps = appsObj.appsData;
  const location = useLocation();

  const [showButton, setShowButton] = useState(location.pathname !== "/apps");
  const [searchTerm, setSearchTerm] = useState("");

   const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between mt-15">
        <p className="text-[24px] font-semibold mb-10 md:mb-0">
          ({apps.length}) Apps Found
        </p>
        <label className="input border border-gray-600">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      {/* <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 mt-20 gap-6 pb-20">
        {filteredApps.map((app) => (
          <HomeApp hideShowBtn={hideShowBtn} key={app.id} app={app}></HomeApp>
        ))}
      </div> */}
      <div className="max-w-[1200px] mx-auto mt-20 gap-6 pb-20">
  {filteredApps.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {filteredApps.map((app) => (
        <HomeApp hideShowBtn={hideShowBtn} key={app.id} app={app} />
      ))}
    </div>
  ) : (
    <ErrorApps></ErrorApps>
  )}
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
