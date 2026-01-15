import {
  defineRSSHubSource,
  defineSource,
} from "#/utils/source"

export default defineSource({
  reuters: defineRSSHubSource("/reuters/world"),
})
