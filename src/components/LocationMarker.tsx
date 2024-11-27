import { styled } from "@linaria/react";

type Props = {
  id: string;
  style: {};
};

const Outer = styled.div`
    height: 1px;
    opacity: 0;
    position: absolute;
    width: 100%;
    z-index: 1000;
`;

export default function LocationMarker({ id, style }: Props) {
  return (
    <Outer id={id} style={style} />
  );
}
