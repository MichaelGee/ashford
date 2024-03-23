const PageWrapper = ({children}) => {
  return (
    <div className="px-[1rem] pt-[6rem] pb-[2rem] overflow-scroll">
      {children}
    </div>
  );
};

export default PageWrapper;
