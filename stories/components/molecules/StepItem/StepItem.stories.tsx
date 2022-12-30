import { Meta, Story } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/StepItem";

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

// const Template = (args: StepItemProps) => <StepItem {...args} />
const Template: Story<StepItemProps> = (args) => <StepItem {...args} />

export const Default = Template.bind({});

// gambar thumbnail gaakan muncul, jadi harus serve di package-lock.json "storybook": "start-storybook -s ./public -p 6006")
// -s : static folder,
Default.args = {
  icon: 'step-1',
  title: '1. Start',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up'
}