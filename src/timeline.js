import React, { Component } from "react";
import { Typography, Timeline, Icon } from "antd";
const { Title } = Typography;

export default class timeline extends Component {
  render() {
    return (
      <div style={{ textAlign: "left", maxWidth: "100%" }}>
        <br />
        <Title level={3} style={{ color: "black", textAlign: "center" }}>
          My career path
        </Title>
        <br />

        <Timeline mode={window.innerWidth <= "500" ? "" : "alternate"}>
          {/* <Timeline mode="alternate"> */}
          <Timeline.Item
            dot={<Icon type="read" style={{ fontSize: "20px" }} />}
          >
            <p>
              <b>2008 - Completed Schooling</b>
            </p>
            <p>
              from DAV Matriculation Higher Secondary School, Chennai, India
            </p>
            <p>with 91%</p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="read" style={{ fontSize: "20px" }} />}
          >
            <p>
              <b>
                2012 - Completed Bachelor of Engineering in Computer Science
              </b>
            </p>
            <p>from SRR Engineering College, Chennai, India</p>
            <p>with 86%</p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="read" style={{ fontSize: "20px" }} />}
          >
            <p>
              <b>
                2014 - Completed Master of Business Administration (MBA) in
                Finance
              </b>
            </p>
            <p>
              from Bharathidasan Institute of Management (BIM), Trichy, India
            </p>
            <p>with 82%</p>
          </Timeline.Item>
          <Timeline.Item
            color="green"
            dot={<Icon type="laptop" style={{ fontSize: "20px" }} />}
          >
            <p>
              <b>2014 - Started with Web Development</b>
            </p>
            <p>using HTML, CSS and Javascript</p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="bank" style={{ fontSize: "20px" }} />}
          >
            <p>
              <b>2014 to 2015 - Equity Research Associate</b>
            </p>
            <p>at Cognizant Technology Solutions (UBS), Hyderabad, India</p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="bank" style={{ fontSize: "20px" }} />}
          >
            <p>
              <b>2015 to 2016 - Product Control Specialist</b>
            </p>
            <p>at Standard Chartered Global Services, Chennai, India</p>
          </Timeline.Item>
          <Timeline.Item
            dot={
              <Icon type="safety-certificate" style={{ fontSize: "20px" }} />
            }
            color="green"
          >
            <p>
              <b>2016 - Started learning Blockchain</b>
            </p>
            <p>Development, Architecture and various cryptography concepts</p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="bank" style={{ fontSize: "20px" }} />}
          >
            <p>
              <b>2016 to 2017 - Assistant Manager</b>
            </p>
            <p>at Barclays Global Service Center, Chennai, India</p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="star" style={{ fontSize: "20px" }} />}
            color="green"
          >
            <p>
              <b>from 2017 - Started Training career</b>
            </p>
            <p>Blockchain, React JS and other technologies</p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="shop" style={{ fontSize: "20px" }} />}
            color="green"
          >
            <p>
              <b>from 2018 - Co-Founder & CEO</b>
            </p>
            <p>at CelebratON.in, Event Services Aggregator</p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}
