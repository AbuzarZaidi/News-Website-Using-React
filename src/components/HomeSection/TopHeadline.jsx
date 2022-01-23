import React from 'react';
import SingleTopHeadline from './SingleTopHeadline';
import img4 from '../../images/our_img4.jpg'
import img5 from '../../images/our_img5.jpg'
const TopHeadline = () => {
const topHeadline=[{
  author: "Ryan Harkness",
title: "Ngannou Reacts To Dana White’s Post-UFC 270 Belt Snub - MMA Mania",
description: "After a year of subtle and not so subtle disrespect, UFC president Dana White wasn’t even willing to put the belt on Francis Ngannou after he beat Ciryl Gane.",
url: "https://www.mmamania.com/2022/1/23/22897634/francis-ngannou-reacts-to-dana-whites-post-ufc-270-belt-snub-in-the-end-im-the-boss",
img: "https://cdn.vox-cdn.com/thumbor/b2iJf2peL4cYtCAvfwk0vntiKg4=/0x0:4800x2513/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23188917/1237922830.jpg",
publishedAt: "2022-01-23T15:24:40Z",
content: "UFC 270 ended with an interesting fight between heavyweight champion Francis Ngannou and interim champion Ciryl Gane. After all the drama surrounding the two former teammates and Ngannous issues with… [+4650 chars]"

},{
  author: null,
title: "Italy's Berlusconi hospitalised in Milan since Thursday - source - Reuters",
description: "Former Italian Prime Minister Silvio Berlusconi has been in Milan's San Raffaele hospital since Thursday, a person with knowledge of the matter said on Sunday after the 85-year-old decided against running for president.",
url: "https://www.reuters.com/world/europe/italys-berlusconi-hospitalised-milan-source-2022-01-23/",
img: "https://www.reuters.com/resizer/1uj2EVFc_tVxGBoDiRID-MMYmwA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V6IV7X3BT5LW7C674F7KEUW2FQ.jpg",
publishedAt: "2022-01-23T14:49:00Z",
content: "MILAN, Jan 23 (Reuters) - Former Italian Prime Minister Silvio Berlusconi has been in Milan's San Raffaele hospital since Thursday, a person with knowledge of the matter said on Sunday after the 85-y… [+1296 chars]"
}]
    return (
      <>
      <div className="blog_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Top HeadLine</h2>
                {/* <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page{" "}
                </span> */}
              </div>
            </div>
          </div>
          </div>
      </div>
<div className="container mt-4">
{topHeadline.map((val) => (
              <SingleTopHeadline title={val.title} img={val.img} detail={val.description} url={val.url}/>
            ))}
            </div>
      </>
  )
};

export default TopHeadline;
