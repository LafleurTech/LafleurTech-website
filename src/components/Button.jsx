/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById("about"); // Find the section with ID "counter"

        if (target && id) {
          const offset = window.innerHeight * 0.15; 

          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} relative z-20 cursor-pointer group`} // Add base + extra class names
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white-50/20 via-blue-50/10 to-white-50/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700"></div>
      
      <div className="px-2 py-4 rounded-xl bg-gradient-to-br from-black-200 via-black-100 to-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden border border-white-50/30 group-hover:border-white-50/60 shadow-[0_4px_20px_rgba(217,236,255,0.1)] group-hover:shadow-[0_8px_30px_rgba(217,236,255,0.3)] transition-all duration-500">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white-50/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>
        </div>
        
        <div className="absolute -right-10 origin-center top-1/2 -translate-y-1/2 
        w-[120%] h-[120%] group-hover:size-10 group-hover:right-10
        rounded-full bg-white-50 transition-all duration-500" />
        
        <p className="uppercase md:text-lg text-black transition-all duration-500
        group-hover:text-white-50 group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 font-medium tracking-wider group-hover:drop-shadow-sm">{text}</p>
        
        <div className="group-hover:bg-white-50 size-10 rounded-full absolute right-10 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden bg-white-50/15 border border-white-50/40 group-hover:border-black/20 group-hover:shadow-lg transition-all duration-500">
          <img src="/images/arrow-down.svg" alt="arrow" className="w-4 h-4 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
        </div>
        
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-white-50/5 group-hover:animate-pulse"></div>
      </div>
    </a>
  );
};

export default Button;