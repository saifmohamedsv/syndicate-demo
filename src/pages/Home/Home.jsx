import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import { Button, Col, Row, Statistic } from "antd";

const Home = () => {
  return (
    <Box>
      {/* <Navbar Outlet={Outlet} /> */}
      <Row style={{ padding: "24px" }} gutter={16}>
        <Col span={12}>
          <Statistic title="مستخدمين فعالين" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic
            title="ميزانيه (USD)"
            value={112893}
          />
          <Button
            style={{
              marginTop: 16,
            }}
            type="primary"
          >
            Recharge
          </Button>
        </Col>
        <Col span={12}>
          <Statistic title="طلبات تصالح" value={162376123} />
        </Col>
      </Row>
    </Box>
  );
};

export default Home;
