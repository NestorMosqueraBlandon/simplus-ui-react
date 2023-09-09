import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {},
  render: (args) => (
    <Icon {...args}>
      <svg viewBox="0 0 256 256">
        <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path>
      </svg>
    </Icon>
  ),
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => (
    <Icon {...args}>
      <svg viewBox="0 0 256 256">
        <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path>
      </svg>
    </Icon>
  ),
};
export const sizeLg: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <Icon {...args}>
      <svg viewBox="0 0 42 42">
        <path d="M25.0327 23.8268L28.8061 25.7102C28.6272 26.604 28.1438 27.408 27.4383 27.9851C26.7328 28.5623 25.849 28.8768 24.9375 28.875C21.8057 28.8715 18.8032 27.6259 16.5886 25.4114C14.3741 23.1968 13.1285 20.1943 13.125 17.0625C13.1247 16.1521 13.4399 15.2698 14.0169 14.5657C14.594 13.8616 15.3971 13.3791 16.2898 13.2005L18.1732 16.9739L16.5703 19.3594C16.4505 19.539 16.3769 19.7455 16.356 19.9604C16.3352 20.1753 16.3676 20.3921 16.4505 20.5915C17.3896 22.8234 19.1652 24.5989 21.397 25.538C21.597 25.6246 21.8154 25.66 22.0325 25.6411C22.2496 25.6222 22.4586 25.5496 22.6406 25.4297L25.0327 23.8268ZM38.0625 21C38.0631 23.9458 37.3011 26.8416 35.8506 29.4055C34.4 31.9694 32.3104 34.1141 29.7851 35.6308C27.2597 37.1475 24.3847 37.9846 21.4399 38.0605C18.4951 38.1365 15.5808 37.4487 12.9806 36.0642L7.3943 37.9263C6.93178 38.0806 6.43545 38.1029 5.96093 37.991C5.48641 37.879 5.05245 37.6371 4.70769 37.2923C4.36294 36.9475 4.12101 36.5136 4.00903 36.0391C3.89704 35.5645 3.91943 35.0682 4.07367 34.6057L5.93578 29.0194C4.71868 26.7311 4.03889 24.1956 3.948 21.6053C3.85711 19.0151 4.35751 16.4382 5.41122 14.0702C6.46494 11.7022 8.04427 9.60543 10.0293 7.93896C12.0144 6.27249 14.353 5.08015 16.8677 4.45244C19.3824 3.82474 22.007 3.77816 24.5424 4.31626C27.0777 4.85435 29.4572 5.96298 31.5001 7.55797C33.5431 9.15297 35.1958 11.1924 36.3329 13.5215C37.4699 15.8506 38.0614 18.4082 38.0625 21ZM31.5 24.9375C31.5002 24.6937 31.4324 24.4546 31.3043 24.2471C31.1763 24.0396 30.9929 23.8719 30.7748 23.7628L25.5248 21.1378C25.3182 21.0348 25.088 20.9882 24.8576 21.0026C24.6271 21.017 24.4046 21.0919 24.2123 21.2198L21.8023 22.8276C20.6959 22.2194 19.7855 21.309 19.1773 20.2026L20.7851 17.7926C20.913 17.6003 20.9879 17.3778 21.0023 17.1473C21.0167 16.9169 20.9701 16.6867 20.8671 16.4801L18.2421 11.2301C18.1333 11.0103 17.9651 10.8255 17.7566 10.6964C17.5482 10.5674 17.3077 10.4994 17.0625 10.5C15.322 10.5 13.6528 11.1914 12.4221 12.4221C11.1914 13.6528 10.5 15.322 10.5 17.0625C10.5043 20.8902 12.0268 24.5599 14.7334 27.2665C17.4401 29.9732 21.1098 31.4956 24.9375 31.5C25.7993 31.5 26.6527 31.3302 27.4489 31.0004C28.2451 30.6707 28.9685 30.1873 29.5779 29.5779C30.1873 28.9685 30.6707 28.245 31.0005 27.4489C31.3303 26.6527 31.5 25.7993 31.5 24.9375Z" />
      </svg>
    </Icon>
  ),
};
