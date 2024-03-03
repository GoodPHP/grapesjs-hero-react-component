export default (editor, { coreReactModel, coreReactView }) => {
  editor.Components.addType("image-react-component", {
    extend: "image",
    model: {
      ...coreReactModel,
      defaults: {
        name: "Image",
        highlightable: false,
        resizable: false,
        stylable: true,
        editable: true,
        draggable: true,
        droppable: true,
      },
    },

    view: {
      ...coreReactView,
    },
  });
};
