import { Helmet } from "react-helmet-async";

export const PageTitle = ({ pagetitle }) => {
  return (
    <Helmet>
      <title>{`Sun movie | ${pagetitle}`}</title>
    </Helmet>
  );
};
