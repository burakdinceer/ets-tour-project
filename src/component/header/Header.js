import { Button, Col, Row } from "antd";
import React from "react";
import "./header.scss";
import { BellOutlined, DownOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
];

const Header = () => {
  return (
    <div className="header-comp">
      <Row>
        <Col span={15}>
          <div className="left-header">
            <Row>
              <Col span={5}>
                <a>
                  <img style={{ width: "200px" }} src="ets-logo.webp" />
                </a>
              </Col>
              <Col span={2}>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a
                    style={{ color: "black" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      OTEL
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
              <Col span={2}>KIBRIS</Col>
              <Col span={2}>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a
                    style={{ color: "black" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      TUR
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
              <Col span={2}>VİLLA</Col>
              <Col span={2}>UÇAK</Col>
              <Col span={4}>ERKEN REZERVASYON</Col>
              <Col span={2}>
                <a>
                  <img src="ets-plus.svg" />
                </a>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={9}>
          <Row>
            <Col span={4}>
              {" "}
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a
                  style={{ color: "black" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    YARDIM
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Col>
            <Col span={4}>ACENTELER</Col>
            <Col span={7}>
              <div className="call">
                <PhoneOutlined />
                <div className="call-text">
                  <span>4441444</span>
                  <span>Sizi Arayalım</span>
                </div>
              </div>
            </Col>

            <Col span={9}>
              <div className="user-login">
                {" "}
                <div>
                  <Button>
                  <UserOutlined />
                  <span>Giriş Yap</span>
                  <BellOutlined />
                  </Button>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
