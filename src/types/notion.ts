import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type NotionPropertyTypes = {
  title: {
    type: "title";
    title: RichTextItemResponse[];
    id: string;
  };
  rich_text: {
    type: "rich_text";
    rich_text: RichTextItemResponse[];
    id: string;
  };
  multi_select: {
    type: "multi_select";
    multi_select: Array<{
      name: string;
    }>;
    id: string;
  };
  date: {
    type: "date";
    date: {
      start: string;
      end?: string;
    } | null;
    id: string;
  };
  files: {
    type: "files";
    files: Array<{
      file?: {
        url: string;
      };
      external?: {
        url: string;
      };
    }>;
    id: string;
  };
}

export type NotionProperties = {
  Title: NotionPropertyTypes["title"];
  Description: NotionPropertyTypes["rich_text"];
  slug: NotionPropertyTypes["rich_text"];
  Author: NotionPropertyTypes["rich_text"];
  Tags: NotionPropertyTypes["multi_select"];
  Date: NotionPropertyTypes["date"];
  cover: NotionPropertyTypes["files"];
}

export type NotionPage = {
  id: string;
  created_time: string;
  properties: NotionProperties;
} 