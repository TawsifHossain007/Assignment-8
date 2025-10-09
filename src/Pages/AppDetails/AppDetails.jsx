
import { useLoaderData, useParams } from "react-router";
import DownloadImg from "../../assets/icon-downloads.png";
import RatingImg from "../../assets/icon-ratings.png";
import ReviewImg from "../../assets/icon-review.png";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const AppId = parseInt(id);

  const data = useLoaderData();
  const singleApp = data.appsData.find((App) => App.id === AppId);

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
    <div className="max-w-[1200px] mx-auto m-20">
      {/* Info */}
      <div className="flex justify-start items-start gap-6 border-b-3 border-gray-300 pb-16">
        <div>
          <img src={image} className="w-[350px] h-[350px]" alt="" />
        </div>

        <div>
          <div className="border-b-3 border-gray-300 pb-2">
            <p className="font-bold text-[32px]">{title}</p>
            <p className="font-bold text-[20px] text-[#627382]">
              Developed By <span className="text-[#632ee3]">{companyName}</span>
            </p>
          </div>
          <div className="flex justify-center items-center gap-14 mt-8">
            <div className="flex flex-col justify-center">
              <img className="h-[40px] w-[40px]" src={DownloadImg} alt="" />
              <p className="text-[#001931] font-normal text-[16px] mt-2">
                Downloads
              </p>
              <p className="font-extrabold text-[40px]">{downloads}</p>
            </div>
            <div className="flex flex-col justify-center">
              <img className="h-[40px] w-[40px]" src={RatingImg} alt="" />
              <p className="text-[#001931] font-normal text-[16px] mt-2">
                Average Ratings
              </p>
              <p className="font-extrabold text-[40px]">{ratingAvg}</p>
            </div>
            <div className="flex flex-col justify-center">
              <img className="h-[40px] w-[40px]" src={ReviewImg} alt="" />
              <p className="text-[#001931] font-normal text-[16px] mt-2">
                Total Reviews
              </p>
              <p className="font-extrabold text-[40px]">{reviews}</p>
            </div>
          </div>
          <div>
            <button className="btn btn-success mt-12 text-white">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-10 border-b-3 border-gray-300 pb-16">
        <h1 className="font-bold text-[24px]">Ratings</h1>

        <BarChart
          className="mt-5"
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
      {/* Description */}

      <div className="mt-10">
            <h1 className="font-bold text-[24px] mb-8">Description</h1>

            <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
