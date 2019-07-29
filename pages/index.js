import React, { Component } from 'react'
import Link from 'next/link'

import Navbar from './../include/Navbar';
import Head from 'next/head'
import Wrapper from './../components/Wrapper';
import HeaderHeadline from './../components/HeaderHeadline';
import AlumniWorked from './../components/AlumniWorked';
import AlumniContent from './../components/AlumniContent';

import CourseCard from './../components/CourseCard';
import CourseCardContent from './../components/CourseCardContent';

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

      <CourseCard>
          <Wrapper>
            <SectionName name={'Recommended programmes'} openLink={'See all programmes'} />
            <div className="student-work-main">
               <CourseCardContent style={{marginRight: '16px'}}  
               img="/static/test-img.png" course="Bachelor of Arts (Hons) in" courseName ="Landscape Architecture"/>
                 <CourseCardContent style={{marginRight: '16px'}}  
               img="/static/test-img.png" course="Bachelor of Arts (Hons) in" courseName ="Landscape Architecture"/>
                <CourseCardContent style={{marginRight: '16px'}}  
               img="/static/test-img.png" course="Bachelor of Arts (Hons) in" courseName ="Landscape Architecture"/>
                <CourseCardContent  
               img="/static/test-img.png" course="Bachelor of Arts (Hons) in" courseName ="Landscape Architecture"/>
            </div>
          </Wrapper>
      </CourseCard>

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