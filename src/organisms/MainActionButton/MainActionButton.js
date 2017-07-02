import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

const FloatingPositionDiv = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 10000;
  transition: all linear 250ms;
  transform: scale(${({isStaged}) => isStaged ? 1 : 0})
`;

const MainActionButton = ({ pushStagedSelection, isStaged }) => {
  return (
    <FloatingPositionDiv isStaged={isStaged}>
      <FloatingActionButton>
        <ContentSend onTouchTap={pushStagedSelection}/>
      </FloatingActionButton>
    </FloatingPositionDiv>
  )
}

export default MainActionButton