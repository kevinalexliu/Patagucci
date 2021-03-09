import React from 'react';
// import PropTypes from 'prop-types';
import FavIcon from './components/FavIcon/FavIcon';
import ImageContainer from './components/styles';

const CardAssets = ({ card }) => {
  // console.log('CardAssets', card.defaultStyle)
  // const hasDefault = card.defaultStyle
  // // const hasImage = card.defaultStyle[0].photos
  // console.log('hasDefault', hasDefault)
  // // console.log('hasImage', hasImage)
  // if (!hasDefault || !hasDefault[0]) {
  //   return null;
  // }
  // const img = card.defaultStyle[0].photos[0].thumbnail_url
  const hasImg = Boolean(card.firstStyles.photos[0].thumbnail_url)
  console.log('hasImg', hasImg)
  return (
    <ImageContainer>
        <>
          {hasImg ? <img
            className="default-thumbnail"
            src={card.firstStyles.photos[0].thumbnail_url}
            alt={card.name}
          /> : <img
            className="default-thumbnail"
            src={"https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"}
            alt='placeholder'
          />}
        </>
        <FavIcon className="fav-icon" />
    </ImageContainer>
  )
}
// CardAssets.propTypes = {
//   thumbnail_url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.array.isRequired,
// };

export default CardAssets;
