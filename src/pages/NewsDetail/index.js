import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import sanityClient from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import moment from "moment";
import Footer from "../../components/Footer";
import Gif from "./gif";
import "./style.module.css";
import {ShareSocial} from 'react-share-social' 

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const NewsDetail = () => {
  const [show, setShow] = useState(true);
  const [news, setNews] = useState();
  const { slug } = useParams();
  const lol = useParams();
  console.log(lol.slug);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post" && slug.current == $slug]{
      title,
      slug,
      date,
      body
    }`,
        { slug }
      )
      .then((data) => {
        setNews(data[0]);
        setShow(false);
      });
  }, [slug]);

  return show ? (
    <Gif />
  ) : (
    <div className="bg-[#1C1C28] w-full h-full">
      <div className="mb-7">
        <div className="flex justify-end">
          <Link to="/">
            <button class="relative group overflow-hidden px-4 h-10 rounded-full flex space-x-2 items-center  bg-gradient-to-tr from-buttonColor1 to-buttonColor2 my-4 mx-6">
              <span class="relative text-sm text-white ">Буцах</span>
              <div class="flex items-center -space-x-3 translate-x-3">
                <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto sm:px-10 px-4">
          {/* <div>asdjlkfsasdf asdf asdjlkfs asdjlkfsasdf</div>
      <div>asdjlkfsasdf asdf asdjlkfs asdjlkfsasdf</div> */}
          <div className="text-white text-center lg:text-[36px] text-lg">
            {news.title}
          </div>

          <div className="text-[#828282] my-2 sm:text-base text-xs">
            {moment(news.date).format("L")}
          </div>
          {/* <img className="w-[913px] h-[480px]" src={news.mainImage.asset.url} /> */}
          <div className="text-white mx-auto max-w-3xl mt-4 sm:text-base text-sm">
            <BlockContent
              blocks={news.body}
              // serializers={serializers}
              imageOptions={{ w: 1280, h: 420 }}
              projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
              dataset={process.env.REACT_APP_SANITY_DATASET}
            />
          </div>
        </div>
      </div>
      <ShareSocial 
     style={style}
     url ={`https://hureechain.netlify.app/${lol.slug}`}
     socialTypes={['facebook','twitter','reddit','linkedin']}
   />
      <Footer />
    </div>
  );
};

export default withRouter(NewsDetail);
