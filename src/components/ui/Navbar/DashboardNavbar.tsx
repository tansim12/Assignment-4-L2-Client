import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationAdd } from "react-icons/md";

const DashboardNavbar = () => {
  return (
    <div>
      <div>Welcome to Admin</div>

      {/* notification and profile div  */}
      <div>
        {/* notification  */}
        <div>
          <MdOutlineNotificationAdd />
        </div>
        {/* profile  */}
        <div>
          <CgProfile size={28} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
