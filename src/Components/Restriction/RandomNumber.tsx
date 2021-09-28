// create separate types
type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

// Restricting props
type Zero = RandomNumberType & {
  isZero: boolean;
  isNegative: never;
  isPositive?: never;
};

// Prop types
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'isZero'}
    </div>
  );
};

export default RandomNumber;
