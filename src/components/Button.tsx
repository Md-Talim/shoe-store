interface Props {
  label: string;
  imageUrl: string;
}

const Button = ({ label, imageUrl }: Props) => {
  return (
    <button className="flex items-center justify-center gap-4 px-8 py-4 bg-coral-red border border-coral-red text-white rounded-full font-montserrat">
      {label}
      <img
        src={imageUrl}
        alt="Right Arrow Icon"
        className="rounded-full h-5 w-5"
      />
    </button>
  );
};

export default Button;
