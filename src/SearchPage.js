import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />

      <a
        className="searchPage__link"
        href="https://www.youtube.com/user/YTIndia"
      >
        <ChannelRow
          image="https://yt3.ggpht.com/ytc/AAUvwngbI5HKDOfbQ7SRVS4TuV-igWWTQ5i3kFsj0N3722E=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="YouTube India Spotlight"
          verified
          subs="27.2 lakh"
          noOfVideos={88}
          description="The Best of YouTube - refreshed daily. Welcome to YouTube India's Spotlight channel, your daily go-to for discovering what's new ..."
        />
      </a>
      <hr />

      <a
        href="https://www.youtube.com/watch?v=NuFmh3jnLyc"
        className="searchPage__link"
      >
        <VideoRow
          views="87K"
          description="Zakir Khan and Kabita Singh (of Kabita's Kitchen) are all set to serve you a dish of comedy. To catch the fun, tune in to YouTube ..."
          timestamp="2 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Zakir Khan and Kabita Singh cook some plans | Hello 2021 India - YouTube NYE Celebration"
          image="http://i3.ytimg.com/vi/ru3MBFhaQf4/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=Mr3bwLCoNqg"
        className="searchPage__link"
      >
        <VideoRow
          views="14K"
          description="2020 was an emotional journey, but we thank the ones who help us made it through. Take a look at what trended this year."
          timestamp="2 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="What trended in 2020 | Hello 2021 India - YouTube NYE Celebration"
          image="http://i3.ytimg.com/vi/Mr3bwLCoNqg/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=wofCD9temC4"
        className="searchPage__link"
      >
        <VideoRow
          views="59K"
          description="Zakir Khan meets the queen of Indian matchmaking, Sima Taparia. What are his plans? To find out, tune in to YouTube Originals ..."
          timestamp="2 months ago"
          title="Zakir Khan and Sima Taparia explore matchmaking | Hello 2021 India - YouTube NYE Celebration"
          image="http://i3.ytimg.com/vi/wofCD9temC4/maxresdefault.jpg"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=3XDv99hzzN4"
        className="searchPage__link"
      >
        <VideoRow
          views="17K"
          description="Zakir rings in the new year and preps you for all the exclusive performances! Tune in to YouTube Originals Hello 2021 on ..."
          timestamp="2 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Zakir Khan on how he can’t wait for 2021 | Hello 2021 India - YouTube NYE Celebration"
          image="http://i3.ytimg.com/vi/3XDv99hzzN4/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=-ERAsc9ZpxY"
        className="searchPage__link"
      >
        <VideoRow
          views="17k"
          description="'Sakht Launda' meets Babita Iyer. Can it get more fun than this? Watch Zakir Khan catch up with Munmun Dutta. Tune in to ..."
          timestamp="2 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Zakir Khan and Munmun Dutta double the comedy | Hello 2021 India - YouTube NYE Celebration"
          image="http://i3.ytimg.com/vi/-ERAsc9ZpxY/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=CUbnUi1pHbQ"
        className="searchPage__link"
      >
        <VideoRow
          views="1 lakh"
          description="Zakir Khan looks back on 2020 and makes hilarious observations. Watch him roast the year that was. Tune in to YouTube ..."
          timestamp="2 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Zakir Khan roasts 2020 | Hello 2021 India - YouTube NYE Celebration"
          image="http://i3.ytimg.com/vi/CUbnUi1pHbQ/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=mYlMhu6luJg"
        className="searchPage__link"
      >
        <VideoRow
          views="1.1 crore"
          description="When 2020 left us with questions, you came to YouTube to help us find answers. And, because of you, we did. We learned how to ..."
          timestamp="3 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Find a way through 2020 | #WithMe"
          image="http://i3.ytimg.com/vi/mYlMhu6luJg/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=-srLOuzTztQ"
        className="searchPage__link"
      >
        <VideoRow
          views="23K"
          description="In the mood for a virtual Diwali visit? Or an e-meet and greet with your fav creators? C'mon in, grab some mithai and oh! mind the ..."
          timestamp="3 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Knock Knock Diwali | Celebrate Diwali #WithMe"
          image="http://i3.ytimg.com/vi/-srLOuzTztQ/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=PSZSUmNyfpk"
        className="searchPage__link"
      >
        <VideoRow
          views="27K"
          description="3 giant plates of mithai. One mission. Which creator will be able to eat the most in 90 seconds? Celebrate Diwali #WithMe."
          timestamp="4 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="MithaI Mukbang ft. MostlySane & Funcho | Celebrate Diwali #WithMe"
          image="http://i3.ytimg.com/vi/PSZSUmNyfpk/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=92TGRP3FSWs"
        className="searchPage__link"
      >
        <VideoRow
          views="53K"
          description="You aren't the only one finding yourself with a bunch of tangled fairy lights, this festive season. Watch as Viwa Food World, Slayy ..."
          timestamp="4 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Diwalympics: Untangle The Lights ft. Viwa Food World, Slayy Point and Team Naach"
          image="http://i3.ytimg.com/vi/92TGRP3FSWs/maxresdefault.jpg"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=LbM42BT0G8s"
        className="searchPage__link"
      >
        <VideoRow
          views="4.9 crore"
          description="There's a video for any & every Diwali need! So put on your most festive look & celebrate your at-home Diwali #WithMe​"
          timestamp="4 months ago"
          subs="27.2 lakh"
          channel="YouTube India Spotlight"
          title="Celebrate Diwali #WithMe"
          image="http://i3.ytimg.com/vi/LbM42BT0G8s/maxresdefault.jpg"
        />
      </a>
    </div>
  );
}

export default SearchPage;
