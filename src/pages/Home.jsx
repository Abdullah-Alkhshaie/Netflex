import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requsits from "../Requsit";

function Home() {
  return (
    <div>
      <Main />
      <Row rowId="1" title="UpComing" apiData={requsits.requsitUpcoming} />
      <Row rowId="2" title="Popular" apiData={requsits.requsitPopular} />
      <Row rowId="3" title="TopRated" apiData={requsits.requsitTopRated} />
      {/* <Row rowId='4' title="Trending" apiData={requsits.requsitTrending} /> */}
      <Row rowId="5" title="Tv Show" apiData={requsits.requsitTv} />
    </div>
  );
}

export default Home;
