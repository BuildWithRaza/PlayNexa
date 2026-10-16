import React from 'react'
import Navbar from '../components/Other/Navbar'
import Sports from '../components/LandingPageComponents/Sports';
import PlayNexaWorks from '../components/LandingPageComponents/PlayNexaWorks';
import Features from '../components/LandingPageComponents/Features';
import HeroAndStats from '../components/LandingPageComponents/HeroAndStats';
import FeaturedPlayers from '../components/LandingPageComponents/FeaturedPlayers';
import PopularTeams from '../components/LandingPageComponents/PopularTeams';
import UpcomingMatches from '../components/LandingPageComponents/UpcomingMatches';
import FeaturedTournaments from '../components/LandingPageComponents/FeaturedTournaments';
import TrackPerformance from '../components/LandingPageComponents/TrackPerformance';
import TopPlayersLeaderboard from '../components/LandingPageComponents/TopPlayersLeaderboard';
import WhyPlayNexa from '../components/LandingPageComponents/WhyPlayNexa';
import Footer from '../components/Other/Footer';
import FinalCTA from '../components/LandingPageComponents/FinalCTA';
import Leaderboard from './Leaderboard';
import Players from './Players';
import Matches from './Matches';
import Teams from './Teams';


const Landing = () => {
  return (
    <div>
     
    
      <HeroAndStats/>
      <Sports/>
      <PlayNexaWorks/>
      <Features/>
      <Players page={"Landing"}/>
      {/* <PopularTeams/> */}
      <Teams page={"Landing"}/>
      <Matches page={"Landing"}/>
      <FeaturedTournaments/>
      <TrackPerformance/>
      {/* <TopPlayersLeaderboard/> */}
      <Leaderboard page={"Landing"}/>
      <WhyPlayNexa/>
      <FinalCTA/>
      <Footer/>
    </div>
  )
}

export default Landing
