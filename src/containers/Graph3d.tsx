import * as React from 'react'
import { ReactElement } from 'react'


import { connect } from "react-redux";
import { ForceGraph3D } from "react-force-graph";

import { fetchNode, deleteNode } from '../actions';
import { graphFuncs } from '../helpers/functions';

const { getLinks } = graphFuncs;

interface IGraph3dInterface {
  nodes: any, links: any
}

function Graph3d({ nodes, links }: IGraph3dInterface): ReactElement {
  return <ForceGraph3D graphData={{ nodes, links }} />
}

const mapStateTopProps = (state: any, ownProps: any) => ({
  nodes: Object.values(state.nodes), links: getLinks(state.nodes)
})

const mapDispatchToProps = {
  fetchNode, deleteNode
}


export default connect(mapStateTopProps, mapDispatchToProps)(Graph3d)