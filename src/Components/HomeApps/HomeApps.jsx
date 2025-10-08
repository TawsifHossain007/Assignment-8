import { Link } from "react-router";
import HomeApp from "../HomeApp/HomeApp";

const HomeApps = ({ apps }) => {
  console.log(apps);
  return (
    <div className="bg-[#f5f5f5]">
      <h1 className="font-bold text-[48px] text-center pt-20">Trending Apps</h1>
      <p className="font-normal text-[20px] text-[#627382] text-center mt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 mt-20 gap-6 pb-20">
        {apps.map((app) => (
          <HomeApp key={app.id} app={app}></HomeApp>
        ))}
      </div>
      <div className="flex items-center justify-center pb-20">
             <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-[4px] px-8"><Link to={'/apps'}> Show All</Link></button>
      </div>
     
    </div>
  );
};

export default HomeApps;
