export const Image = ({ image }) => {
  return (
    <div className="image">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};
export function ImageList({ ImagesList }) {
  //   console.log(ImagesList);
  return (
    <div className="image-list">
      {ImagesList &&
        ImagesList.map((image, index) => {
          return <Image image={image} key={index} />;
        })}
    </div>
  );
}
