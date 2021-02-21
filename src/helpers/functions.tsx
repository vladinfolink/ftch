import SpriteText from 'three-spritetext'

export const graphFuncs = {
  getLinks: function (nodesObject: any) {
    const incipientLinks: any[] = [];

    for (const id in nodesObject) {
      if (nodesObject.hasOwnProperty(id)) {
        const { links }: any = { ...nodesObject[id] };

        if (links) {
          for (const link in links) {
            if (links.hasOwnProperty(link)) {
              incipientLinks.push({
                source: id,
                target: link,
                nrOfParticles: 2,
                // color: colors[nodesObject[id].type],
                linkCurvature: 0.12,
              });
            }
          }
        }
      }
    }
    return incipientLinks;
  },
  getGraphText: function (node: any) {
    const sprite = new SpriteText(node.id);
    sprite.color = node.color;
    sprite.textHeight = 8;
    return sprite;
  }

}

