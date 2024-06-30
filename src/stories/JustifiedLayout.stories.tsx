import type {Meta, StoryObj} from "@storybook/react";
import {ConfiguredJustifiedLayout} from "./ConfiguredJustifiedLayout";
import React from "react";

const meta = {
    title: 'JustifiedLayout/Basic',
    component: ConfiguredJustifiedLayout,
} satisfies Meta<typeof ConfiguredJustifiedLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

const displayedImages = [
    {
        "title": "Castor Evolved",
        "artist": "@TOOMIRO",
        "tags": [
            "Castor",
            "Featured"
        ],
        "href": "https://x.com/FaintAlcor/status/1749579348045111636?s=20",
        "published": "2024-01-22",
        "aspectRatio": 1.48,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/castor_evolved.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/castor_evolved.png",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/castor_evolved.png"
    },
    {
        "title": "Techwear Ninja v2",
        "artist": "@edadrz",
        "tags": [
            "Rastaban Form",
            "Techwear",
            "Hibernal Assassin"
        ],
        "href": "https://x.com/edadrz2/status/1750189393833517203?s=20",
        "published": "2024-01-24",
        "aspectRatio": 0.7857142857142857,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/techwear_ninja_v2.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/techwear_ninja_v2.png",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/techwear_ninja_v2.png"
    },
    {
        "title": "Glimmer on the Shore",
        "artist": "@SiN_remyheart",
        "tags": [
            "Jupiter Form",
            "Featured"
        ],
        "href": "https://x.com/SiN_remyheart/status/1750043825161244678?s=20",
        "published": "2024-01-24",
        "aspectRatio": 1.15625,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/glimmer_on_the_shore.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/glimmer_on_the_shore.png",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/glimmer_on_the_shore.png"
    },
    {
        "title": "Farmer Sketch",
        "artist": "@KuroPenguinEx",
        "tags": [
            "Aquarius Form"
        ],
        "href": "https://x.com/FaintAlcor/status/1751444972904063414?s=20",
        "published": "2024-01-27",
        "aspectRatio": 0.7069555302166477,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/farmer_sketch.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/farmer_sketch.webp%7D",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/farmer_sketch.png"
    },
    {
        "parent": "Farmer Sketch",
        "tags": [
            "Aquarius Form"
        ],
        "href": "",
        "aspectRatio": 0.7069555302166477,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/farmer_sketch/0.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/farmer_sketch/0.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/farmer_sketch/0.png"
    },
    {
        "title": "My Room",
        "artist": "@ito_44_3",
        "tags": [
            "Thuban Form"
        ],
        "href": "https://x.com/ito_44_3/status/1759850276633419776?s=20",
        "published": "2024-02-02",
        "aspectRatio": 1.4166666666666667,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/my_room.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/my_room.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/my_room.png"
    },
    {
        "title": "Triangulum Combat Suit",
        "artist": "@neumokun",
        "tags": [
            "Triangulum Form"
        ],
        "href": "https://bsky.app/profile/neumokun.bsky.social/post/3klncrgkl5z24",
        "published": "2024-02-17",
        "aspectRatio": 0.7501875468867217,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/triangulum_combat_suit.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/triangulum_combat_suit.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/triangulum_combat_suit.png"
    },
    {
        "tags": [
            "Eclipse Deity"
        ],
        "href": "",
        "aspectRatio": 0.8243310619910255,
        "parent": "Eclipse Deity v3",
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/eclipse_deity_v3/0.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/eclipse_deity_v3/0.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/eclipse_deity_v3/0.png"
    },
    {
        "title": "Biogenesis Suit Design",
        "artist": "@EmberWickArt",
        "tags": [
            "Superhero",
            "Bodysuit"
        ],
        "href": "https://x.com/EmberWickArt/status/1795127025331577256",
        "published": "2024-05-27",
        "aspectRatio": 1.0115606936416186,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/biogenesis_suit_design.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/biogenesis_suit_design.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/biogenesis_suit_design.png"
    },
    {
        "title": "Alan and Alcor",
        "artist": "@kongzorim",
        "tags": [
            "Aldhibah Form",
            "Rastaban Form",
            "Standard Outfit"
        ],
        "href": "https://x.com/kongzorim/status/1795818089080385818",
        "published": "2024-05-29",
        "aspectRatio": 0.7056150600454398,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/alan_and_alcor.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/alan_and_alcor.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/alan_and_alcor.png"
    },
    {
        "tags": [
            ""
        ],
        "href": "",
        "aspectRatio": 1.7777777777777777,
        "parent": "Proud Summer Beach YCH",
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/proud_summer_beach_ych/0.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/proud_summer_beach_ych/0.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/proud_summer_beach_ych/0.png"
    },
    {
        "title": "Soma's Spring Outfit",
        "artist": "@kaerukbin",
        "tags": [
            "Soma"
        ],
        "href": "https://skeb.jp/@kaerukbin/works/4",
        "published": "2024-05-31",
        "aspectRatio": 0.763189448441247,
        "thumbnailUrl": "https://alcorsiteartbucket.s3.amazonaws.com/600h/soma_s_spring_outfit.webp",
        "webp": "https://alcorsiteartbucket.s3.amazonaws.com/webp/soma_s_spring_outfit.webp",
        "src": "https://alcorsiteartbucket.s3.amazonaws.com/soma_s_spring_outfit.png"
    }
]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    name: "Complex Elements",
    args: {
        width: 847,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        layoutItems:  displayedImages.map(value => value.aspectRatio),
        targetRowHeightTolerance: undefined,
        children: displayedImages.map(value => <div style={{position: "relative"}}>
            <div style={{top: 16, left: 16, position: "absolute"}}>Testing</div>
            <img src={value.webp}/></div>)
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
        layoutItems:  displayedImages.slice(1,5).map(value => value.aspectRatio),
        targetRowHeightTolerance: undefined,
        children: displayedImages.slice(1, 5).map(value => <img src={value.webp} /> )
    },
}

export const Single: Story = {
    name: "Single Elements",
    args: {
        children: [<img src={'https://alcorsiteartbucket.s3.amazonaws.com/webp/alcor_wow.webp'} />],
        width: 847,
        showWidows: true,
        targetRowHeight: undefined,
        rowSpacing: undefined,
        itemSpacing: undefined,
        targetRowHeightTolerance: undefined,
        layoutItems: [1],
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
        layoutItems: [1],
    }
}