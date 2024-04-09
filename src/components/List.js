// import React, { useState, useEffect, memo, useCallback } from 'react';
// import PropTypes from 'prop-types';

// // Single List Item
// const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
//   return (
//     <li
//       style={{ backgroundColor: isSelected ? 'green' : 'red'}}
//       onClick={onClickHandler}
//     >
//       {text}
//     </li>
//   );
// });

// SingleListItem.propTypes = {
//   index: PropTypes.number,
//   isSelected: PropTypes.bool,
//   onClickHandler: PropTypes.func.isRequired,
//   text: PropTypes.string.isRequired,
// };

// // List Component
// const List = memo(({ items }) => {
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   useEffect(() => {
//     setSelectedIndex(null);
//   }, [items]);

//   const handleClick = useCallback(
//     (index) => {
//       setSelectedIndex(index);
//     },
//     []
//   );

//   return (
//     <ul style={{ textAlign: 'left' }}>
//       {items.map((item, index) => (
//         <SingleListItem
//           key={index}
//           onClickHandler={() => handleClick(index)}
//           text={item.text}
//           index={index}
//           isSelected={index === selectedIndex}
//         />
//       ))}
//     </ul>
//   );
// });

// List.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

// List.defaultProps = {
//   items: [{text:"aman"},{text:"ajay"}]
// };

// export default List;



import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  const handleClick = () => {
    onClickHandler(index);
  };

  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={handleClick}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
          key={index}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

WrappedListComponent.defaultProps = {
    items: null,
  };
  
  const List = memo(WrappedListComponent);
  
  export default List;