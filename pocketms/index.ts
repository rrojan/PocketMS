import { Config, PageConfig } from "./types"

export const register = (config: Config, page: PageConfig) => {
  config.pages?.push(page)
}
