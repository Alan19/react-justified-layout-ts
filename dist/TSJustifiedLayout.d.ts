import React from "react";
type ElementDimensions = number;
export interface TSJustifiedLayoutProps {
    layoutItems: ElementDimensions[];
    itemSpacing?: number;
    rowSpacing?: number;
    targetRowHeight?: number;
    targetRowHeightTolerance?: number;
    width: number;
    children: any[];
    showWidows?: boolean;
}
declare function TSJustifiedLayout({ children, layoutItems, itemSpacing, rowSpacing, showWidows, targetRowHeight, targetRowHeightTolerance, width }: TSJustifiedLayoutProps): React.JSX.Element;
export { TSJustifiedLayout };
