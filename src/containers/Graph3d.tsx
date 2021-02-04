import * as React from 'react'
import { memo, useEffect } from 'react'


import { connect } from "react-redux";
import { ForceGraph3D } from "react-force-graph";

import { fetchNode, deleteNode } from '../actions';
import { graphFuncs } from '../helpers/functions';

const { getLinks } = graphFuncs;

interface IGraph3dInterface {
  nodes: any, links: any, fetchNode: any
}

const Graph3d: React.FunctionComponent<IGraph3dInterface> = ({ nodes, links, fetchNode }) => {

  useEffect(() => {
    (async ()=> {
      console.log('---->', await fetchNode('i_3'))
    })()
  }, [])

  return <ForceGraph3D graphData={{ nodes, links }} />
}

const mapStateTopProps = (state: any, ownProps: any) => ({
  nodes: Object.values(state.nodes), links: getLinks(state.nodes)
})

const mapDispatchToProps = {
  fetchNode, deleteNode
}

export default connect(mapStateTopProps, mapDispatchToProps)(
  memo(Graph3d)
)
