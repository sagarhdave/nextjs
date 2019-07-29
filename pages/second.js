import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Wrapper from './../components/Wrapper';
import HeaderHeadline from './../components/HeaderHeadline';
import AlumniWorked from './../components/AlumniWorked';
import AlumniContent from './../components/AlumniContent';

class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Second</title>
        </Head>
        <AlumniWorked>
          <Wrapper>
              <AlumniContent />
          </Wrapper>
      </AlumniWorked>   
        <h1>second</h1>
        <Link href="index">
            <a>go to home</a>
        </Link>
      </>
    );
  }
}

export default Home
