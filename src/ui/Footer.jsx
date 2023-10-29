export const Footer = () => {
  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-yellow text-blue-dark text-center leading-[3.5rem] bottom-0  z-40 bg-blue-50 ">
      <span className="text-left mob:text-xs mob:text-center">
        ReactEats <span className="text-red">&#169;</span> 2023
      </span>
      <span className="text-center mob:text-xs">
        Developed By{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://ankittkamal.vercel.app/"
          className="underline"
        >
          Ankit Kamal{" "}
        </a>
      </span>
    </div>
  );
};
