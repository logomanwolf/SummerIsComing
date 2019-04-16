import React from "react";
import { Avatar, Row, Col } from "antd";
import Card1 from "./common/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free";
import {
  faMapMarkerAlt,
  faVenusMars,
  faGraduationCap,
  faSchool,
  faChessKnight
} from "@fortawesome/free-solid-svg-icons";
const Portrait = ({ student }) => {
  const { bf_sex, bf_policy, cla_Name, bf_NativePlace, bf_nation } = student;
  console.log(bf_sex);
  return (
    <Card1 style={{ height: 428 }}>
      <div>
        <Row
          type="flex"
          justify="center"
          align="top"
          style={{ fontSize: 22, margin: 21 }}
        >
          <Col>
            <Avatar
              size={128}
              icon="user"
              textAlign="center"
              style={{ margin: "auto", textAlign: "center" }}
            />
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
          align="top"
          style={{ fontSize: 20, margin: 15 }}
        >
          <Col>{bf_sex}</Col>
          <Col>
            <FontAwesomeIcon icon={faVenusMars} />
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
          align="top"
          style={{ fontSize: 20, margin: 15 }}
        >
          <Col>年级</Col>
          <Col>
            <FontAwesomeIcon icon={faGraduationCap} />
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
          align="top"
          style={{ fontSize: 20, margin: 15 }}
        >
          <Col>班级</Col>
          <Col>
            <FontAwesomeIcon icon={faSchool} />
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
          align="top"
          style={{ fontSize: 20, margin: 15 }}
        >
          <Col>住址</Col>
          <Col>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
          align="top"
          style={{ fontSize: 20, margin: 15 }}
        >
          <Col>民族</Col>
          <Col>
            <FontAwesomeIcon icon={faChessKnight} />
          </Col>
        </Row>
      </div>
    </Card1>
  );
};

export default Portrait;
