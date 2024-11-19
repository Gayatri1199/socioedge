import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div``;

const AccordionItem = styled.div`
  margin-bottom: 12px;
`;

const AccordionHeader = styled.div`
  padding: 16px 4px;
  // text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
`;

const AccordionContent = styled.div`
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  a {
    display: block;
    margin-bottom: 12px;
    color: #000;
    text-decoration: none;
  }
`;

const Accordion = ({ items, page }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // If the clicked index is the same as the current openIndex, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {item.title}
            <i class="fa-solid fa-chevron-down"></i>
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            {item.content.map((content, index) => {
              return (
                <a href={content.url} key={index} className="s2">
                  {content.label}
                </a>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      ))}
      {page !== "header" ? (
        <div className="footer-block">
          <h4>Contact</h4>
          <a href="mailto:someone@example.com" className="s2">
            <img src="../../Footer/Email.svg" alt="Email" />
            info@socioedge.com
          </a>
          <a href="tel:+91-9923060619" className="s2">
            <img src="../../Footer/Phone.svg" alt="Email" />
            +91-9923060619
          </a>

          <a href="void:(0)" className="s2 contact-btn">
            {" "}
            Contact Us
          </a>
        </div>
      ) : null}
    </AccordionContainer>
  );
};

export default Accordion;
