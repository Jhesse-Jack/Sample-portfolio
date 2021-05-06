//index.js
// import React from "react"
// import FirstPart from "../components/firstpart"
// import SecondPart from "../components/secondpart"
// import ThirdPart from "../components/thirdpart"
// import FourthPart from "../components/fourthpart"
// import FifthPart from "../components/fifthpart"
// import SixthPart from "../components/sixthpart"
// import SeventhPart from "../components/seventhpart"
// import EighthPart from "../components/eighthpart"
// import "../App.scss"
// import SEO from "../components/seo"
// import Nav from "../components/nav"

// const IndexPage = () => (
//   <div>
//     <SEO title="James" />
//     {/* <Nav /> */}
//     <FirstPart />
//     <SecondPart />
//     <ThirdPart />
//     <FourthPart />
//     <FifthPart />
//     <SixthPart />
//     <SeventhPart />
//     <EighthPart />
//   </div>
// )

// export default IndexPage

import React from 'react';
import StartPage from '../components/landingpage.js';
import SEO from '../components/seo';

const IndexPage = () => (
  <div>
    <SEO title="Home "/>
    <StartPage />
  </div>
)

export default IndexPage;