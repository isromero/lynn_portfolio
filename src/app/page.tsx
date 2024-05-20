"use client";

import HeaderNav from "@/components/HeaderNav/HeaderNav";

const Home = () => {
  
  return (
    <div className="flex flex-col items-center min-h-screen">
      <video autoPlay muted loop className="background-video">
        <source src="/home_video.webm" type="video/webm" />
      </video>
      <HeaderNav />
    </div>
  );
}

export default Home;
