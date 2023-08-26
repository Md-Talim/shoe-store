interface Props {
  backgroundColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  imageUrl?: string;
  label: string;
  textColor?: string;
}

const Button = ({
  backgroundColor,
  borderColor,
  fullWidth,
  imageUrl,
  label,
  textColor,
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-4 px-8 py-4 border ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red border-coral-red text-white'
      } rounded-full font-montserrat ${fullWidth && 'w-full'}`}
    >
      {label}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Right Arrow Icon"
          className="rounded-full h-5 w-5"
        />
      )}
    </button>
  );
};

export default Button;
