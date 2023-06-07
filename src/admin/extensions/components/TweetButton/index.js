const React = require ("react");
const { Button } = require ("@strapi/design-system/Button");
const Twitter = require ("@strapi/icons/Twitter");
const { useCMEditViewDataManager } = require ("@strapi/helper-plugin");
const { useIntl } = require ("react-intl");

const TweetButton = () => {
  const { formatMessage } = useIntl();
  const { modifiedData, layout } = useCMEditViewDataManager();
  // const allowedTypes = ["restaurant", "article","offer"];

  // if (!allowedTypes.includes(layout.apiID)) {
  //   return <></>;
  // }

  // const base = layout.apiID == "restaurant" ? "restaurants" : "blog";

  const handleTweet = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${`${encodeURIComponent(
      modifiedData.seo.metaTitle
    )} (powered by Strapi)`}&url=${
      process.env.STRAPI_ADMIN_CLIENT_URL
    }/${modifiedData.slug}`;

    window.open(tweetUrl, "_blank").focus();
  };

  const content = {
    id: "components.TweetButton.button",
    defaultMessage: "Share on Twitter",
  };

  return (
    <Button variant="secondary" startIcon={<Twitter />} onClick={handleTweet}>
      {formatMessage(content)}
    </Button>
  );
};

module.exports = TweetButton;