import React, { useState, type JSX } from 'react';
// import { ReactNode } from 'react'; 

// import CustomCollapse from './CustomCollapse';
import './accorion.css';

interface CustomCollapseProps {
    label: string;
    children?: JSX.Element | JSX.Element[];
  }
  
  const CustomCollapse: React.FC<CustomCollapseProps> = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
          <span className="accordion-question">{label}</span>
          <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
        </div>
        {isOpen && children && <div className="accordion-content">{children}</div>}
      </div>
    );
  };
  
export default function FaqAccordion() {
  return (
    <div className="faq-container">
      <h6 className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</h6>
      <h1 className="faq-title">Got Questions?<br />We've Got Answers!</h1>

      <div className="faq-wrapper">
        <CustomCollapse label="Q. Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?">
          <p>
            Adipiscing ac lacus vel sed sed tincidunt at. Laoreet consequat donec id fermentum.
            Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae
            sodales nisi enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida
            vitae fringilla eu tellus neque est feugiat.
          </p>
        </CustomCollapse>

        {/* ✅ Always pass `children`, even if empty */}
        <CustomCollapse label="Q. Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?">
          <></>
        </CustomCollapse>

        <CustomCollapse label="Q. Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?">
          <></>
        </CustomCollapse>

        <CustomCollapse label="Q. Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?">
          <></>
        </CustomCollapse>
      </div>
    </div>
  );
}
