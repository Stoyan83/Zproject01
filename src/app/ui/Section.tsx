const Section = ({ children, ...props }) => {
    return (
      <div className={`w-full flex items-center justify-center`} {...props}>
        {children}
      </div>
    );
  };

  export default Section;
