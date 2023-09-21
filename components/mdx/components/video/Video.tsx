import css from "./Video.module.scss";

type Props = {
  src: string;
};

export const Video = ({ src }: Props) => (
  <video className={css.video} loop autoPlay>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);
