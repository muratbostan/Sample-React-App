import { React, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";






const Tree = ({ data = [] }) => {
    return (
      <div className="tree">
        <ul className="flex tree-container flex-column">
          {data.map((tree) => (
            <TreeNode node={tree} key={tree.key.toString()} />
          ))}
        </ul>
      </div>
    );
  };
  
  const TreeNode = ({ node }) => {
    
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = node.children ? true : false;

    return (
      <li className="tree-node">
        <div className="flex" onClick={(e) => setChildVisiblity((v) => !v)}>
          {hasChild && (
            <div
              className={`inline tree-toggler ${
                childVisible ? "active" : ""
              }`}
            >
              <FaArrowRight/>
            </div>
          )}
  
          <div className="col tree-head">
            {node.label}
          </div>
        </div>
  
        {hasChild && childVisible && (
          <div className="tree-content">
            <ul className="flex tree-container flex-column">
              <Tree data={node.children} />
            </ul>
          </div>
        )}
      </li>
    );
  };
  
  export default Tree;