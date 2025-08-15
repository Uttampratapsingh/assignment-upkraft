const CircularProgress = ({
  value,
  size = 160,
  strokeWidth = 10,
  color = "hsl(0 84% 60%)",
  backgroundColor = "hsl(1 10% 80%)"
}) => {
  const radius = (size - strokeWidth) / 2;

  // Full circumference for light background
  const fullCircumference = 2 * Math.PI * radius;

  // Half circumference for dark progress
  const halfCircumference = 2 * Math.PI * radius;
  const progressLength = (value / 10) * halfCircumference;
  const offset = halfCircumference - progressLength;

  const valueStr = value.toFixed(1);
  const [integerPart, decimalPart] = valueStr.split(".");

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        {/* Light full-circle background */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />

        {/* Dark half-circle progress */}
        <path
          d={`
            M ${strokeWidth / 2} ${size / 2}
            A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
          `}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={halfCircumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute text-center">
        <div className="text-3xl font-bold">
          <span className="text-[#6a44c8]">{integerPart}</span>
          <span className="text-[#6a44c8]">{decimalPart}</span>
        </div>
        <div className="text-sm text-gray-300">Feedback <br /> Pending</div>
      </div>
    </div>
  );
};


const FeedbackCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 h-[410px] px-[58px] py-12">
      <div className="text-center">
        <h3 className="text-md font-semibold text-foreground mb-4">Feedback <br /> Pending</h3>
        <div className="flex justify-center mb-4">
          <CircularProgress value={1.2} color="hsl(0 84% 60%)" />
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard