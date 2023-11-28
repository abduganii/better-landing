'use client'
import React, { useRef } from 'react'
import Aboutus from '@/components/Aboutus'
import Contactus from '@/components/Contactus'
import Footer from '@/components/Footer'
import GlobalProblems from '@/components/GlobalProblems'
import MeetOurTeam from '@/components/MeetOurTeam'
import Navbar from '@/components/Navbar'
import OurProducts from '@/components/OurProducts'
import OurProjects from '@/components/OurProjects'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Homepage({ data, lng }) {

    return (
        <div >
            <div className="container">
                <Navbar lng={lng} />
                <GlobalProblems lng={lng} data={data?.data?.home} />
                <OurProducts lng={lng} data={data?.data?.our_product} />
            </div>
            <div className="bg-our">
                <OurProjects lng={lng} data={data?.data?.our_project} />
            </div>
            <div className="container">
                <Aboutus lng={lng} data={data?.data?.about_us} />
                <MeetOurTeam lng={lng} data={data?.data?.team} />
                <div className="bg-our">
                    <Contactus lng={lng} />
                </div>
            </div>
            <div className="bg-our">
                <Footer lng={lng} />
            </div>
        </div>
    )
}
