import React from "react";

interface OverviewWrapProps {
  data: {
    text: string;
    image: string;
    isWarning: boolean;
    value: number;
  }[];
}

const OverviewWrap = ({ data }: OverviewWrapProps) => {
  return (
    <div className="overview-class tw-pt-[14px] tw-pb-[22px]  tw-px-8 tw-bg-white tw-rounded-[5px]">
      <h3 className="tw-font-bold tw-text-[#262626] tw-border-b tw-border-b-solid tw-border-b-[#BBBCBD] tw-pb-2">
        Overview
      </h3>
      <div className="info-list ">
        {data.map((item, index) => (
          <div
            key={index}
            className="tw-flex tw-items-center tw-py-3 tw-border-b tw-border-b-solid tw-border-b-[#647979] tw-pr-[14px]">
            <div className="tw-w-[22px] tw-h-[22px] tw-bg-[#2463EA] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mr-3">
              <img
                src={item.image}
                alt=" "
                style={{
                  width: index === 4 ? "10px" : "14px",
                  height: index === 4 ? "10px" : "14px",
                }}
              />
            </div>

            <div className="tw-mr-10">{item.text}</div>

            {item.isWarning ? <img src="./img/clarity_error.svg" alt="" /> : ""}

            <div className="tw-float-right tw-ml-auto tw-text-[#2463EA] tw-font-semibold">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewWrap;
