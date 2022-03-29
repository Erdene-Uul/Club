import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
const NewsDetail = () => {
  const [news, setNews] = useState("");
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body
    }`,
        { slug }
      )
      .then((data) => {
        setNews(data[0]);
      });
  }, [slug]);

  return (
    <div className="bg-[#1C1C28] w-full h-screen">
      <div className="flex justify-end">
        <Link to="/">
          <button className="text-white mt-3 mr-6 bg-emerald-400 px-5 rounded-xl">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center ">
        {/* <div>asdjlkfsasdf asdf asdjlkfs asdjlkfsasdf</div>
      <div>asdjlkfsasdf asdf asdjlkfs asdjlkfsasdf</div> */}
        <div className="text-white text-[36px]">{news.title}</div>
        {/* <div className="text-[#828282]">
        {this.state.news.createdAt.substring(0, 10)}
      </div> */}
        {/* <img className="w-[913px] h-[480px]" src={news.mainImage.asset.url} /> */}
        <div className="text-white px-36 mx-36 ">
          <BlockContent
            blocks={news.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(NewsDetail);
