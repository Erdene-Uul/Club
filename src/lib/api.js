import sanityClient from "./sanity";

export const getAllNews = async () => {
  const news = await sanityClient.fetch(`*[_type == "post"]{
    title,
    slug,
    date,
    mainImage{
      asset->{
        url
      }
    }
  }`);
  return news;
};

export const getNewsBySlug = async (slug) => {
  const news = await sanityClient.fetch(
    `*[_type == "post" && slug == slug.current]{
      title,
      slug,
      date,
      mainImage{
        asset->{
          url
        }
      }
    }`
  );
  return news;
};
