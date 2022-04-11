import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import sanityClient from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import moment from "moment";
import Gif from "./gif";

// const serializers = {
//   types: {
//     code: (props) => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//       </pre>
//     ),
//   },
// };

const NewsDetail = () => {
  const [show, setShow] = useState(true);
  const [news, setNews] = useState();
  const { slug } = useParams();
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
      <div className="flex justify-end ">
        <Link to="/">
          <button class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center  bg-gradient-to-tr from-buttonColor1 to-buttonColor2">
            <span class="relative text-sm text-white">Буцах</span>
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
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto">
        {/* <div>asdjlkfsasdf asdf asdjlkfs asdjlkfsasdf</div>
      <div>asdjlkfsasdf asdf asdjlkfs asdjlkfsasdf</div> */}
        <div className="text-white text-[36px]">{news.title}</div>
        <div className="text-[#828282]">{moment(news.date).format("L")}</div>
        {/* <img className="w-[913px] h-[480px]" src={news.mainImage.asset.url} /> */}
        <div className="text-white px-36 mx-36 ">
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
  );
};

export default withRouter(NewsDetail);
