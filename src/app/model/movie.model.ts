export interface Movie {
  d: D[]
  q: string
  v: number
}

export interface D {
  i: I
  id: string
  l: string
  q: string
  qid: string
  rank: number
  s: string
  y: number
  yr?: string
}

export interface I {
  height: number
  imageUrl: string
  width: number
}
