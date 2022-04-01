import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import sanityClient from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
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
      <div className="flex justify-end">
        <Link to="/">
          <button className="text-white mt-3 mr-6 bg-emerald-400 px-5 rounded-xl">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto">
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
            // serializers={serializers}
            imageOptions={{ h: 900, fit: "max" }}
            projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
            dataset={process.env.REACT_APP_SANITY_DATASET}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(NewsDetail);
