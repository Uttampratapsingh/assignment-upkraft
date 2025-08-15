import AnimatedCounter from "./AnimatedCounter";

const CircularProgress = ({
  value,
  size = 160,
  strokeWidth = 10,
  color = "hsl(45 93% 47%)",
  backgroundColor = "hsl(45 93% 80%)" // lighter version of main color
}) => {
  const radius = (size - strokeWidth) / 2;
  const halfCircumference = radius * Math.PI;
  const progressLength = (value / 10) * halfCircumference;
  const offset = halfCircumference - progressLength;

  const valueStr = value.toFixed(1);
  const [integerPart, decimalPart] = valueStr.split(".");

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size / 2}>
        {/* Light background arc */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2}
              A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="transparent"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Dark progress arc */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2}
              A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={halfCircumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center text */}
      <div className="absolute bottom-0 text-center translate-y-1/5">
        <div className="text-3xl font-bold">
          <span className="text-[#6a44c8]">{integerPart}</span>
          <span className="text-[#6a44c8]">.{decimalPart}</span>
          <span className="text-gray-500 text-xl">/10</span>
        </div>
      </div>
    </div>
  );
};



const PerformanceChart = () => {
  return (
    <>
      <div className="px-[61px] py-6 bg-white rounded-lg shadow-md backdrop-blur-lg h-[410px]">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold mb-6">
            Overall Course <br /> Performance
          </h3>
          <CircularProgress value={7.6} />
        </div>
        <div className="text-center mt-12">
          <h3 className="text-sm font-semibold mb-6">
            Overall Student <br /> Performance
          </h3>
          <CircularProgress value={6.6} />
        </div>
      </div>
    </>
  );
};

export default PerformanceChart;
