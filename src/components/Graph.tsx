import * as React from 'react'
import { ReactElement } from 'react'

import { ForceGraph3D } from "react-force-graph";
// import SpriteText from 'three-spritetext';

import { graphFuncs } from '../helpers/functions'

const {genRandomTree} = graphFuncs;

export function Graph({ }: {}): ReactElement {
  return (
    <ForceGraph3D graphData={genRandomTree()} />
  )
}

