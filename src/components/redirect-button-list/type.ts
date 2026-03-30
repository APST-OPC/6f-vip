export interface RedirectContent {
  title: string;
  image: string;
  subTitle: string;
}

export interface RedirectBtn {
  items: RedirectContent | "retest";
}
