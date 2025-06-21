import type {Meta, StoryObj} from "@storybook/react";
import {ConfiguredJustifiedLayout} from "./ConfiguredJustifiedLayout";
import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const meta = {
    title: 'JustifiedLayout/Basic',
    component: ConfiguredJustifiedLayout,
} satisfies Meta<typeof ConfiguredJustifiedLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

const displayedImages = [
    {
        "title": "Outfit Sheet",
        "artist": "@godbirdart",
        "tags": [
            "Vernal",
            "Serotinal Circuitboard",
            "Estival Checker",
            "Autumnal Wavesniper",
            "Hibernal Assassin",
            "Rastaban Form",
            "Knives",
            "Techwear",
            "Hoodie",
            "Bodysuit",
            "Featured"
        ],
        "href": "https://x.com/FaintAlcor/status/1785179761309839456",
        "published": "2024-04-30",
        "aspectRatio": 2.35,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/outfit_sheet.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/outfit_sheet.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/outfit_sheet.PNG"
    },
    {
        "title": "Quick-Draw Stance",
        "artist": "@RSN_07",
        "tags": [
            "Aquarius Form",
            "Featured"
        ],
        "href": "https://x.com/RSN_07/status/1775664237119217719?s=20",
        "published": "2024-04-03",
        "aspectRatio": 0.6328125,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/quick_draw_stance.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/quick_draw_stance.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/quick_draw_stance.PNG"
    },
    {
        "title": "Evening Train",
        "artist": "@greyy_arts",
        "tags": [
            "Estival Checker",
            "Rastaban Form",
            "Hoodie",
            "Featured"
        ],
        "href": "https://twitter.com/greyy_arts/status/1613748293531758593",
        "published": "2023-01-12",
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/evening_train.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/evening_train.png",
        "aspectRatio": 0.8203125,
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/evening_train.webp"
    },
    {
        "src": "https://pbs.twimg.com/media/Fj2qZYRVEAAVyRC?format=jpg&name=large",
        "title": "AICore Relaxing",
        "href": "https://twitter.com/KuroPenguinEx/status/1602624683211227136/photo/1",
        "artist": "@KuroPenguinEx",
        "tags": [
            "AICore Form",
            "Thuban Form",
            "Featured"
        ],
        "published": "2022-12-13",
        "aspectRatio": 1.3333333333333333
    },
    {
        "title": "Sci-fi Mode: ON",
        "href": "https://twitter.com/AxyUsagi/status/1543041029674344448?s=20&t=tlXwc5aegdXuQeLhgdUw-Q",
        "artist": "@AxyUsagi",
        "src": "https://pbs.twimg.com/media/FWn7dJ9XkAIHM5j?format=jpg&name=medium",
        "tags": [
            "Thuban Form",
            "Knives",
            "Hoodie",
            "Techwear",
            "Bodysuit",
            "Featured"
        ],
        "published": "2022-07-01",
        "aspectRatio": 0.9166666666666666
    },
    {
        "title": "Lance Hero",
        "href": "https://twitter.com/eb_kemo/status/1521991097098305536?s=20&t=8fG0sc10hW-oJEyn8HzT3w",
        "src": "https://pbs.twimg.com/media/FR8y1bnakAA0Pol?format=jpg&name=large",
        "artist": "@eb_erh",
        "tags": [
            "Rastaban Form",
            "Gungrir Suit",
            "Lances",
            "Superhero",
            "Featured"
        ],
        "published": "2022-05-04",
        "aspectRatio": 0.85107421875
    },
    {
        "src": "https://pbs.twimg.com/media/FnHp4nWaUAA-lgD?format=jpg&name=large",
        "title": "Special Archery Training!",
        "href": "https://twitter.com/Yamainu_ken/status/1617331411761115138?s=20",
        "tags": [
            "Superhero",
            "Indra Suit",
            "Bow",
            "Bodysuit",
            "Thuban Form",
            "Featured"
        ],
        "artist": "@Yamainu_ken",
        "published": "2023-01-22",
        "aspectRatio": 1.5442260442260443
    }
]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    name: "Complex Elements",
    args: {
        width: 491,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        aspectRatioList: displayedImages.map(value => value.aspectRatio),
        targetRowHeightTolerance: undefined,
        children: displayedImages.map(value => <>
                <div style={{top: 16, left: 16, position: "absolute"}}>Testing</div>
            <img src={value.webp ?? value.src}/>
            </>
        ),
        containerStyle: {position: 'relative'}
    },
};


export const Secondary: Story = {
    name: "Image Tag Elements",
    args: {
        width: 847,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        aspectRatioList: displayedImages.slice(1, 5).map(value => value.aspectRatio),
        targetRowHeightTolerance: undefined,
        children: displayedImages.slice(1, 5).map(value => <img src={value.webp ?? value.src}/>)
    },
}

export const Divs: Story = {
    name: "Divs Only",
    args: {
        width: 847,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        aspectRatioList: displayedImages.slice(1, 5).map(value => value.aspectRatio),
        targetRowHeightTolerance: undefined,
        children: displayedImages.slice(1, 5).map(value => <Skeleton style={{aspectRatio: value.aspectRatio}}/>)
    },
}

export const Single: Story = {
    name: "Single Elements",
    args: {
        children: [<img src={'https://alcorsiteartbucket.s3.amazonaws.com/webp/alcor_wow.webp'}/>],
        width: 847,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        targetRowHeightTolerance: undefined,
        aspectRatioList: [1],
    }
}

export const SingleWithDiv: Story = {
    name: "Complex Single Element",
    args: {
        children: [<div><img src={'https://alcorsiteartbucket.s3.amazonaws.com/webp/alcor_wow.webp'}/></div>],
        width: 847,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        targetRowHeightTolerance: undefined,
        aspectRatioList: [1],
    }
}