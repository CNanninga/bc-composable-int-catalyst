'use client';

import { useState } from 'react';

import { getProductFaqMetafields } from '~/client/queries/get-product-faq-metafields';
import getNextProductFaqs from './_actions/get-next-product-faqs';

const ProductFaqs = ({
  productId,
  limit,
  loadMoreLabel,
  faqData,
}: {
  productId: number;
  limit: number;
  loadMoreLabel: string;
  faqData: Awaited<ReturnType<typeof getProductFaqMetafields>>;
}) => {
  return (
    <>
      
    </>
  );
};

export default ProductFaqs;
