import * as React from "react";
import {
  EventPropTypeInterface,
  InterpolationPropType,
  OriginType,
  StringOrNumberOrCallback,
  VictoryCommonProps,
  VictoryCommonPrimitiveProps,
  VictoryDatableProps,
  VictoryMultiLabelableProps,
  VictoryLabelableProps,
  VictoryStyleInterface
} from "victory-core";

export interface VictoryLineProps
  extends VictoryCommonProps,
    VictoryDatableProps,
    VictoryLabelableProps,
    VictoryMultiLabelableProps {
  events?: EventPropTypeInterface<"data" | "labels" | "parent", number | string>[];
  eventKey?: StringOrNumberOrCallback | string[];
  interpolation?: InterpolationPropType | Function;
  origin?: OriginType;
  samples?: number;
  sortKey?: string | string[] | Function;
  style?: VictoryStyleInterface;
}

export interface VictoryCurveProps extends VictoryCommonPrimitiveProps {
  interpolation?: string | Function;
  openCurve?: boolean;
  pathComponent?: React.ReactElement;
}

export class Curve extends React.Component<VictoryCurveProps> {}

export class VictoryLine extends React.Component<VictoryLineProps, any> {}
