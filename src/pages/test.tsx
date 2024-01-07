const Test = () => {
  const env = process.env.NODE_ENV;

  if (env === "production") return null;
  return <div></div>;
};
export default Test;
