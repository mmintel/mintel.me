import { Locale } from '@/lib/core/domain';

export interface GetPageRequestDTO {
  locale: Locale;
  slug: string;
}
