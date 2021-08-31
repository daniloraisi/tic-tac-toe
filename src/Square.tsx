type Props = {
  value: string;
  onClick: Function;
};

export default function Square({ value, onClick }: Props) {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
}
