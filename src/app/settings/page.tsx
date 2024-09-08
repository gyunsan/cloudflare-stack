"use client";

import ProfileSetting from "@/components/NextUI/Navigarion/Settings/ProfileSetting";
import AppearanceSetting from "@/components/NextUI/Navigarion/Settings/AppearanceSetting";
import AccountSetting from "@/components/NextUI/Navigarion/Settings/AccountSetting";
import BillingSetting from "@/components/NextUI/Navigarion/Settings/BillingSetting";
import TeamSetting from "@/components/NextUI/Navigarion/Settings/TeamSetting";
import { Tab, Tabs } from "@nextui-org/react";

export default function SettingsPage() {
    return (
        <div>
            <Tabs
                fullWidth
                classNames={{
                    base: "mt-6",
                    cursor: "bg-content1 dark:bg-content1",
                    panel: "w-full p-0 pt-4",
                }}
            >
                <Tab key="profile" title="Profile">
                    <ProfileSetting />
                </Tab>
                <Tab key="appearance" title="Appearance">
                    <AppearanceSetting />
                </Tab>
                <Tab key="account" title="Account">
                    <AccountSetting />
                </Tab>
                <Tab key="billing" title="Billing">
                    <BillingSetting />
                </Tab>
                <Tab key="team" title="Team">
                    <TeamSetting />
                </Tab>
            </Tabs>
        </div>
    );
}