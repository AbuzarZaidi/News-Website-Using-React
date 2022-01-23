import React from "react";
const Headline = () => {
  const topHeadline = [
    {
      author: "Chandelis Duster and Daniella Diaz, CNN",
title: "Sanders says it was 'absolutely' appropriate for Sinema to be censured - CNN",
description: "Vermont Sen. Bernie Sanders said Sunday it was appropriate for the Arizona Democratic Party to censure moderate Sen. Kyrsten Sinema for her vote against a filibuster carve-out for voting rights, a key priority for Democrats.",
url: "https://www.cnn.com/2022/01/23/politics/bernie-sander-kyrsten-sinema-cnntv/index.html",
img: "https://cdn.cnn.com/cnnnext/dam/assets/220123100627-bernie-sanders-sotu-0123-super-tease.jpg",
publishedAt: "2022-01-23T15:58:00Z",
content: "(CNN)Vermont Sen. Bernie Sanders said Sunday it was appropriate for the Arizona Democratic Party to censure moderate Sen. Kyrsten Sinema for her vote against a filibuster carve-out for voting rights,… [+3199 chars]"

    },
    {
      author: "Natasha Bertrand and Devan Cole, CNN",
title: "Blinken says 'a single additional Russian force' entering Ukraine would trigger US response - CNN",
description: "Secretary of State Antony Blinken amplified his warning against a Russian invasion of Ukraine, saying \"a single additional Russian force\" entering Ukraine \"in an aggressive way\" would result in a severe response by the US and its allies.",
url: "https://www.cnn.com/2022/01/23/politics/antony-blinken-russian-troops-ukraine-cnntv/index.html",
img: "https://cdn.cnn.com/cnnnext/dam/assets/220119095650-blinken-kyiv-011922-super-tease.jpg",
publishedAt: "2022-01-23T15:53:00Z",
content: "Washington (CNN)Secretary of State Antony Blinken amplified his warning against a Russian invasion of Ukraine, saying \"a single additional Russian force\" entering Ukraine \"in an aggressive way\" would… [+2842 chars]"

    },
    {
      author: "Greg Joyce",
title: "The Packers problem that could drive Aaron Rodgers out of Green Bay - New York Post ",
description: "If the controversial star quarterback does keep playing, it’s hard to see it happening in Green Bay.",
url: "https://nypost.com/2022/01/23/aaron-rodgers-wants-no-part-of-a-rebuild-as-packers-face-cap-hell/",
img: "https://nypost.com/wp-content/uploads/sites/2/2022/01/newspress-collage-20934766-1642951950784.png?w=1024",
publishedAt: "2022-01-23T15:39:00Z",
content: "Aaron Rodgers’ future is up in the air after Saturday night, both for the Packers and the NFL.\r\nBut if the controversial star quarterback does keep playing, it’s hard to see it happening in Green Bay… [+1908 chars]"
    },
    
  ];
  return (
    <>
      <div className="container">
        <div className="row">
        {topHeadline.map((val) => (
            
            <div class="card m-2"  style={{width: "18rem",borderRadius:"20px"}}>
            <img src={val.img} class="card-img-top" alt="..." style={{borderRadius:"20px"}}/>
            <div class="card-body">
              <a href={val.url}>
              <h2 class="card-title">{val.title}</h2>
              </a>
            </div>
            
          </div>
          
          ))}
        </div>
      </div>
    </>
  );
};

export default Headline;
