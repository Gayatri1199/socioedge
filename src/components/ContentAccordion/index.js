import React, { useState } from "react";
import styled from "styled-components";

const ContentAccordionStyle = styled.div`
  button {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    display: block;
    padding: 16px;
    background: #b1a9ad;
  }

  .accordion {
    max-width: 600px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .accordion-item {
    margin-bottom: 16px;
  }

  .accordion-item:last-child {
    border-bottom: none;
  }

  .accordion-header {
    width: 100%;
    padding: 16px;
    text-align: left;
    background-color: #f2f5f8;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-top: 1px solid #b1a9ad;
    border-bottom: 1px solid #b1a9ad;
    position: relative;
    i {
      position: absolute;
      right: 16px;
      transform: rotate(175deg);
      top: 20px;
    }
  }

  .accordion-header.active {
    background-color: transparent;
    border-bottom: none;
    i {
      position: absolute;
      right: 16px;
      transform: unset;
      top: 20px;
    }
  }

  .accordion-content {
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: 0 15px;
  }

  .accordion-content p {
    margin: 0;

    font-size: 14px;
    font-weight: 400;
    line-height: 19.07px;
  }

  .sub-heading,
  .mid-point {
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700 !important;
    line-height: 19.07px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: 24px !important;
    margin-bottom: 16px !important;
  }
  ul {
    padding-left: 20px;
  }
`;

const ContentAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ContentAccordionStyle className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            {index + 1}. {item.title}
            <i class="fa-solid fa-chevron-up"></i>
          </button>
          <div
            className="accordion-content"
            style={{
              maxHeight: activeIndex === index ? "5000px" : "0",
            }}
          >
            {item.content.map((contentItem, idx) => {
              if (contentItem.type === "paragraph") {
                return <p key={idx}>{contentItem.text}</p>;
              } else if (contentItem.type === "list") {
                return (
                  <ul key={idx}>
                    {contentItem.items.map((listItem, listIdx) => (
                      <li key={listIdx}>{listItem}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </ContentAccordionStyle>
  );
};

export default ContentAccordion;
