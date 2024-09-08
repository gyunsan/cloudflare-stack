import { Chip } from "@nextui-org/react";

import { type SidebarItem } from "./Sidebar";

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const items: SidebarItem[] = [
    {
        key: "dashboard",
        href: "/dashboard",
        icon: "solar:home-2-linear",
        title: "Home",
    },
    {
        key: "ingredients",
        href: "/ingredients",
        icon: "fluent:food-carrot-20-regular",
        title: "Ingredients",
        endContent: (
            <Chip size="sm" variant="flat">
                New
            </Chip>
        ),
    },
    {
        key: "recipes",
        href: "/recipes",
        icon: "mdi:food-ramen",
        title: "Recipes",
        endContent: (
            <Chip size="sm" variant="flat">
                Coming soon
            </Chip>
        ),
    },
    {
        key: "analytics",
        href: "/analytics",
        icon: "solar:chart-outline",
        title: "Analytics",
    },
    {
        key: "settingss",
        href: "/settings",
        icon: "solar:bill-list-outline",
        title: "Settings",
    },
];
