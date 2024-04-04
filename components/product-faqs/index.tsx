'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@bigcommerce/components/accordion';
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
  const [faqs, setFaqs] = useState(faqData.faqs);

  return (
    <>
      <Accordion type="multiple">
        {faqs.map((faq) => (
          <AccordionItem className="my-2 border border-gray-200 p-2"
            key={faq.key} value={faq.key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ProductFaqs;
