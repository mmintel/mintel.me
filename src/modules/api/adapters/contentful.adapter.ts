import { TYPES } from './../../types';
import { inject, injectable } from 'inversify';
import {
  ContentfulService,
  ContentfulEntry,
  ContentfulQuery,
} from '../../contentful';
import { ApiClient, Query, Record } from '../api.interfaces';
import { Logger, createLogger } from '../../../utils/logger';
import * as flatten from 'flattenjs';
@injectable()
export class ContentfulApiAdapter implements ApiClient {
  private logger: Logger = createLogger('ContentfulApiAdapter');

  constructor(
    @inject(TYPES.ContentfulService)
    private contentfulService: ContentfulService,
  ) {}

  public async getMany<T>(query: Query): Promise<Record<T>[]> {
    const entries = await this.contentfulService.getEntries(
      this.convertQuery(query),
    );
    const parsedEntries = entries.items.map(this.entryToRecord);
    return parsedEntries;
  }

  public async getOne<T>(query: Query): Promise<Record<T>> {
    const item = await this.contentfulService.getEntry(
      this.convertQuery(query),
    );
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
    const meta = {
      id,
      createdAt,
      updatedAt,
    };

    return {
      meta,
      data: fields,
    };
  }
}
