import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { cache } from 'react';
import { z } from 'zod';

import { client } from '..';
import { graphql } from '../graphql';
import { revalidate } from '../revalidate-target';

export const getProductFaqMetafields = cache(
  async (
    productId: number,
    limit: number,
    after?: string | null
  ) => {
    return {
      endCursor: null,
      faqs: [],
    };
  },
);
