export interface PostMeta {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
}

export interface Post extends PostMeta {
  contentHtml: string
}
