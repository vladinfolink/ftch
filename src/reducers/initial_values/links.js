import { colors } from "reducers/initial_values/nodes";


export function returnLinks(nodesObject) {
  const incipientLinks = [];

  for (const id in nodesObject) {
    if (nodesObject.hasOwnProperty(id)) {
      const { links } = { ...nodesObject[id] };

      if (links) {
        for (const link in links) {
          if (links.hasOwnProperty(link)) {
            incipientLinks.push({
              source: id,
              target: link,
              nrOfParticles: 2,
              color: colors[nodesObject[id].type],
              linkCurvature: 0.12, //0.12
            });
          }
        }
      }
    }
  }
  return incipientLinks;
}