import * as React from 'react'
import { ReactElement } from 'react'

import { ForceGraph3D } from "react-force-graph";

import { graphFuncs } from '../helpers/functions'

const { genRandomTree } = graphFuncs;

export function Graph3d({ }: {}): ReactElement {
  return (
    <ForceGraph3D graphData={genRandomTree()} />
  )
}