# PocketMS - Instant PocketBase CMS 

Instantly create user-facing permissioned CMS from PocketBase! 🚀

Just:
1. Create a `permissions: string` column in your PocketBase `users` collection
2. Generate a typescript schema from your PocketBase DB
3. Import the generated type file through the setup UI
4. You now have a fully functioning CMS

## Goals
- [ ] **Autogenerate an entire CMS**: Create a CMS from your PocketBase schema based on [Pocketbase Typegen](https://github.com/patmood/pocketbase-typegen)
- [ ] **Authentication**: Login for users and users management for admin
- [ ] **User Permissions** - display/hide links and allow/block access to page based on permissions
- [ ] **Allow configuration** (show/hide fields, order of inputs) of pages based on `pocketms.config.ts`

## Additional Goals
- [ ] Allow **SEO** / metadata management directly from CMS
- [ ] Analytics
- [ ] Localization

## Basic Stack
- NextJS 14
- Tailwind
- NextUI
- Pocketbase Typegen
- Pocketbase SDK
- Zod

## Gameplan:
- Implement PocketBase auth
- Import pocketbase types from Pocketbase Typegen using the `Setup` UI
- Use a global page `[...pathname]/page.tsx` to catch all segments
- Implement dashboard & three page types: `List`, `Create`, `Update` with `Delete` option on List and Update
- Fully based on NextJS 14. **Async React Server Components + Server Actions + Revalidation + Suspense**

### List
- Display a list of 10 records
- Pagination
- Sorting
- Search
- Columns can be defined in the `pocketms.config.ts` file

### Create
- Form with the collection's fields with a fitting input element
- Form elements display/hide, order and other configuration based on `pocketms.config.ts`
- Form validation

## Update
- Form with the collection's fields with a fitting input element
- Form elements display/hide, order and other configuration based on `pocketms.config.ts`
- Form validation
- Form default values from existing record

## Delete
- Delete server action triggered on button click on `List` or `Update` page


## Getting Started

Tun the development server:

```bash
pnpm dev
```

