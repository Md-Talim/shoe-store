import { star } from '../assets/icons';

interface Props {
  imgURL: string;
  name: string;
  price: string;
}

const PopularProductCard = ({ imgURL, name, price }: Props) => {
  return (
    <div>
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold">{name}</h3>
      <p className="mt-2 text-coral-red text-base font-montserrat font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
