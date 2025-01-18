import exceptional from "../assets/exceptional.gif";
import recommended from "../assets/recommended.gif";
import meh from "../assets/meh.gif";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: recommended, alt: "recommended", boxSize: "20px" },
    5: { src: exceptional, alt: "exceptional", boxSize: "20px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2}></Image>;
};

export default Emoji;
