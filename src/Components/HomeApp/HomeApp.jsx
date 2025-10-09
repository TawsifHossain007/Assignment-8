import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const HomeApp = ({ app, hideShowBtn }) => {


  return (
    <Link to={`/AppDetails/${app.id}`}>
        <div 
      className='
        bg-white 
        p-4 
        rounded-[4px] 
        shadow-2xl 
        transform 
        transition 
        duration-300 
        hover:-translate-y-2 
        hover:shadow-2xl 
        hover:bg-gray-300
        cursor-pointer
      '
       onClick={hideShowBtn} 
    >
      <img
        className='w-[260px] h-[260px] rounded-[4px] object-cover'
        src={app.image}
        alt=""
      />
      <h1 className='font-medium text-[20px] mt-2'>{app.title}</h1>
      <div className='flex items-center justify-between mt-3'>
        <div className="badge badge-soft badge-success flex items-center gap-1">
          <Download /> {app.downloads}
        </div>
        <div className="badge badge-soft badge-warning flex items-center gap-1">
          <Star /> {app.ratingAvg}
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default HomeApp;
