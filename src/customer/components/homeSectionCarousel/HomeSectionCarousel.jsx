import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function HomeSectionCarousel({ data , sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handleSlideChanged = (e) => {
    setActiveIndex(e.item);
  };

  const items = data.slice(0, 20).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 flex justify-start">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={handleSlideChanged}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(270deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}





//other code----

// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// // import "react-alice-carousel/lib/alice-carousel.css";
// import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
// import { Button } from "@mui/material";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// // import {mens_kurta} from "../../../data/Men/mens_kurta"

// export default function HomeSectionCarousel({data}) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//   };

//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const items = data.slice(0,20).map((item) => (
//     <HomeSectionCard product={item}/>
//   ));
//   return (
//     <div className="px-4 lg:px-8">
//       <div className="relative p-5 ">
//         <AliceCarousel
//           items={items}
//           responsive={responsive}
//           disableButtonsControls
//           disableDotsControls
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />
//         {activeIndex !== items.length - 5 && <Button
//           variant="contained"
//           className="z-50 bg-white"
//           onClick={slideNext}
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             right: "0rem",
//             transform: "translateX(50%) rotate(90deg)",
//             bgcolor: "white",
//           }}
//           aria-label="next"
          
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>}
//         {activeIndex !== 0  && <Button
//           variant="contained"
//           className="z-50 bg-white"
//           onClick={slidePrev}
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             left: "0rem",
//             transform: "translateX(-50%) rotate(-90deg)",
//             bgcolor: "white",
//           }}
//           aria-label="next"
          
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>}
//       </div>
//     </div>
//   );
// }
