import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import requests from '../utils/requests'
import Header from './components/Header'
import Headeritems from './components/headeritems'
import Nav from './components/Nav'
import Results from './components/Results'
import _ from 'lodash';



export default function Home({results}) {
  


  // console.log(props)
  return (
    
    <div >
      <Head>
        <title>Hulu 2.0</title>

      </Head>
     
      <Header/>
      <Nav/>
      <Results  results={results}/>
      
    

     
    </div>
  )
}
export async function getServerSideProps(context) {
  
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) =>  res.json());
     
   return ({
    props: {
      results:request.results,
      

    },
  });
 
}








