import { PageObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

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
    } | null;
    id: string;
  };
  files: {
    type: "files";
    files: Array<{
      file: {
        url: string;
      };
    }>;
    id: string;
  };
}

export type NotionProperties = {
  Title: NotionPropertyTypes["title"];
  Description: NotionPropertyTypes["rich_text"];
  Slug: NotionPropertyTypes["rich_text"];
  Author: NotionPropertyTypes["rich_text"];
  Tags: NotionPropertyTypes["multi_select"];
  Date: NotionPropertyTypes["date"];
  Image: NotionPropertyTypes["files"];
}

export interface NotionPage extends PageObjectResponse {
  properties: NotionProperties;
} 