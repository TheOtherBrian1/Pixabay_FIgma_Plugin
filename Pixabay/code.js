
figma.showUI(__html__);

figma.ui.resize(420, 400)
figma.ui.onmessage = msg => {
  
  if (msg.type === 'getUrl') {
    const blob = msg.uint8Array;
    console.log(blob, 'blob');
    const image = figma.createImage(blob);
    console.log('hash', image.hash);
    console.log(image);
    const rect = figma.createRectangle();
    rect.fills = [
        { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
        { type: "IMAGE", scaleMode: "FILL",  imageHash:image.hash }
      ]
    figma.currentPage.appendChild(rect);
    figma.currentPage.selection = [rect];
    figma.viewport.scrollAndZoomIntoView([rect]);
  }

  figma.closePlugin();
};
