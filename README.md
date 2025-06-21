A TypeScript component similar to Flickr's justified layout.

# Usage


Add the `TSJustifiedLayout` component to your code with the following props:

- `aspectRatioList: number[];` - An array of aspect ratios for the images you are adding to the grid
- `itemSpacing?: number;` - The amount of spacing between each image, in pixels. (Default: 10)
- `rowSpacing?: number;` - The amount of spacing between each row, in pixels. (Default: 10)
- `targetRowHeight?: number;` - The target row height for a row, in pixels. (Default: 320)
- `targetRowHeightTolerance?: number;` - The amount the row height could deviate from the target row height, as a percent. (Default: .25)
- `width: number;` - The width of the container. I would use something like `react-use-measure` if you're trying to make it dynamically take up the size of the parent container.
- `children: any[];` - The children elements that makes up the grid.
- `showWidows?: boolean;` - If the last row should be shown. (Default: true)

## Example Usage


```typescript jsx
<TSJustifiedLayout width={width}
                   aspectRatioList={imagesOnPage.map(value => ({
       dimensions: value.aspectRatio || 1
    }))}>
        {imagesOnPage.map(value => <img
            src={value.src}
            alt={value.alt}
        />)}
</TSJustifiedLayout>
```

# Install


`npm i react-justified-layout-ts`

# Credits


The display logic for the layout and the math used to calculate the row height for each row is adapted from [Flickr's Justified Layout library](https://github.com/flickr/justified-layout).

# License


Open Source Licensed under the MIT license.