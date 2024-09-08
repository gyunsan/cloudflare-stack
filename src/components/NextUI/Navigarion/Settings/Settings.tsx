import ProfileSetting from "./ProfileSetting";
import AppearanceSetting from "./AppearanceSetting";
import AccountSetting from "./AccountSetting";
import BillingSetting from "./BillingSetting";
import TeamSetting from "./TeamSetting";
import { Tab, Tabs } from "@nextui-org/react";

export default function Settingss() {
    return (
        <div>
            <Tabs

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