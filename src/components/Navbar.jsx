import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Navbar = () => {
  return (
    <div className="fixed flex flex-col w-full">
      <div className="w-full h-[60px] bg-[#A98C64] flex gap-[180px] justify-center items-center">
        <div
          className="flex
        items-center gap-6"
        >
          <img className="h-[30px]" src="/img/image copy 2.png" alt="" />
          <h3
            className="text-2xl font-bold leading-none tracking-normal text-white
          "
          >
            Скидка 20% на первый заказ
          </h3>
        </div>
        <h3 className="text-2xl font-bold leading-none tracking-normal text-white underline underline-offset-4">
          Заказать<i className="fas fa-arrow-right ml-2"></i>
        </h3>
      </div>

      <div className="w-full px-[60px] bg-[#FAF6F2]">
        <a href="/Main"><img src="/img/image.png" alt="" /></a>
      </div>
    </div>
  );
};
