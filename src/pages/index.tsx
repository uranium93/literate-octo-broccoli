/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
// import styles from './Home.module.css'
import Container from 'src/components/Container';

import CopyRight from 'src/components/Copyright';
import axios from 'axios';

// const elements = [
//     {
//         label: '→ Meetings Waste More Time Than Ever',
//         description:
//             "Pointless meetings will cost U.S. companies a whopping $399 billion in 2019. It's time to fix that.",
//         onClick: () => {
//             console.log('Meetings Waste More Time Than Ever clicked');
//         },
//     },
//     {
//         label: '→ Make your meetings better and more efficient',
//         description:
//             'Set clear objectives for your meeting and have a clear agenda, then gather feedback from your co-workers. ',
//         onClick: () => {
//             console.log('Make your meetings better and more efficient clicked');
//         },
//     },
//     {
//         label: '→ Poorly organized meetings affect your organisation',
//         description:
//             'Consequences for employees include: no time to do real work, unclear actions lead to confusion, loss of focus on the project',
//         onClick: () => {
//             console.log('Poorly organized meetings affect your organisation clicked');
//         },
//     },
// ];

// const addOnStepsGuide = [
//     {
//         label: '1. Install Google Add-on ',
//         description: 'Click to install add-on, and allow our software to access your calendar.',
//         symbol: <Button type="outlined" label="View installation guide →" onClick={() => console.log('clicked')} />,
//     },
//     {
//         label: '2. Gather feedback',
//         description: 'After each meeting we will send automatic feedback survey to each participant.',
//         symbol: <Button type="outlined" label="View example feedback form →" onClick={() => console.log('clicked')} />,
//     },
//     {
//         label: '3. Improve your meetings',
//         description: 'Look at co-workers feedback and make your future meetings better. ',
//         symbol: <Button type="outlined" label="View dashboard example →" onClick={() => console.log('clicked')} />,
//     },
// ];
const Home = (): JSX.Element => {
    const [loginUrl, setLoginUrl] = useState('#');
    // useEffect(
    //     () => {
    //     const getLoginUrl = async () => {
    //         try {
    //             const { url } = await (await axios.get('api/google/loginCalendarScope')).data;

    //             setLoginUrl(decodeURIComponent(url));
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getLoginUrl();
    // }, []);
    return (
        <>
            <Container>hi</Container>

            <Container>
                <CopyRight />
            </Container>
        </>
    );
};
export default Home;
