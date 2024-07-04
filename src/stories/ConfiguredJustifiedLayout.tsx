import {TSJustifiedLayout, TSJustifiedLayoutProps} from "../components/TSJustifiedLayout";
import React from "react";


export const ConfiguredJustifiedLayout = ({
                                              layoutItems,
                                              rowSpacing = 8,
                                              width = 1000,
                                              itemSpacing = 8,
                                              targetRowHeight = 320,
                                              targetRowHeightTolerance = 0.10,
                                              showWidows = true,
                                              children,
                                              ...props
                                          }: TSJustifiedLayoutProps) => {
    return <TSJustifiedLayout layoutItems={layoutItems}
                              width={width}
                              itemSpacing={itemSpacing}
                              targetRowHeight={targetRowHeight}
                              targetRowHeightTolerance={targetRowHeightTolerance}
                              rowSpacing={rowSpacing}
                              showWidows={showWidows} {...props}>
        {children.map((child) => child)}
    </TSJustifiedLayout>;
}