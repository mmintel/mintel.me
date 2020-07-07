import * as contentful from 'contentful';
import * as flatten from 'flattenjs';
import { injectable } from 'inversify';

import { Logger, createLogger } from '../lib/logger';
import { ApiClient, Query } from './api';
import { Record } from '../models';

export type ContentfulEntry<T> = contentful.Entry<T>;
export type ContentfulEntryCollection<T> = contentful.EntryCollection<T>;

export interface ContentfulQuery {
  [key: string]: any;
  content_type?: string;
  include?: number;
}

interface Options {
  space: string;
  accessToken: string;
  preview?: boolean;
}

interface Fields {
  [key: string]: any;
}

@injectable()
export class ContentfulApiClient implements ApiClient {
  private logger: Logger = createLogger('ContentfulApiClient');
  private client: contentful.ContentfulClientApi;

  constructor(options: Options) {
    this.client = contentful.createClient({
      space: options.space,
      accessToken: options.accessToken,
      host: options.preview ? 'preview.contentful.com' : 'cdn.contentful.com',
    });
  }

  public async getMany<T>(query: Query): Promise<Record<T>[]> {
    const entries = await this.getEntries(this.convertQuery(query));
    const parsedEntries = entries.items.map(this.entryToRecord);
    return parsedEntries;
  }

  public async getOne<T>(query: Query): Promise<Record<T>> {
    const item = await this.getEntry(this.convertQuery(query));

    if (!item) {
      this.logger.warn('Could not find item for query:', query);
      return null;
    }

    return this.entryToRecord<T>(item);
  }

  private convertQuery(query: Query): ContentfulQuery {
    const fields = flatten.flatten({ fields: query.fields });
    const converted = {
      content_type: query.type,
      include: query.levels,
      ...fields,
    };
    this.logger.trace('Converted query from', query, 'to', converted);
    return converted;
  }

  private entryToRecord<T>(entry: ContentfulEntry<T>): Record<T> {
    const { fields, sys } = entry;
    const { createdAt, updatedAt, id } = sys;

    return {
      meta: {
        id,
        createdAt,
        updatedAt,
      },
      data: this.parseFields<T>(fields),
    };
  }

  private parseFields<T>(fields: Fields): T {
    const parsedFields: Fields = { ...fields };

    for (const [key, value] of Object.entries(fields)) {
      if (Array.isArray(value)) {
        this.logger.trace(`Found multiple nested items at "${key}".`);
        parsedFields[key] = value.map(item => this.entryToRecord(item));
      }

      if (value.fields) {
        this.logger.trace(`Found single nested item at "${key}".`);
        parsedFields[key] = this.entryToRecord(value);
      }
    }

    return parsedFields as T;
  }

  private async getEntries(
    query: ContentfulQuery,
  ): Promise<ContentfulEntryCollection<any>> {
    this.logger.trace('Looking up entry with query', query);
    const entries = await this.client.getEntries(query);
    this.logger.trace('Received entries', entries);
    return entries;
  }

  private async getEntry(
    query: ContentfulQuery,
  ): Promise<ContentfulEntry<any>> {
    const entries = await this.getEntries({
      ...query,
      limit: 1,
    });
    return entries.items[0];
  }

  // private async getEntryByID<T>(id: string): Promise<ContentfulEntry<T>> {
  //   return this.client.getEntry<T>(id);
  // }
}
