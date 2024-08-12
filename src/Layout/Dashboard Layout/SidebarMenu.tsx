import { Layout, Menu } from "antd";
const { Sider } = Layout;
import generateRoutesNavLinks from "../../utils/generateRoutesNavLinks";
import { adminPath } from "../../routes/route.admin";
const SidebarMenu = () => {




  const userRole = {
    ADMIN: "admin",
   
  };
  const role = "admin" as string;

  let sidebarItems;

  switch (role) {
    case userRole?.ADMIN:
      sidebarItems = generateRoutesNavLinks(adminPath, "admin");
      break;
    default:
      break;
  }




  return (
    <Sider
    className="h-screen overflow-y-scroll"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SidebarMenu;
