"use client";

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("Explore button clicked")}
    >
      <a href="#events">
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={24}
          height={24}
          className="inline-block ml-2 animate-bounce"
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
