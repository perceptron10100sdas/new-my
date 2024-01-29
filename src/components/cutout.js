import Image from "next/image";

const Example = () => {
    return (
      <div>
       
        <CutoutTextLoader
          height="450px"
          background="pink"
          // NOTE: Using GIFs for the background looks super cool :)
          imgUrl="/estate.png"
          heading="BlushhavenHom"
        />
         
      </div>
    );
  };
  export const Ex = () => {
    return (
      <div>
       
        <CutoutTextLoader
          height="450px"
          background="white"
          // NOTE: Using GIFs for the background looks super cool :)
          imgUrl="/blip.png"
          heading="Blip"
          
        />
         
      </div>
    );
  };
  export const Google = () => {
    return (
      <div>
       
        <CutoutTextLoader
          height="450px"
          background="black"
          // NOTE: Using GIFs for the background looks super cool :)
          imgUrl="/googleclone.jpeg"
          heading="Google"
          
        />
         
      </div>
    );
  };
  export const Starbucks = () => {
    return (
      <div>
       
        <CutoutTextLoader
          height="450px"
          background="black"
          // NOTE: Using GIFs for the background looks super cool :)
          imgUrl="/starbucksclone.png"
          heading="Starbucks"
          
        />
         
      </div>
    );
  };
  export const Imdb = () => {
    return (
      <div>
       
        <CutoutTextLoader
          height="450px"
          background="orange"
          // NOTE: Using GIFs for the background looks super cool :)
          imgUrl="/imdbclone.png"
          heading="IMdb"
          
        />
         
      </div>
    );
  };
  
  const CutoutTextLoader = ({
    height,
    background,
    imgUrl,
    heading
  }) => {
    return (
      <div className="relative" style={{ height }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
       
        <div
          style={{ background }}
          className="absolute inset-0 animate-pulse z-10"
         
        />
        <span
          className="font-semibold absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            fontSize: "clamp(3rem, 12vw, 10rem)",
            lineHeight: height,
          }}
        >
          {heading}
        </span>
        
        
      </div>
    );
  };
  
  export default Example;

  