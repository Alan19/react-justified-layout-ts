import React from "react";
import './layout.css'

type ElementDimensions = number;

export interface TSJustifiedLayoutProps {
    layoutItems: ElementDimensions[];
    itemSpacing?: number;
    rowSpacing?: number;
    targetRowHeight?: number;
    targetRowHeightTolerance?: number;
    width: number;
    children: React.JSX.Element[];
    showWidows?: boolean;
    containerStyle?: React.CSSProperties;
    // TODO Implement these
    // maxNumRows?: number;
    // fullWidthBreakoutRowCadence?: number
    // widowLayoutStyle: "left" | "justify" | "center"
}

function TSJustifiedLayout({
                               children,
                               layoutItems,
                               itemSpacing = 10,
                               rowSpacing = 10,
                               showWidows = true,
                               targetRowHeight = 320,
                               targetRowHeightTolerance = .25,
                               width,
                               containerStyle
                           }: TSJustifiedLayoutProps) {
    const minAspectRatio = width / targetRowHeight * (1 - targetRowHeightTolerance);
    const maxAspectRatio = width / targetRowHeight * (1 + targetRowHeightTolerance);

    const rows: { items: ElementDimensions[]; height: number; }[] = [];
    let rowBuffer: ElementDimensions[] = [];

    /**
     * Attempts to add an item to the current row buffer
     * @param value The new aspect ratio to be checked
     * @return If the buffer can accept the new value
     * */
    function addItem(value: ElementDimensions) {
        const newItems = rowBuffer.concat(value)
        const newAspectRatio = newItems.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const rowWidthMinusSpacing = width - (newItems.length - 1) * itemSpacing;
        const targetAspectRatio = rowWidthMinusSpacing / targetRowHeight;
        // Row still has space
        if (newAspectRatio < minAspectRatio) {
            rowBuffer.push(value);
        }
        // Row ran out of space, and the new item is larger than the max aspect ratio for the row
        else if (newAspectRatio > maxAspectRatio) {
            // Always accept if it's just 1 item
            if (rowBuffer.length === 0) {
                rowBuffer.push(value);
                rows.push({items: rowBuffer, height: rowWidthMinusSpacing / newAspectRatio});
                rowBuffer = [];
            } else {
                // Calculate width/aspect ratio for row before adding new item
                const previousRowWidthWithoutSpacing = width - (rowBuffer.length - 1) * itemSpacing;
                const previousAspectRatio = rowBuffer.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
                const previousTargetAspectRatio = previousRowWidthWithoutSpacing / targetRowHeight;
                // If the new aspect ratio is farther from the target after the insert, then push row buffer and insert new item into the next row
                if (Math.abs(newAspectRatio - targetAspectRatio) > Math.abs(previousAspectRatio - previousTargetAspectRatio)) {
                    rows.push({items: rowBuffer, height: previousRowWidthWithoutSpacing / previousAspectRatio})
                    rowBuffer = [value]
                }
                // If the new aspect ratio is closer to the target aspect ratio, then insert item and push row buffer
                else {
                    rowBuffer.push(value);
                    rows.push({items: rowBuffer, height: rowWidthMinusSpacing / newAspectRatio})
                    rowBuffer = []
                }
            }
        } else {
            // New aspect ratio is within aspect ratio tolerance, so we finish off the row
            rowBuffer.push(value);
            rows.push({items: rowBuffer, height: rowWidthMinusSpacing / newAspectRatio})
            rowBuffer = []
        }
    }


    layoutItems.forEach((value) => {
        addItem(value);
    })

    // Handle leftover content
    if (showWidows && rowBuffer.length !== 0) {
        rows.push({items: rowBuffer, height: rows.length === 0 ? targetRowHeight : rows[rows.length - 1].height})
    }

    let childNodeCounter = -1;

    /**
     * Clone the children element, and inject the height of the element as a prop
     */
    function renderRowItem(aspectRatio: ElementDimensions, isSoloRow: boolean) {
        childNodeCounter++;
        return <div style={{
            aspectRatio: aspectRatio,
            flex: isSoloRow ? 1 : aspectRatio,
            ...containerStyle
        }}>
            {children[childNodeCounter]}
        </div>
    }

    // TODO Figure out how to eliminate the tiny gap between div and actual image height
    // TODO Make bottom row respect length restrictions
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: rowSpacing
        }}>
            {rows.map((value, index, array) => {
                let isLastRow = index === array.length - 1 && showWidows;
                let rowTotalAspectRatio = value.items.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
                const isLastRowWithinTolerance = isLastRow && rowTotalAspectRatio * value.height + (value.items.length - 1) * itemSpacing < minAspectRatio * value.height;
                const fakeElementAspectRatio = (width - rowTotalAspectRatio - (value.items.length) * itemSpacing) / value.height
                return <div className={'justified-row'} style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: itemSpacing,
                }
                }>
                    {value.items.map((aspectRatio) => renderRowItem(aspectRatio, value.items.length === 1))}
                    {isLastRowWithinTolerance && <div style={{aspectRatio: fakeElementAspectRatio, flex: fakeElementAspectRatio}}></div>}
                </div>
            })}
        </div>
    );
}

export {TSJustifiedLayout}