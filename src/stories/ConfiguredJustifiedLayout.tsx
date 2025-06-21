import {TSJustifiedLayoutProps} from "../components/TSJustifiedLayout";
import React from "react";
import {JustifiedGrid} from "../components/JustifiedGrid";


export const ConfiguredJustifiedLayout = ({
                                              aspectRatioList,
                                              rowSpacing = 8,
                                              width = 1000,
                                              itemSpacing = 8,
                                              targetRowHeight = 320,
                                              targetRowHeightTolerance = 0.10,
                                              children
                                          }: TSJustifiedLayoutProps) => {
    return <JustifiedGrid aspectRatioList={aspectRatioList}
                          width={width}
                          itemSpacing={itemSpacing}
                          targetRowHeight={targetRowHeight}
                          targetRowHeightTolerance={targetRowHeightTolerance}
                          rowSpacing={rowSpacing}>
        {children.map((child) => child)}
    </JustifiedGrid>;
}