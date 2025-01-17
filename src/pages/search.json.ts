import type { MarkdownInstance } from 'astro';
import { SITE } from 'src/config';
import { showInSearch } from '@util/PageTypeFilters.astro';
import { addSlashToAddress } from '@util/Url.astro';

const getData = async () => {
    //@ts-ignore
    const allPages = import.meta.glob('./**/*.md');
    const items = [];

    console.log('SITE', SITE.url)

    for (const path in allPages) {
        const page = await allPages[path]() as  MarkdownInstance<Record<string, any>>;

        if (!showInSearch(page)) {
            continue;
        }

        let url = page.url ?? '';
    
        if (page.frontmatter.paged) {
            url += '/1/';
        }

        const headings = await page.getHeadings();
              
        items.push({
            title: page.frontmatter.title ?? '',
            headings: headings.map(h => h.text),
            tags: page.frontmatter.keywords ?? '',
            url: SITE.url + addSlashToAddress(url),
            date: page.frontmatter.pubDate ?? ''
        });
    }

    return {
        body: JSON.stringify(items)
    }
}

export const get = getData;
