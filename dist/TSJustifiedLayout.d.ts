import React from "react";
export interface TSJustifiedLayoutProps {
    images: {
        src: string;
        dimensions: number;
    }[];
    itemSpacing?: number;
    rowSpacing?: number;
    targetRowHeight?: number;
    targetRowHeightTolerance?: number;
    width: number;
    children: any[];
    showWidows?: boolean;
}
declare function TSJustifiedLayout({ children, images, itemSpacing, rowSpacing, showWidows, targetRowHeight, targetRowHeightTolerance, width }: TSJustifiedLayoutProps): React.JSX.Element;
export { TSJustifiedLayout };
