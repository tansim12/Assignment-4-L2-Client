import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationAdd } from "react-icons/md";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-between items-center p-3 px-5 md:px-10 gap-5">
      {/* should be use role dynamic  */}
      <div className="text-4xl font-serif font-bold text-secondary  ">Welcome to Admin</div>

      {/* notification and profile div  */}
      <div className="flex items-center justify-center gap-12">
        <div>
          <MdOutlineNotificationAdd size={40} />
        </div>
        <div>
          <CgProfile size={40} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
