import React from "react";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd";

const { Header, Content, Footer } = Layout;

// Sample menu items
const items = Array.from({ length: 5 }).map((_, index) => ({
    key: index + 1,
    label: `Nav ${index + 1}`,
}));

const App: React.FC = () => {
    // ✅ Move theme.useToken() inside the component
    const { token } = theme.useToken();

    return (
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <Layout>
                {/* Header */}
                <Header style={{ display: "flex", alignItems: "center" }}>
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </Header>

                {/* Content */}
                <Content style={{ padding: "0 48px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            background: token.colorBgContainer,
                            minHeight: 280,
                            padding: 24,
                            borderRadius: token.borderRadiusLG,
                        }}
                    >
                        Content
                    </div>
                </Content>

                {/* Footer */}
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
