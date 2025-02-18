import CustomCursor from "./CustomCursor";
/* eslint-disable @typescript-eslint/no-explicit-any */
type CursorProps = {
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
};

const InitCustomCursor: React.FC<CursorProps> = ({
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
}) => {
  return (
    <CustomCursor
      onTitleMouseEnter={handleMouseEnterTitle}
      onTitleMouseLeave={handleMouseLeaveTitle}
    />
  );
};

export default InitCustomCursor;
