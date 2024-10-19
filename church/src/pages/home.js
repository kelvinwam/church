import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Icon from '@mui/material/Icon';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

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
            {/* pastors' section */}
            <div className='pastors'>
                <h1 className='h1'>Our Pastors</h1>
                <div className="pastors-cards">
                    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
                        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                            <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                            <Chip
                                size="sm"
                                variant="soft"
                                color="primary"
                                sx={{
                                    mt: -1,
                                    mb: 1,
                                    border: '3px solid',
                                    borderColor: 'background.surface',
                                }}
                            >
                                Pastor in Charge
                            </Chip>
                            <Typography level="title-lg">Rev. John Musili</Typography>
                            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                                Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    mt: 2,
                                    '& > button': { borderRadius: '2rem' },
                                }}
                            >
                                <a href='tel:+254780966228'><Icon title='Call' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><CallIcon href='tel:+254780966228' /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Sms' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><SmsIcon /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Whatsapp' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><WhatsAppIcon /></Icon></a>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
                        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                            <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                            <Chip
                                size="sm"
                                variant="soft"
                                color="primary"
                                sx={{
                                    mt: -1,
                                    mb: 1,
                                    border: '3px solid',
                                    borderColor: 'background.surface',
                                }}
                            >
                                Reverend
                            </Chip>
                            <Typography level="title-lg">Mr. Katonny</Typography>
                            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                                Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    mt: 2,
                                    '& > button': { borderRadius: '2rem' },
                                }}
                            >
                                <a href='tel:+254780966228'><Icon title='Call' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><CallIcon href='tel:+254780966228' /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Sms' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><SmsIcon /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Whatsapp' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><WhatsAppIcon /></Icon></a>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
                        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                            <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                            <Chip
                                size="sm"
                                variant="soft"
                                color="primary"
                                sx={{
                                    mt: -1,
                                    mb: 1,
                                    border: '3px solid',
                                    borderColor: 'background.surface',
                                }}
                            >
                                Pastor
                            </Chip>
                            <Typography level="title-lg">Mrs. Lumumba</Typography>
                            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                                Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    mt: 2,
                                    '& > button': { borderRadius: '2rem' },
                                }}
                            >
                                <a href='tel:+254780966228'><Icon title='Call' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><CallIcon href='tel:+254780966228' /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Sms' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><SmsIcon /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Whatsapp' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><WhatsAppIcon /></Icon></a>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
                        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                            <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                            <Chip
                                size="sm"
                                variant="soft"
                                color="primary"
                                sx={{
                                    mt: -1,
                                    mb: 1,
                                    border: '3px solid',
                                    borderColor: 'background.surface',
                                }}
                            >
                                Pastor
                            </Chip>
                            <Typography level="title-lg">Mrs. Betty Mbithi</Typography>
                            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                                Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code.
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    mt: 2,
                                    '& > button': { borderRadius: '2rem' },
                                }}
                            >
                                <a href='tel:+254780966228'><Icon title='Call' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><CallIcon href='tel:+254780966228' /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Sms' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><SmsIcon /></Icon></a>
                                <a href='https://wa.me/+254780966228'><Icon title='Whatsapp' sx={{
                                    height: 50, cursor: 'pointer'
                                }}><WhatsAppIcon /></Icon></a>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/* groups section */}
            <div className='groups'>
                
            </div>
        </div>
    );
};

export default Home;
