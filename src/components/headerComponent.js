function HeaderComponent({ subTitle, Img, createtitle }) {
  return (
    <div className="sm:mt-18 mb-10 text-center ">
      {subTitle != "" && createtitle == "" && (
        <>
          <h1 className="w-400">
            Imagine if <span className="text-gradient">Snapchat</span> had
            events.
          </h1>

          <p className="w-500">{subTitle}</p>
        </>
      )}

      {createtitle != "" && (
        <>
          <h1 className="w-400">
            Create <span className="text-gradient">event</span>
          </h1>
        </>
      )}

      {Img != "" && (
        <>
          <img src={Img} alt="Landing Image" className="w-400" />;
        </>
      )}
    </div>
  );
}

export default HeaderComponent;
