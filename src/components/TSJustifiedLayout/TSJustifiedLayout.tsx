import React, {cloneElement} from "react";

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
                               width
                           }: TSJustifiedLayoutProps) {
    const minAspectRatio = width / targetRowHeight * (1 - targetRowHeightTolerance);
    const maxAspectRatio = width / targetRowHeight * (1 + targetRowHeightTolerance);

    /**
     *
     * @param value The new aspect ratio to be checked
     * @return If the buffer can accept the new value
     * */
    function addItem(value: ElementDimensions) {
        const newItems = rowBuffer.concat(value)
        const newAspectRatio = newItems.map(dimensions => dimensions).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const rowWidthWithoutSpacing = width - (newItems.length - 1) * itemSpacing;
        const targetAspectRatio = rowWidthWithoutSpacing / targetRowHeight;
        // Row still has space
        if (newAspectRatio < minAspectRatio) {
            rowBuffer.push(value);
            return true;
        }
        // Row ran out of space, and the new item is larger than the max aspect ratio for the row
        else if (newAspectRatio > maxAspectRatio) {
            // Always accept if it's just 1 item
            if (rowBuffer.length === 0) {
                rowBuffer.push(value);
                rows.push({items: rowBuffer, height: rowWidthWithoutSpacing / newAspectRatio});
                rowBuffer = [];
                return true;
            } else {
                // Calculate width/aspect ratio for row before adding new item
                const previousRowWidthWithoutSpacing = width - (rowBuffer.length - 1) * itemSpacing;
                const previousAspectRatio = rowBuffer.map(dimensions => dimensions).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
                const previousTargetAspectRatio = previousRowWidthWithoutSpacing / targetRowHeight;
                // If the new aspect ratio is farther from the target after the insert, then push row buffer and insert new item into the next row
                if (Math.abs(newAspectRatio - targetAspectRatio) > Math.abs(previousAspectRatio - previousTargetAspectRatio)) {
                    rows.push({items: rowBuffer, height: previousRowWidthWithoutSpacing / previousAspectRatio})
                    rowBuffer = []
                    return false;
                }
                // If the new aspect ratio is closer to the target aspect ratio, then insert item and push row buffer
                else {
                    rowBuffer.push(value);
                    rows.push({items: rowBuffer, height: rowWidthWithoutSpacing / newAspectRatio})
                    rowBuffer = []
                    return true;
                }
            }
        } else {
            // New aspect ratio is within aspect ratio tolerance, so we finish off the row
            rowBuffer.push(value);
            rows.push({items: rowBuffer, height: rowWidthWithoutSpacing / newAspectRatio})
            rowBuffer = []
            return true;
        }
    }

    const rows: { items: ElementDimensions[]; height: number;  }[] = [];
    let rowBuffer: ElementDimensions[] = [];

    console.log(rows)


    layoutItems.forEach((value) => {
        const isItemSuccessfullyAdded = addItem(value);
        if (!isItemSuccessfullyAdded) {
            addItem(value);
        }
    })

    // Handle leftover content
    console.log(rows)
    if (showWidows) {
        rows.push({items: rowBuffer, height: rows.length === 0 ? targetRowHeight : rows[rows.length - 1].height})
    }

    let childNodeCounter = -1;

    /**
     * Clone the children element, and inject the height of the element as a prop
     * @param isLast If the element belongs to the last row, and therefore should use height instead of flex
     */
    function renderChildren(isLast: boolean) {
        childNodeCounter++;
        return cloneElement(children[childNodeCounter], {
            ...children[childNodeCounter].props, style: {
                ...children[childNodeCounter].props.style,
                maxWidth: '100%',
                ...(isLast ? {maxHeight: '100%'} : {})
            }
        })
    }

    return (
        <>
            <div style={{width: "100%"}} />
            <div style={{width: "100%"}}>
                {rows.map((value, index, array) => {
                    let isLastRow = index === array.length - 1 && showWidows;
                    return <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: itemSpacing,
                        marginBottom: rowSpacing,
                        ...(isLastRow ? {height: value.height} : {})
                    }}>
                        {value.items.map((aspectRatio) => {
                            return <div style={isLastRow ? {aspectRatio: aspectRatio} : {flex: aspectRatio}}>
                                {renderChildren(isLastRow)}
                            </div>;
                        })}
                    </div>
                })}
            </div>
        </>
    );
}

export {TSJustifiedLayout}