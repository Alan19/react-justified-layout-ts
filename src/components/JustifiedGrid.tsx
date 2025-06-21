import React from "react";
import _ from "lodash";
import './layout.css'

export interface JustifiedGridProps {
    aspectRatioList: number[];
    itemSpacing?: number;
    rowSpacing?: number;
    targetRowHeight?: number;
    targetRowHeightTolerance?: number;
    width: number;
    children: React.JSX.Element[];
    containerStyle?: React.CSSProperties;
}

function getJustifiedGridRowConfiguration(width: number, targetRowHeightTolerance: number, aspectRatioList: number[], targetRowHeight: number, itemSpacing: number): number[][] {
    let buffer: number[] = []
    const rows: number[][] = []

    // We assume that the row will have the specified height, which allows us to convert aspect ratios into widths
    const minRowWidth = width * (1 / (1 + targetRowHeightTolerance));
    const maxRowWidth = width * (1 / (1 - targetRowHeightTolerance));
    aspectRatioList.forEach((aspectRatio, index) => {
        let currentRowWidth = (_.sum(buffer) * targetRowHeight + aspectRatio * targetRowHeight + itemSpacing * (buffer.length));
        // If the new item's width would cause it to fall between the tolerances for max widths, finish the row
        // If the new item's width would cause it to exceed the tolerances for the row, add it to a new row
        if (buffer.length === 0 || currentRowWidth < maxRowWidth) {
            buffer.push(aspectRatio);
            if (currentRowWidth > minRowWidth) {
                rows.push(buffer)
                buffer = []
            }
            // If we're handling the last item, and it doesn't exceed the minimum tolerance for the row width, we add a "dummy" item to make the rest of the row now take up the whole width
            else if (index === aspectRatioList.length - 1) {
                buffer.push((width - _.sum(buffer) * targetRowHeight - itemSpacing * (buffer.length - 1)) / targetRowHeight);
            }
        }
        else {
            rows.push(buffer)
            buffer = [aspectRatio];
        }
    })

    if (buffer.length !== 0) {
        rows.push(buffer)
    }
    return rows;
}

export function JustifiedGrid(props: Readonly<JustifiedGridProps>) {
    const {targetRowHeightTolerance = .25, width, targetRowHeight = 320, itemSpacing = 8, rowSpacing = 8, children, containerStyle, aspectRatioList} = props;
    const rows = getJustifiedGridRowConfiguration(width, targetRowHeightTolerance, aspectRatioList, targetRowHeight, itemSpacing);

    let childNodeCounter = -1;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: rowSpacing
        }}>
            {rows.map((value) => {
                return <div className={'justified-row'} style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: itemSpacing,
                }}>
                    {value.map((aspectRatio) => {
                        childNodeCounter++;
                        return <div style={{
                            flex: value.length === 1 ? 1 : aspectRatio,
                            ...containerStyle
                        }}>
                            {children[childNodeCounter]}
                        </div>;
                    })}
                </div>
            })}
        </div>
    );
}