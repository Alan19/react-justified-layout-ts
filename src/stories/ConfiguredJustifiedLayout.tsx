import {TSJustifiedLayout, TSJustifiedLayoutProps} from "../components/TSJustifiedLayout/TSJustifiedLayout";
import React from "react";

const displayedImages = [
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

export const ConfiguredJustifiedLayout = ({
                                              layoutItems = displayedImages.map(value => value.aspectRatio),
                                              rowSpacing = 8,
                                              width = 1000,
                                              itemSpacing = 8,
                                              targetRowHeight = 320,
                                              targetRowHeightTolerance = 0.10,
                                              showWidows = true,
                                              ...props
                                          }: TSJustifiedLayoutProps) =>
    <TSJustifiedLayout layoutItems={displayedImages.map(value => value.aspectRatio)} width={width} itemSpacing={itemSpacing} targetRowHeight={320} targetRowHeightTolerance={targetRowHeightTolerance} rowSpacing={rowSpacing} showWidows={showWidows} {...props}>
        {displayedImages.map(value => <img alt={value.title} src={value.webp}/>)}
    </TSJustifiedLayout>