import * as React from 'react'
import { memo, useEffect } from 'react'


import { connect } from "react-redux";
import { ForceGraph3D } from "react-force-graph";


import { fetchNode, deleteNode } from '../actions';
import { graphFuncs, utilFuncs } from '../helpers/functions';

interface IGraph3dInterface {
  nodes: any, links: any, fetchNode: any
}

const Graph3d: React.FunctionComponent<IGraph3dInterface> = ({ nodes, links, fetchNode }) => {
  useEffect(() => {
    (async () => {
      console.log('---->', await fetchNode('i_3'))
    })()
  }, [])

  const pipeAsyncFunctions = (...fns: any[]) => (arg: any) => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

  console.log(pipeAsyncFunctions)

  const handleClick = async (_node: any) => {
    const accumulateGateFunctions = (nodeId: string, arr: any[]) => {
      const node = nodes[_node.id]

      for (const objectName in node.links) {
        if (
          Object.prototype.hasOwnProperty.call(node.links, objectName)
        ) {


          const nodeGateFunction = node.links[objectName].gates[1];
          console.log(objectName, nodeGateFunction)

          // target gate 1:

        }
      }
    }

    accumulateGateFunctions(_node.id, [])
  }

  useEffect(() => {

    (async () => {
      const fncs = [
        (x: number) => x + 1,
        (x: number) => new Promise(resolve => setTimeout(() => resolve(x + 2), 3000)),
        (x: number) => x + 3,
        async (x: any) => (await x) + 4,
        (x: number) => x + 1
      ]
      const sum = await pipeAsyncFunctions(
        ...fncs
      );
      (async () => {
        console.log(await sum(5)); // 15 (after one second)
      })();
    })()
  }, [])

  return <ForceGraph3D
    height={800}
    nodeThreeObject={(node: any) => graphFuncs.getGraphText(node)}
    graphData={{ nodes: Object.values(nodes), links }}
    onNodeClick={handleClick}
    // ----------------------------
    linkDirectionalArrowLength={3.5}
    linkDirectionalArrowRelPos={1}
    linkCurvature={0.25}
  />
}

const mapStateTopProps = (state: any, ownProps: any) => ({
  nodes: state.nodes, links: graphFuncs.getLinks(state.nodes)
})

const mapDispatchToProps = {
  fetchNode, deleteNode
}

export default connect(mapStateTopProps, mapDispatchToProps)(
  memo(Graph3d)
)
