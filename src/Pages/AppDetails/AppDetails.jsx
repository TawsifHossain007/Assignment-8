
import { useLoaderData, useParams } from "react-router";
import DownloadImg from "../../assets/icon-downloads.png";
import RatingImg from "../../assets/icon-ratings.png";
import ReviewImg from "../../assets/icon-review.png";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AddtoStoredDB, getStoredApps } from "../../Utilities/AddtoDB";

const AppDetails = () => {
  const { id } = useParams();
  const AppId = parseInt(id); 

  const data = useLoaderData();
  const singleApp = data.appsData.find((App) => App.id === AppId);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const storedApps = getStoredApps().map(Number); 
    if (storedApps.includes(AppId)) {
      setIsInstalled(true);
    }
  }, [AppId]);

  const handleInstall = () => {
    if (!isInstalled) {
      setIsInstalled(true);
      toast(`${singleApp.title} Installed successfully!`);
      AddtoStoredDB(AppId);
    }
  };

  const {
    image,
    title,
    size,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
  } = singleApp;

  return (
    <div className="max-w-[1200px] mx-auto my-10 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-6 border-b border-gray-300 pb-8 lg:pb-16">
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <img
            src={image}
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px]"
            alt=""
          />
        </div>

        <div className="flex-1">
          <div className="border-b border-gray-300 pb-2">
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
              {title}
            </p>
            <p className="font-bold text-lg sm:text-xl text-[#627382] mt-1">
              Developed By <span className="text-[#632ee3]">{companyName}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 mt-6 sm:mt-8">
            <div className="flex flex-col items-center sm:items-start">
              <img className="h-10 w-10" src={DownloadImg} alt="" />
              <p className="text-[#001931] font-normal text-sm mt-2">
                Downloads
              </p>
              <p className="font-extrabold text-2xl sm:text-3xl">{downloads}</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <img className="h-10 w-10" src={RatingImg} alt="" />
              <p className="text-[#001931] font-normal text-sm mt-2">
                Average Ratings
              </p>
              <p className="font-extrabold text-2xl sm:text-3xl">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <img className="h-10 w-10" src={ReviewImg} alt="" />
              <p className="text-[#001931] font-normal text-sm mt-2">
                Total Reviews
              </p>
              <p className="font-extrabold text-2xl sm:text-3xl">{reviews}</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-12 flex justify-center lg:justify-start">
            <button
              onClick={handleInstall}
              className={`btn btn-success text-white px-6 py-3 ${
                isInstalled ? "opacity-70 pointer-events-none" : ""
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
              <ToastContainer />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-b border-gray-300 pb-8 lg:pb-16">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">Ratings</h1>
        <div className="overflow-x-auto mt-5">
          <BarChart
            width={1200}
            height={256}
            layout="vertical"
            data={singleApp.ratings
              .map((r) => ({ star: r.name, count: r.count }))
              .reverse()}
          >
            <XAxis type="number" />
            <YAxis dataKey="star" type="category" />
            <Bar dataKey="count" fill="orange" stroke="orange" barSize={30} />
          </BarChart>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-xl mb-4 sm:mb-8">Description</h1>
        <p className="text-[#627382] text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
