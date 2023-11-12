import { Col, Row } from "antd";
import React from "react";
import "./header.scss";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

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
                <a style={{color:'black'}} onClick={(e) => e.preventDefault()}>
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
                <a style={{color:'black'}} onClick={(e) => e.preventDefault()}>
                  <Space>
                    TUR
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Col>
            <Col span={2}>VİLLA</Col>
            <Col span={2}>UÇAK</Col>
            <Col span={5}>ERKEN REZERVASYON</Col>
            <Col span={2}><a><img src="ets-plus.svg"/></a></Col>
          </Row>
        </Col>
        <Col style={{ background: "blue" }} span={9}>
          aa
        </Col>
      </Row>
    </div>
  );
};

export default Header;
