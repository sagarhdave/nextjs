import React, { Component } from 'react'
import Link from 'next/link'

import Navbar from './../include/Navbar';
import Head from 'next/head'
import Wrapper from './../components/Wrapper';
import HeaderHeadline from './../components/HeaderHeadline';
import AlumniWorked from './../components/AlumniWorked';
import AlumniContent from './../components/AlumniContent';
import StudentWork from './Home/StudentWork';
import StudentWorkContent from './Home/StudentWorkContent';
import FullPage from './Home/FullPage';
import Highlights from './Home/Highlights';
import SectionName from './../components/SectionName';



class Home extends React.Component {
  render() {
    return (
      <>
      <Head>
          <title>Home Page</title>
      </Head>
      <Navbar />
      <FullPage img={{
          backgroundImage: `url(static/homeBackground.jpg)`,
          backgroundRepeat: `no-repeat`,    
          height: `100%`,
          backgroundSize: `cover`
      }}>
          <Wrapper>
              <HeaderHeadline text={'University of creativity and innovation'} className="homeHeadline" />
          </Wrapper>
      </FullPage>
      
      <Highlights />

      <AlumniWorked>
          <Wrapper>
              <AlumniContent />
          </Wrapper>
      </AlumniWorked>  

      <StudentWork>
        <Wrapper>
            <SectionName name={'Student work'} />
            <div className="student-work-main">
                <StudentWorkContent style={{backgroundImage: `url(/static/test-img.png)`,backgroundRepeat: `no-repeat`,marginRight: '16px'}}  
                title="AlUMNI NAME" course="Bachelor of Arts (Hons) in Landscape Architecture"/>
                <StudentWorkContent style={{backgroundImage: `url(/static/test-img.png)`,backgroundRepeat: `no-repeat`,marginRight: '16px'}}  
                title="AlUMNI NAME" course="Bachelor of Arts (Hons) in Landscape Architecture"/>
                <StudentWorkContent style={{backgroundImage: `url(/static/test-img.png)`,backgroundRepeat: `no-repeat`}}  
                title="AlUMNI NAME" course="Bachelor of Arts (Hons) in Landscape Architecture"/>
            </div>
        </Wrapper>
      </StudentWork>   
   </>
    );
  }
}

export default Home