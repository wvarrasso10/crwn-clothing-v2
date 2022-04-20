import React from "react";

function DirectoryItemComponent({category}) {
  const {id, title, imageUrl} = category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{backgroundImage: `url(${imageUrl}`}}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default DirectoryItemComponent;
