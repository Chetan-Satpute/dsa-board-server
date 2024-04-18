import {EdgeType} from './edge';
import {Point} from '../types';

export interface FrameNode {
  x: number;
  y: number;

  corners: number;
  value: number;
  color: string;
}

export interface FrameEdge {
  startNodePosition: Point;
  endNodePosition: Point;

  percent: number;
  type: EdgeType;
}

export interface FrameLabel {
  x: number;
  y: number;

  text: string;
}

export interface Frame {
  nodes: FrameNode[];
  edges: FrameEdge[];
  labels: FrameLabel[];
}

export function createFrame(): Frame {
  return {nodes: [], edges: [], labels: []};
}
