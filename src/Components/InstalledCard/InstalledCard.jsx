import DownloadImg from "../../assets/icon-downloads.png";
import RatingImg from "../../assets/icon-ratings.png";

const InstalledCard = ({ card, handleUninstall }) => {

  return (
    <div className="max-w-[1200px] mx-auto mt-4">
      <div className="bg-white p-3 rounded-[4px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <img className="w-[80px] h-[80px] rounded-xl" src={card.image} alt="" />
            <div>
                <h1 className="font-medium text-[20px]">{card.title}</h1>
                <div className="flex items-center justify-center mt-2 gap-4">
                    <div className="flex items-center justify-center gap-1">
                        <img className="h-[16px] w-[16px]" src={DownloadImg} alt="" />
                        <h1 className="text-[#00d390]">{card.downloads}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <img className="h-[16px] w-[16px]" src={RatingImg} alt="" />
                        <h1 className="text-[#ff8811]">{card.ratingAvg}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <h1 className="text-[#627382]">{card.size} MB</h1>
                    </div>
                </div>
            </div>
          </div>
          <div>
                <button onClick={()=>handleUninstall(card.id)} className="btn btn-success text-white px-6 py-3">Uninstall</button>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
