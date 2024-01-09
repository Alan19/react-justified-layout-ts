"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSJustifiedLayout = void 0;
const react_1 = __importStar(require("react"));
function TSJustifiedLayout({ children, images, itemSpacing = 10, rowSpacing = 10, showWidows = true, targetRowHeight = 320, targetRowHeightTolerance = .25, width }) {
    const minAspectRatio = width / targetRowHeight * (1 - targetRowHeightTolerance);
    const maxAspectRatio = width / targetRowHeight * (1 + targetRowHeightTolerance);
    /**
     *
     * @param value The new aspect ratio to be checked
     * @return If the buffer can accept the new value
     * */
    function addItem(value) {
        const newItems = rowBuffer.concat(value);
        const newAspectRatio = newItems.map(data => data.dimensions).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
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
                rows.push({ items: rowBuffer, height: rowWidthWithoutSpacing / newAspectRatio });
                rowBuffer = [];
                return true;
            }
            else {
                // Calculate width/aspect ratio for row before adding new item
                const previousRowWidthWithoutSpacing = width - (rowBuffer.length - 1) * itemSpacing;
                const previousAspectRatio = rowBuffer.map(data => data.dimensions).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
                const previousTargetAspectRatio = previousRowWidthWithoutSpacing / targetRowHeight;
                // If the new aspect ratio is farther from the target after the insert, then push row buffer and insert new item into the next row
                if (Math.abs(newAspectRatio - targetAspectRatio) > Math.abs(previousAspectRatio - previousTargetAspectRatio)) {
                    rows.push({ items: rowBuffer, height: previousRowWidthWithoutSpacing / previousAspectRatio });
                    rowBuffer = [];
                    return false;
                }
                // If the new aspect ratio is closer to the target aspect ratio, then insert item and push row buffer
                else {
                    rowBuffer.push(value);
                    rows.push({ items: rowBuffer, height: rowWidthWithoutSpacing / newAspectRatio });
                    rowBuffer = [];
                    return true;
                }
            }
        }
        else {
            // New aspect ratio is within aspect ratio tolerance, so we finish off the row
            rowBuffer.push(value);
            rows.push({ items: rowBuffer, height: rowWidthWithoutSpacing / newAspectRatio });
            rowBuffer = [];
            return true;
        }
    }
    const rows = [];
    let rowBuffer = [];
    images.forEach((value) => {
        const isItemSuccessfullyAdded = addItem(value);
        if (!isItemSuccessfullyAdded) {
            addItem(value);
        }
    });
    // Handle leftover content
    if (showWidows) {
        rows.push({ items: rowBuffer, height: rows.length === 0 ? targetRowHeight : rows[rows.length - 1].height });
    }
    let childNodeCounter = -1;
    /**
     * Clone the children element, and inject the height of the element as a prop
     * @param height The height that the element should be
     */
    function renderChildren(height) {
        childNodeCounter++;
        return (0, react_1.cloneElement)(children[childNodeCounter], Object.assign(Object.assign({}, children[childNodeCounter].props), { style: Object.assign(Object.assign({}, children[childNodeCounter].style), { height: height }) }));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { width: "100%" } }, rows.map(value => {
            return react_1.default.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    gap: itemSpacing,
                    marginBottom: rowSpacing
                } }, value.items.map(() => react_1.default.createElement("div", { style: { height: value.height } }, renderChildren(value.height))));
        }))));
}
exports.TSJustifiedLayout = TSJustifiedLayout;
