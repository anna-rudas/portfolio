import React from "react";
import * as style from "./InfoTags.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { className } from "../../../utilities/helpers";

function InfoTags({ tagList, extraTagsContainerStyle }) {
  return (
    <ul {...className(style.tagsContainer, extraTagsContainerStyle)}>
      {tagList.map((currentTag) => {
        return (
          <li
            key={currentTag}
            {...className(style.skillTagContent, textStyles.tagText)}
          >
            {currentTag}
          </li>
        );
      })}
    </ul>
  );
}

export default InfoTags;
