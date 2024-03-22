const PageWrapper = ({children}) => {
  return (
    <div className="px-[2rem] pt-[8rem] pb-[2rem] overflow-scroll">
      {children}
    </div>
  );
};

export default PageWrapper;
