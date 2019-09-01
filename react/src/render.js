const render = function(vnode, container) {
    const { tag, attrs, children } = vnode;

    // Create dom
    const dom = document.createElement(tag);

    // Set attributes for the dom
    for (var prop in attrs) {
        dom.setAttribute(prop, attrs[prop]);
    }
    
    // Add content to dom
    const content = document.createTextNode(children);
    dom.appendChild(content);

    // Append the dom to container
    return container.appendChild(dom);
};

export default render;
