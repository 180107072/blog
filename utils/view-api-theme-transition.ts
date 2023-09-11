const viewApiPseudo = `
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
`;
export const lightTransition = `
::view-transition-old(root) {
  z-index: 9999;
}
::view-transition-new(root) {
  z-index: 1;
}
`;

export const darkTransition = `
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}
`;

export const createPseudoElement = (id: string, transition: string) => {
  const css = document.createElement("style");
  css.id = id;
  css.appendChild(document.createTextNode(viewApiPseudo + transition));
  document.head.appendChild(css);
};
