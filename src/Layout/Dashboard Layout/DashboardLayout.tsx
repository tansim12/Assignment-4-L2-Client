import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <SidebarMenu />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content >
          <div
          className="overflow-y-scroll h-screen "
            style={{
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
