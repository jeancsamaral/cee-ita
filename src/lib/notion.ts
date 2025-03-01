import 'server-only';
import { Client } from '@notionhq/client';
import React from 'react';
import { PageObjectResponse, BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionPage } from "@/types/notion";

// Export the notion client
export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function fetchPages() {
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID as string,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Live'
                }
            }
        });
        
        console.log('Notion API raw response:', response);
        return response;
    } catch (error) {
        console.error('Error in fetchPages:', error);
        throw error;
    }
}

export const fetchBySlug = React.cache(async (slug: string) => {
    try {
        console.log('Fetching page with slug:', slug);
        
        if (!process.env.NOTION_DATABASE_ID) {
            throw new Error('NOTION_DATABASE_ID is not defined');
        }

        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: 'slug',
                rich_text: {
                    equals: slug,
                }
            }
        });
        
        console.log('Response from Notion:', {
            hasResults: !!response.results.length,
            firstResult: response.results[0] || null
        });

        if (!response.results.length) {
            console.log('No page found with slug:', slug);
            return undefined;
        }

        return response.results[0] as NotionPage;
    } catch (error) {
        console.error('Error in fetchBySlug:', {
            error,
            slug,
            databaseId: process.env.NOTION_DATABASE_ID
        });
        throw error;
    }
});

export const fetchPageBlocks = React.cache(async (pageId: string) => {
    try {
        const response = await notion.blocks.children.list({
            block_id: pageId,
        });
        return response.results as BlockObjectResponse[];
    } catch (error) {
        console.error('Error in fetchPageBlocks:', error);
        throw error;
    }
});

// Add this function to help debug
export async function logDatabaseSchema() {
    const database = await notion.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID as string
    });
    console.log('Database schema:', JSON.stringify(database, null, 2));
}
