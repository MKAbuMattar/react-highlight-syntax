const appendStyle = (id: string, css: string) => {
  if (!document.head.querySelector('#' + id)) {
    const node = document.createElement('style');
    node.textContent = css;
    node.type = 'text/css';
    node.id = id;

    document.head.appendChild(node);
  }
};

export default appendStyle;
