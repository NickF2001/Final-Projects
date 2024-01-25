import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3 bg-light border-light job radius shadow"
  >
    <Col className='job-name'>
      <i className="fa-solid fa-briefcase me-3 text-secondary"></i>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>

    <Col className='job-company'>
      <i className="fa-solid fa-building me-3 text-secondary"></i>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
  </Row>
);

export default Job;


