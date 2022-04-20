import React from "react";
import {BackgroundImage, Body, DirectoryItemContainer,} from "./directory-item.styles";
import {useNavigate} from "react-router";

function DirectoryItemComponent({category}) {
  const {routeName, title, imageUrl} = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(routeName);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItemComponent;
