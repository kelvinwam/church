import React from 'react';
// import { Button, Row, Col } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(service, time) {
    return { service, time };
}

const rows = [
    createData('Sunday School', '07:00am-08:30am'),
    createData('Bible Study', '08:30am-09:15am'),
    createData('English Service', '09:00am-11:00am'),
    createData('Kikamba Service', '11:00am-01:00pm'),
];


const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner">
                <div className="banner-text">
                    <h1>GALATIANS 6:9</h1>
                    <p>Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.</p>
                    {/* <h3>
                        Subscribe to our Newsletter
                    </h3>
                    <Form inline>
                        <Row>
                            <Col xs='center'>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className=" mr-sm-2 " required />
                            </Col>
                            <br /><br />
                            <Col xs='center'>
                                <Button type="submit">Subscribe</Button></Col>
                        </Row>
                    </Form> */}
                </div>
            </div>
            {/* services timetable */}
            <div className='services'>
                <h1>Join us every Sunday</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Service</TableCell>
                                <TableCell align="center">Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.service}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.service}
                                    </TableCell>
                                    <TableCell align="center">{row.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* maps directions */}
            <div>
                <iframe title='Location' width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=AIC%20kithaayoni+(AIC%20Be)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
            </div>
            <div className='pastors'>
                <h1>Pastors</h1>
            </div>
        </div>
    );
};

export default Home;
