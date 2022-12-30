import { Meta, Story } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItem";

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;

// const Template = (args: GameItemProps) => <GameItem {...args} />
const Template: Story<GameItemProps> = (args) => <GameItem {...args} />

export const Default = Template.bind({});

// gambar thumbnail gaakan muncul, jadi harus serve di package-lock.json "storybook": "start-storybook -s ./public -p 6006")
// -s : static folder,
Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png'
}