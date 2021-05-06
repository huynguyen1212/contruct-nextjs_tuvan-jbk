import React, { useEffect } from 'react';
import styled from 'styled-components';

interface TCollapsible {
  header: any;
  content: any;
  timing?: number;
}

export default function Collapsible({
  header,
  content,
  timing = 0.5,
}: TCollapsible) {
  useEffect(() => {
    let collapsible = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapsible.length; i++) {

      let header = collapsible[i].getElementsByClassName('header')[0];
      header?.addEventListener('click', function () {
        let content = header?.nextElementSibling as HTMLElement;
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
          content.style.maxHeight = '0px';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
        console.log(content.scrollHeight, content)
      });
    }
  }, []);

  return (
    <SCollapsible className="collapsible">
      <div className="header">{header}</div>
      <div className="content" style={{ transition: `${timing}s max-height` }}>
        {content}
      </div>
    </SCollapsible>
  );
}

const SCollapsible = styled.div`
  .header {
    cursor: pointer;
    user-select: none;
  }
  .content {
    max-height: 0px;
    overflow: hidden;
  }
`;
