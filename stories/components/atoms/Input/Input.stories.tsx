import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input.tsx";

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

// const Template = (args: InputProps) => <Input {...args} />
const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({});
Default.args = {
  label: 'Masukan Nama Lengkap'
}