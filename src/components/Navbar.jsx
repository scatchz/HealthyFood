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

      <div className="w-full px-[5%] bg-[#FAF6F2] py-[25px] flex justify-between items-center">
        <a href="/Main">
          <img className="h-[44px]" src="/img/image.png" alt="" />
        </a>
        <div>
          <ul className="flex gap-8 ">
            <a href="#">
              <li className=" transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 underline-offset-2 font-medium text-[18px] leading-[100%] tracking-[0px] text-[#493E3E]">
                Подбор рациона
              </li>
            </a>
            <a href="#">
              <li className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 font-medium text-[18px] leading-[100%] tracking-[0px] text-[#493E3E]">
                Программы питания
              </li>
            </a>
            <a href="#">
              <li className="htransition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 font-medium text-[18px] leading-[100%] tracking-[0px] text-[#493E3E]">
                О нас
              </li>
            </a>
            <a href="#">
              <li className="htransition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 font-medium text-[18px] leading-[100%] tracking-[0px] text-[#493E3E]">
                Доставка
              </li>
            </a>
            <a href="#">
              <li className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 font-medium text-[18px] leading-[100%] tracking-[0px] text-[#493E3E]">
                Акции
              </li>
            </a>
            <a href="#">
              <li className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 font-medium text-[18px] leading-[100%] tracking-[0px] text-[#493E3E]">
                FAQ
              </li>
            </a>
            <a href="#">
              <li className="transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80 font-medium text-[18px] leading-[100%] tracking-[0px] text-[#493E3E]">
                Отзывы
              </li>
            </a>
          </ul>
        </div>

        <div className="flex flex-col items-end gap-2">
          modal
          <div>
            <h1 className="text-[#493E3E] font-bold text-[24px] leading-[100%] tracking-[0px] text-right">+7 988 500-1-700</h1>
            <p className="text-[#756D6D] font-medium text-[12px] leading-[100%] tracking-[0px] text-right">
              c 09:00 до 21:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
