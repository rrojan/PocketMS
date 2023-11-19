/**
 * Config for global app
 *
 * @example
 * ```ts
 * export const config: Config = {
 *  appName: "My CMS",
 *  description: "CMS generated from my Pocketbase schema",
 *  logoUrl: "/assets/logo.png" // In NextJS public folder
 * }
 * ```
 */
export type Config = {
  /** Current app name, displayed in UI */
  appName: string
  /** Description for app, displayed in UI */
  description: string
  /**
   * Valid url pointing to an image to be used as the CMS logo
   * You can use images from the Next `public` folder
   * @example
   * logoUrl: "/assets/logo.png"
   * or, import it from an external url
   * @example
   * logoUrl: "https://image.com/logo.png"
   */
  logoUrl: string
  /**
   * Pages configuration to configure while PocketBase resources are listed and displayed on the app
   * You can add pages using the `register` function as well, which appends to the `pages` list
   */
  pages?: PageConfig[]
}

/** Configuration for the list page */
export type ListConfig = {
  /**
   * Only users with permission key in this array will be able to view the list page,
   * and any links to list page.
   * Overrides the `PageConfig` permissions if applied
   * @example
   * // Users in `users` with any one of these keys in `permission` column will access this page
   * permissions: ["admin", "moderator", "sales"]
   */
  permissions?: string[]
  /** Column names of the resource to be displayed in the list page */
  columns?: string[]
  /**
   * Show or hide the update button column on list page
   * @default true
   */
  showUpdateButton?: boolean
  /**
   * Show or hide the delete button column on list page
   * @default true
   */
  showDeleteButton?: boolean
  /**
   * Number of items to be displayed on the list page
   * @default 10
   */
  perPage?: number
  /**
   * Number item sorting. Uses the PocketBase sort syntax
   * @default "-created"
   */
  defaultSort?: string
  /**
   * Enables or disables the top searchbar
   * @default true
   */
  enableSearch?: boolean
}

/** Configuration for the list page */
export type CreateConfig = {
  /**
   * Only users with permission key in this array will be able to view the create/update page,
   * and any links to those pages.
   * Overrides the `PageConfig` permissions if applied
   * @example
   * // Users in `users` with any one of these keys in `permission` column will access this page
   * permissions: ["admin", "moderator", "sales"]
   */
  permissions?: string[]
  /**
   * Fields to show on the page. If a field is not included here, but exists on the collection, it will be omitted
   * By default all fields on the resource are listed in alphabetical order
   */
  fields: (string | string[])[]
  /**
   * Fields marked and validated as required
   * By default fields are not marked or validated as required fields
   */
  requiredFields?: string[]
  /**
   * Show or hide the delete button column on list page
   * @default true
   */
  showDeleteButton?: boolean
  /** Additional Zod validations for fields */
  validations?: unknown[]
  /** Disable page for all users */
  disabled?: boolean
}

export type UpdateConfig = CreateConfig & {
  /**
   * Show or hide the delete button column on list page
   * @default true
   */
  showDeleteButton?: boolean
}

export type DeleteConfig = {
  /**
   * Only users with permission key in this array will be able to delete this resource
   * Overrides the `PageConfig` permissions if applied
   * @example
   * // Users in `users` with any one of these keys in `permission` column can delete resource
   * permissions: ["admin", "moderator", "sales"]
   */
  permissions?: string[]
}

export type PageConfig = {
  /**
   * Name of the resource, as named in PocketBase
   * @example
   * resourceName: "posts" // There must be a posts collection in PocketBase
   */

  resourceName: string
  /**
   * Display title of the resource
   * @example
   * resourceName: "posts",
   * title: "Blog Posts"
   */
  title: string
  /**
   * Description of the resource, displayed as hints in the UI
   * @example
   * resourceName: "posts",
   * title: "Blog Posts",
   * description: "Manage posts to be displayed on the Blogs page"
   */
  description: string
  /**
   * Users with permission key in this array will be able to List, Create, Update and Delete resource
   * Is overridden by individual (list / create / update / delete) permissions if applied
   * @example
   * // Users in `users` with any one of these keys in `permission` column can list / create / update / del
   * permissions: ["admin", "moderator", "sales"]
   */
  permissions?: string[]
  /** Configurations for the list page */
  list?: ListConfig
  /** Configurations for the create page */
  create?: CreateConfig
  /** Configurations for the update page */
  update?: UpdateConfig
  /** Configurations for the delete page */
  delete?: DeleteConfig
}
