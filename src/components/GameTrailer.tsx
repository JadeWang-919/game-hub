import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      src={data?.results[0]?.data[480]}
      poster={first.preview}
      controls
      style={{ marginBottom: "1rem" }}
    ></video>
  ) : null;
};

export default GameTrailer;
