import type {Meta, StoryObj} from "@storybook/react";
import {ConfiguredJustifiedLayout} from "./ConfiguredJustifiedLayout";

const meta = {
    title: 'JustifiedLayout/Basic',
    component: ConfiguredJustifiedLayout,
} satisfies Meta<typeof ConfiguredJustifiedLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        width: 847,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        layoutItems: [],
        targetRowHeightTolerance: undefined,
        children: []
    },
};
