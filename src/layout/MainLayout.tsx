import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";

const { Sider, Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical tw-flex tw-justify-center tw-items-center"
          style={{ height: 64 }}>
          <img src="./img/logo.png" className="tw-w-[136px]" alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <img src="./menu_icon/file.svg" alt="" />,
              label: "Overview",
            },
            {
              key: "2",
              icon: <img src="./menu_icon/money.svg" alt="" />,
              label: "Sales",
              children: [
                {
                  key: "21",
                  label: "POS",
                },
                {
                  key: "22",
                  label: "Total Sales",
                },
              ],
            },
            {
              key: "3",
              icon: <img src="./menu_icon/speech-bubble.svg" alt="" />,
              label: "Contact",
            },
            {
              key: "4",
              icon: <img src="./menu_icon/note.svg" alt="" />,
              label: "Sales orders",
              children: [
                {
                  key: "41",
                  label: "List of sales orders",
                },
                {
                  key: "42",
                  label: "Delivery orders",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header>
          <div className="tw-flex tw-items-center tw-justify-between">
            <Button
              type="text"
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginLeft: -32,
              }}>
              <img src="./img/bar.svg" alt="" />
            </Button>

            <div className="tw-flex tw-gap-6 tw-items-center">
              <img
                src="./img/vietnam.png"
                className="tw-w-[32px] tw-h-[30px]"
                alt=""
              />
              <img src="./img/alarm.svg" className="tw-w-[34px]" alt="" />
              <img src="./img/user.png" className="tw-w-[36px]" alt="" />
            </div>
          </div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
