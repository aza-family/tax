import { storiesOf } from "@storybook/vue";

import Tile from "./Tile.vue";

storiesOf("Board Tile", module).add("default", () => ({
  components: { Tile },
  template: `<Tile />`,
}));
