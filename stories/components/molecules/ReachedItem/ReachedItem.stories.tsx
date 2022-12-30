import { Meta, Story } from "@storybook/react";
import ReachedItem, { ReachedItemProps } from "../../../../components/molecules/ReachedItem";

export default {
  title: 'Components/Molecules/ReachedItem',
  component: ReachedItem,
} as Meta;

// const Template = (args: ReachedItemProps) => <ReachedItem {...args} />
const Template: Story<ReachedItemProps> = (args) => <ReachedItem {...args} />

export const Default = Template.bind({});

// gambar thumbnail gaakan muncul, jadi harus serve di package-lock.json "storybook": "start-storybook -s ./public -p 6006")
// -s : static folder,
Default.args = {
  title: "290M+",
  desc: "Players Top Up",
}