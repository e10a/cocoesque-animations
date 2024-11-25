import { styled } from "@linaria/react";

type Props = {
  id: string;
  style: {};
};

const Outer = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    z-index: 1000;
`;

export default function LocationMarker({ id, style }: Props) {
  return (
    <Outer id={id} style={style} />
  );
}
