import * as React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Collapse from '@mui/material/Collapse';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring/web.cjs';

function MinusSquare(props) {
  return (
    <svg {...props} x="0px" y="0px" viewBox="0 0 408 408">
    <g>
      <g>
        <path fill="#4F5D81"
          d="M367.731,112.653H40.291c-22.269,0.132-40.258,18.21-40.28,40.48c-0.015,0.226-0.015,0.454,0,0.68l23.4,174.6
			c0.284,22.16,18.318,39.98,40.48,40h280.4c22.161-0.02,40.196-17.84,40.48-40l23.24-174.6c0.015-0.226,0.015-0.454,0-0.68
			C407.99,130.863,390.001,112.785,367.731,112.653z"
        />
      </g>
    </g>
    <g>
      <g>
        <path fill="#4F5D81"
          d="M337.851,72.333h-131.52l-26-30.92c-0.985-1.184-2.461-1.848-4-1.8H70.171c-16.559,0.022-29.978,13.441-30,30v28.84h10
			h317.4C365.624,83.521,352.909,72.347,337.851,72.333z"
        />
      </g>
    </g>
  </svg>
  );
}

function PlusSquare(props) {
  return (
    <svg {...props} x="0px" y="0px" viewBox="0 0 408 408">
    <g>
      <g>
        <path fill="#4F5D81"
          d="M367.731,112.653H40.291c-22.269,0.132-40.258,18.21-40.28,40.48c-0.015,0.226-0.015,0.454,0,0.68l23.4,174.6
			c0.284,22.16,18.318,39.98,40.48,40h280.4c22.161-0.02,40.196-17.84,40.48-40l23.24-174.6c0.015-0.226,0.015-0.454,0-0.68
			C407.99,130.863,390.001,112.785,367.731,112.653z"
        />
      </g>
    </g>
    <g>
      <g>
        <path fill="#4F5D81"
          d="M337.851,72.333h-131.52l-26-30.92c-0.985-1.184-2.461-1.848-4-1.8H70.171c-16.559,0.022-29.978,13.441-30,30v28.84h10
			h317.4C365.624,83.521,352.909,72.347,337.851,72.333z"
        />
      </g>
    </g>
  </svg>
  );
}

function CloseSquare(props) {
  return (
    <svg {...props} x="0px" y="0px" viewBox="0 0 408 408">
    <g>
      <g>
        <path fill="#4F5D81"
          d="M367.731,112.653H40.291c-22.269,0.132-40.258,18.21-40.28,40.48c-0.015,0.226-0.015,0.454,0,0.68l23.4,174.6
			c0.284,22.16,18.318,39.98,40.48,40h280.4c22.161-0.02,40.196-17.84,40.48-40l23.24-174.6c0.015-0.226,0.015-0.454,0-0.68
			C407.99,130.863,390.001,112.785,367.731,112.653z"
        />
      </g>
    </g>
    <g>
      <g>
        <path fill="#4F5D81"
          d="M337.851,72.333h-131.52l-26-30.92c-0.985-1.184-2.461-1.848-4-1.8H70.171c-16.559,0.022-29.978,13.441-30,30v28.84h10
			h317.4C365.624,83.521,352.909,72.347,337.851,72.333z"
        />
      </g>
    </g>
  </svg>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px solid #4F5D81`,
  },
}));

export default function Menu() {
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={['1']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
      sx={{  color: "white", backgroundColor: "#0B1733", overflowY: 'auto', flex: 1, height: "95vh", width: "50vw", padding: "20px" }}
    >
      <StyledTreeItem nodeId="1" label="Main">
        <StyledTreeItem nodeId="2" label="Hello" />
        <StyledTreeItem nodeId="3" label="Subtree with children">
          <StyledTreeItem nodeId="6" label="Hello" />
          <StyledTreeItem nodeId="7" label="Sub-subtree with children">
            <StyledTreeItem nodeId="9" label="Child 1" />
            <StyledTreeItem nodeId="10" label="Child 2" />
            <StyledTreeItem nodeId="11" label="Child 3" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="8" label="Hello" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" label="World" />
        <StyledTreeItem nodeId="5" label="Something something" />
      </StyledTreeItem>
    </TreeView>
  );
}
