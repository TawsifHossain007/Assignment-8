import React, { useEffect, useState } from "react";
import InstalledCard from "../../Components/InstalledCard/InstalledCard";
import { useLoaderData } from "react-router";
import { getStoredApps, removeFromDB } from "../../Utilities/AddtoDB";

const Installation = () => {
  const  initialApps = useLoaderData();

  const [installedApps,setInstalledApps] = useState([])
  const [sort,setSort] = useState("")

  const handleUninstall = (id) => {
        removeFromDB(id)
        const newList = installedApps.filter(app => app.id !== id);
        setInstalledApps(newList)
    }

const handleSort = (type) => {
  setSort(type);

  const parseDownloads = (str) => {
    const lower = str.toLowerCase();
    if (lower.includes("m"))
        {
            return parseFloat(lower) * 1000000;
        } 
    if (lower.includes("k"))
        {
            return parseFloat(lower) * 1000;
        } 
    return parseFloat(lower); 
  };

  const sorted = [...installedApps].sort((a, b) => {
    const downloadsA = parseDownloads(a.downloads);
    const downloadsB = parseDownloads(b.downloads);

    if (type === "High to Low")
        {
            return downloadsB - downloadsA;
        } 
    if (type === "Low to High")
        {
            return downloadsA - downloadsB;
        } 
  });

  setInstalledApps(sorted);
};

  useEffect(()=>{

        const StoredAppsData = getStoredApps();
        const ConvertedStoredApps = StoredAppsData.map(id=>parseInt(id))
        const myInstalledApps = initialApps.appsData.filter(apps=>ConvertedStoredApps.includes(apps.id))
        setInstalledApps(myInstalledApps)
  },[])

  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto pt-20 pb-20">
        <div className="text-center">
          <h1 className="font-bold text-[48px]">Your Installed Apps</h1>
          <p className="text-[#627382] font-normal text-[20px] mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex items-center justify-between mt-12">
          <p className="font-semibold text-[24px]">{installedApps.length} Apps Found</p>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Downloads : {sort? sort:""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={()=>handleSort("High to Low")}>High to Low</a>
              </li>
              <li>
                <a onClick={()=>handleSort("Low to High")}>Low to High</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
            {
                installedApps.map(card => <InstalledCard handleUninstall={handleUninstall}  card={card}></InstalledCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Installation;
