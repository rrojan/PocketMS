import { Config } from "@/pocketms/types"
import { register } from "@/pocketms"

export const config: Config = {
  appName: "My PocketMS App Name",
  description: "My PocketMS App Description",
  logoUrl: "/images/logo.png",
}

register(config, {
  resourceName: "users",
  title: "Users",
  description: "User Management",
  permissions: ["admin"], // Applies to list, create, update, delete
  list: {
    columns: ["name", "username", "email", "permissions", "created", "updated"],
  },
  create: {
    fields: ["name", ["username", "email"], "permissions"],
  },
  update: {
    fields: ["name", ["username", "email"], "permissions"],
  },
})
